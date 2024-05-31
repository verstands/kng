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
import {
  getConteneuClient,
  getConteneur,
  getConteneurID,
} from "../../actions/ConteneurAction";
import { useDispatch } from "react-redux";
import { getDepenseConteneurTotal } from "../../actions/DepenseConteneurAction";

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

  blackText: {
    backgroundColor: 'black',
  },

  redText: {
    backgroundColor: 'red',
  },

  greenText: {
    backgroundColor: 'green',
  },

  yellowText: {
    backgroundColor: 'yellow',
  },

  whiteText: {
    color: 'white',
    fontWeight: "bold"
  },
});

const PrintClienConteneur = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [dataClient, setDataClient] = useState([]);
  let number = 1;
  const [total, setTotal] = useState(0);
  const [dataDetteID, setdataDetteID] = useState([]);
  let { id } = useParams();

  const sommeMontantPaye = dataClient.reduce(
    (acc, curr) => acc + curr.montantpayer,
    0
  );
  const sommeMontantPayeRecu = dataClient.reduce(
    (acc, curr) => acc + curr.montant,
    0
  );
  const sommereste = sommeMontantPayeRecu - sommeMontantPaye;

  useEffect(() => {
    getConteneuClient(id)
      .then((membre) => {
        setDataClient(membre);
        console.log(dataClient);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getDepenseConteneurTotal(id)
      .then((membre) => {
        setTotal(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getConteneurID(id)
      .then((membre) => {
        setdataDetteID(membre);
      })
      .catch((error) => {
        console.log(error);
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
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <View className="col-md-6">
                  <Image src="ab.jpg" style={{ width: 200, height: 100 }} />
                </View>
              </View>
            </View>

            <View style={styles.body}>
              <View className="text-center">
                <Text style={{ fontSize: 15, textDecoration: "underline" }}>
                   Détail du groupage {" "} { dataDetteID.nom_conteneur}
                </Text>
                <Text> </Text>
              </View>
              <View>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>N°</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Noms</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Facture ($)</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Montant reçu ($)
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Reste ($)</Text>
                    </View>
                  </View>
                  {dataClient.map((etatDatas) => (
                    <View style={styles.tableRow}>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>{number++}</Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.nom_client}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.montant}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.montantpayer}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.montant - etatDatas.montantpayer}
                        </Text>
                      </View>
                    </View>
                  ))}
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}></Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>TOTAL</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {sommeMontantPayeRecu}
                      </Text>
                    </View>
                    <View style={[styles.tableCol, styles.yellowText]}>
                      <Text style={styles.tableCell}>{sommeMontantPaye}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.redText]}>
                      <Text style={[styles.tableCell, styles.whiteText]}>{sommereste}</Text>
                    </View>
                  </View>

                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}></Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>Depenses</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}></Text>
                    </View>
                    <View style={[styles.tableCol, styles.greenText]}>
                      <Text style={styles.tableCell}>{total}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                      </Text>
                    </View>
                  </View>

                  <View style={styles.tableRow}>
                  <View style={[styles.tableCol, styles.blackText]}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={[styles.tableCol, styles.blackText]}>
                    <Text style={[styles.tableCell, styles.whiteText]}>Total</Text>
                  </View>
                  <View style={[styles.tableCol, styles.blackText]}>
                    <Text style={styles.tableCell}></Text>
                  </View>
                  <View style={[styles.tableCol, styles.blackText]}>
                    <Text style={[styles.tableCell, styles.whiteText]}>{sommeMontantPaye - total}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>
                    
                    </Text>
                  </View>
                </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PrintClienConteneur;
