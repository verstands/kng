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
  TransactionSpecialDubai,
  balanceDubai,
  depenseDubaiJourCountSortiTs,
  getCounrDepotDoubai,
  getCounrRetraitDoubai,
  getEntreJourneAll,
  getEntreJourneAlls,
  totalaJourCount,
} from "../../actions/EntreAction";

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
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "15%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
  },
  tableCol: {
    width: "15%",
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
});

const PrintTrasanctionAlls = () => {
  const [etatData, setEtatData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [typeText, setTypeText] = useState("");
  const [coutndepot, setcountdepot] = useState(0);
  const [coutntst, setcountts] = useState(0);
  const [coutnretrait, setcountretrait] = useState(0);
  const [total, settotal] = useState(0);
  const [balance, setbalance] = useState(0);
  const [transactiospecial, settransactiospecial] = useState(0);
  const [depense, setdepense] = useState(0);





  let { id } = useParams();

  const today = new Date();
  const dateNow = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  useEffect(() => {
    getEntreJourneAll(id)
      .then((membre) => {
        setEtatData(membre);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    TransactionSpecialDubai()
      .then((membre) => {
        settransactiospecial(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    balanceDubai()
      .then((membre) => {
        setbalance(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrRetraitDoubai()
      .then((membre) => {
        setcountretrait(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    depenseDubaiJourCountSortiTs()
      .then((membre) => {
        setcountts(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    totalaJourCount()
      .then((membre) => {
        settotal(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCounrDepotDoubai()
      .then((membre) => {
        setcountdepot(membre);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const datanow = new Date();
  const formattedDate = dateFormat(datanow, "dd/mm/yyyy");

  const getTypeText = (etat) => {
    let typeText = "";
    if (etat === "1") {
      typeText = "Entre";
    } else if (etat === "2") {
      typeText = "Sorti";
    } else if (etat === "3") {
      typeText = "Transaction spacial";
    } else {
      typeText = etat;
    }
    return typeText;
  };

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
                  Transactions du jour{" "}(Dubai)
                </Text>
                <Text> </Text>
              </View>
              <View>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Emeteur</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Recepteur</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Telephone</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Pays provenance
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Pays destinaaire
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Montant</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Type transaction
                      </Text>
                    </View>
                  </View>
                  {etatData.map((etatDatas) => (
                    <View style={styles.tableRow}>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.nom_emateur}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.nom_recepteur}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.telephone}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {`${
                            etatDatas.pays_provenance?.id_pays?.intitule || ""
                          } - ${etatDatas.pays_provenance?.intitule || ""}`}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {`${
                            etatDatas.pays_destinateut?.id_pays?.intitule || ""
                          } - ${etatDatas.pays_destinateut?.intitule || ""}`}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {etatDatas.montant}
                        </Text>
                      </View>
                      <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>
                          {getTypeText(etatDatas.etat)}
                        </Text>
                      </View>
                    </View>
                  ))}
                  <View style={styles.tableRow}>
                     <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text style={[styles.tableCell, { color: "white" }]}>TOTAL ENTRE</Text>
                    </View>
                    <View style={[styles.tableCol,  {backgroundColor : "black"}]}>
                      <Text style={[styles.tableCell, { color: "white" }]}>{coutndepot}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View  style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text style={[styles.tableCell, { color: "white" }]}>TOTAL SORTIE</Text>
                    </View>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text  style={[styles.tableCell, { color: "white" }]}>{coutnretrait}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View  style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text style={[styles.tableCell, { color: "white" }]}>TOTAL TS</Text>
                    </View>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text  style={[styles.tableCell, { color: "white" }]}>{transactiospecial}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text  style={[styles.tableCell, { color: "white" }]}>DEPENSE</Text>
                    </View>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text style={[styles.tableCell, { color: "white" }]}>{total}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text  style={[styles.tableCell, { color: "white" }]}>RESTE</Text>
                    </View>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text style={[styles.tableCell, { color: "white" }]}>{balance}</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text  style={[styles.tableCell, { color: "white" }]}>MONTANT PRECEDENT</Text>
                    </View>
                    <View style={[styles.tableCol, {backgroundColor : "black"}]}>
                      <Text style={[styles.tableCell, { color: "white" }]}>{(parseInt(transactiospecial) - parseInt(coutndepot) -parseInt(coutnretrait)) + parseInt(balance)}</Text>
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

export default PrintTrasanctionAlls;
