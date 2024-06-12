import React, { useState, useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import dateFormat from "dateformat";
import { useParams } from "react-router-dom";
import {
  getEntreJourneAll,
  getEntreJourneAlls,
} from "../../actions/EntreAction";
import { getAllgroupage } from "../../actions/Marchandise";
import { isArray } from "chart.js/helpers";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  Titre: {
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  body: {
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
  },
  tableCol: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
});

const PrintGroupageUsers = () => {
  const [etatData, setEtatData] = useState([]);
  const [client, setclient] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [typeText, setTypeText] = useState("");
  let { id } = useParams();
  let number = 1;

  const today = new Date();
  const dateNow = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  useEffect(() => {
    getAllgroupage(id)
      .then((membre) => {
        setEtatData(membre.data);
        setclient(membre.dataclient);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  const sommeMontantsPayes = client.reduce((acc, current) => {
    const montantPayer = parseInt(current.client.montantpayer, 10);
    return acc + (isNaN(montantPayer) ? 0 : montantPayer);
  }, 0);

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <View
                style={{
                  display: "flex", // corrected from "d-flex" to "flex"
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center", // added to vertically align items in the center
                }}
              >
                <View className="col-md-6">
                  <Image src="ab.jpg" style={{ width: 200, height: 100 }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>{`Le ${dateNow}`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.Titre}>
              <View className="text-center">
                <Text style={{ fontSize: 15, textDecoration: "underline" }}>
                  Liste de manifeste
                </Text>
              </View>
            </View>
            <View style={styles.body}>
              <View>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>NOM GROUPAGE</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>N° CONTENEUR</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        DATE CHARGEMENT
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                      {etatData.nom_conteneur}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{etatData.numero}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                      Le {etatData.date_creation}
                    </Text>
                  </View>
                </View>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>N°</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>NOMS CLIENT</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>TELEPHONE</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>MARCHANDISE</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>QTE</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>MONTANTS</Text>
                    </View>
                  </View>
                </View>
                {client.map((etatDatas, index) => (
                  <React.Fragment key={index}>
                    <View style={styles.tableRow}>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{number++}</Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.client.nom_client}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.client.telephone}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        {etatDatas.client.marchandise.map(
                          (marchandise, index) => (
                            <Text key={index} style={styles.tableCell}>
                              {marchandise.produit}
                            </Text>
                          )
                        )}
                      </View>
                      <View style={styles.tableCol}>
                        {etatDatas.client.marchandise.map(
                          (marchandise, index) => (
                            <Text key={index} style={styles.tableCell}>
                              {marchandise.qte}
                            </Text>
                          )
                        )}
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.client.montantpayer}
                        </Text>
                        <Text
                          style={[
                            styles.tableCell,
                            {
                              color:
                                etatDatas.client.etat === 0 ? "red" : "black",
                            },
                            
                          ]}
                        >
                          TOTAL : {etatDatas.client.montant}
                        </Text>
                      </View>
                    </View>
                  </React.Fragment>
                ))}
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, { color: "red" }]}>
                    TOTAL : {sommeMontantsPayes}
                  </Text>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PrintGroupageUsers;
