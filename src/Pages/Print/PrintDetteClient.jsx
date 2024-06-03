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
import { getDette } from "../../actions/DetteClientAction";

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
    borderBottomWidth: 0,
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
    borderRightWidth: 1 /* Ajoute une ligne verticale à droite de chaque cellule */,
    borderBottomWidth: 1,
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
  tableColHeaderNew: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
  },
});

const PrintDetteClient = () => {
  const [etatData, setEtatData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [typeText, setTypeText] = useState("");
  let { datadebut, datefin } = useParams();

  const today = new Date();
  const dateNow = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  useEffect(() => {
    getDette(datadebut, datefin)
      .then((membre) => {
        setEtatData(membre);
        console.log(datefin);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

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

            <View style={styles.body}>
              <View className="text-center">
                <Text style={{ fontSize: 15, textDecoration: "underline" }}>
                  {" "}
                  Liste des dettes client(
                  {` Du ${dateFormat(datadebut, "dd/mm/yyyy")} Au ${dateFormat(
                    datefin,
                    "dd/mm/yyyy"
                  )}`}
                  ){" "}
                </Text>
                <Text> </Text>
              </View>
              <View>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Nom Récepteur</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Montant dette</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Montant payer</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Date</Text>
                    </View>{" "}
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Motif</Text>
                    </View>
                  </View>
                  {etatData.map((etatDatas) => (
                    <View style={styles.tableRow}>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.id_transaction.nom_recepteur}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.montant_dette}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.montantpayer}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {dateFormat(etatDatas.created_at, "dd/mm/yyyy")}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.motif_dette}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PrintDetteClient;
