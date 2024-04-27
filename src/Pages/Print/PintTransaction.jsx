import React, { useState, useEffect } from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";
import dateFormat from 'dateformat';
import { useParams } from "react-router-dom";
import { getEntreDetail } from "../../actions/EntreAction";

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
        textAlign: 'center',
    },
    body: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
        size: 50
    },
    table: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 15
    },
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderColor: "#bfbfbf", 
        borderWidth: 1, 
        borderRightWidth: 0, 
        borderBottomWidth: 0 
    },
    tableRow: { 
        flexDirection: "row" 
    },
    tableColHeader: { 
        width: "15%", 
        borderStyle: "solid", 
        borderColor: "#bfbfbf", 
        borderBottomColor: "#000", 
        borderWidth: 1, 
        backgroundColor: "#f0f0f0" 
    },
    tableCol: { 
        width: "15%", 
        borderStyle: "solid", 
        borderColor: "#bfbfbf", 
        borderBottomWidth: 1 
    },
    tableCellHeader: { 
        margin: 5, 
        fontSize: 12, 
        fontWeight: 500 
    },
    tableCell: { 
        margin: 5, 
        fontSize: 10 
    }
});

const fakeData = [
    {
        id: 1,
        marque: "Marque1",
        modele: "Modele1",
        immatriculation: "1234ABC",
        nom_carb: "Essence",
        qteplein: "50",
        kilometrage: "10000",
        nom: "Nom1",
        prenom: "Prenom1",
        noms: "Utilisateur1"
    },
    {
        id: 1,
        marque: "Marque1",
        modele: "Modele1",
        immatriculation: "1234ABC",
        nom_carb: "Essence",
        qteplein: "50",
        kilometrage: "10000",
        nom: "Nom1",
        prenom: "Prenom1",
        noms: "Utilisateur1"
    },
    // ... autres enregistrements
];

const PrintTrasanctionAll = () => {
    const [carss, setcarsss] = useState(fakeData);
    const datanow = new Date();
    const formattedDate = dateFormat(datanow, "dd/mm/yyyy");
    const [etatData, setetatData] = useState([]);
    const [isLoading, setloading] = useState(true);
    const [typeText, settypeText] = useState("");
    const [typeColor, settypeColor] = useState("");
    let { id } = useParams();

    useEffect(() => {
        getEntreDetail(id)
          .then((membre) => {
            setetatData(membre);
            let typeText = "";
        let typeColor = "";

        if (membre.etat === "1") {
          typeText = "Entre";
          typeColor = "red";
        } else if (membre.etat === "2") {
          typeText = "Sorti";
          typeColor = "green";
        } else if (membre.etat === "3") {
          typeText = "Transaction spacial";
          typeColor = "orange";
        } else {
          typeText = membre.etat;
          typeColor = "black";
        }

        settypeText(typeText);
        settypeColor(typeColor);
            setloading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <>
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <div className="row">
                                <div className="col-md-6">
                                    <Text>Image</Text>
                                </div>
                                <div className="col-md-6">
                                    <Text style={{fontSize : 15}}>ABG</Text>
                                    <Text style={{fontSize : 15}}>Kinshasa/Gombe</Text>
                                    <Text style={{fontSize : 15}}>Republique Dem du Congo</Text>
                                </div>
                            </div>
                        </View>
                        <View style={styles.Titre}>
                            <div className="text-center">
                                <Text></Text>
                            </div>
                        </View>
                        <View style={styles.body}>
                            <div className="text-center">
                                <Text style={{fontSize : 15}}>Transaction N° { etatData.matricule}</Text>
                                <Text> </Text>
                            </div>
                            <div>
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
                                            <Text style={styles.tableCellHeader}>Pays provenance</Text>
                                        </View>
                                        <View style={styles.tableColHeader}>
                                            <Text style={styles.tableCellHeader}>Pays destinaaire</Text>
                                        </View>
                                        <View style={styles.tableColHeader}>
                                            <Text style={styles.tableCellHeader}>Montant</Text>
                                        </View>
                                        <View style={styles.tableColHeader}>
                                            <Text style={styles.tableCellHeader}>Type transaction</Text>
                                        </View>
                                    </View>
                                   
                                        <View  style={styles.tableRow}>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatData.nom_emateur}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatData.nom_recepteur}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatData.telephone}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{`${ etatData.pays_provenance?.id_pays?.intitule || ""} - ${etatData.pays_provenance?.intitule || ""}`}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>
                                                {`${
                                                    etatData.pays_destinateut?.id_pays?.intitule || ""
                                                  } - ${etatData.pays_destinateut?.intitule || ""}`}
                                                </Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatData.montant}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{typeText}</Text>
                                            </View>
                                        </View>
                                </View>
                            </div>
                            
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </>
    )
}

export default PrintTrasanctionAll;
