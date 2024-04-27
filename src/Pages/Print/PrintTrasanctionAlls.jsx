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
import { getEntreJourneAll, getEntreJourneAlls } from "../../actions/EntreAction";

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

const PrintTransaction = () => {
    const [etatData, setEtatData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [typeText, setTypeText] = useState("");
    let { id } = useParams();

    useEffect(() => {
        getEntreJourneAlls(id)
          .then((membre) => {
            setEtatData(membre);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
    }, [id]);

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
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <View className="row">
                                <View className="col-md-6">
                                    <Text>Image</Text>
                                </View>
                                <View className="col-md-6">
                                    <Text style={{fontSize : 15}}>ABG</Text>
                                    <Text style={{fontSize : 15}}>Kinshasa/Gombe</Text>
                                    <Text style={{fontSize : 15}}>Republique Dem du Congo</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.Titre}>
                            <View className="text-center">
                                <Text></Text>
                            </View>
                        </View>
                        <View style={styles.body}>
                            <View className="text-center">
                                <Text style={{fontSize : 15}}>Liste des transactions </Text>
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
                                    {etatData.map((etatDatas) => (
                                        <View style={styles.tableRow}>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatDatas.nom_emateur}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatDatas.nom_recepteur}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatDatas.telephone}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>
                                                    {`${ etatDatas.pays_provenance?.id_pays?.intitule || ""} - ${etatDatas.pays_provenance?.intitule || ""}`}
                                                </Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>
                                                    {`${etatDatas.pays_destinateut?.id_pays?.intitule || ""} - ${etatDatas.pays_destinateut?.intitule || ""}`}
                                                </Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{etatDatas.montant}</Text>
                                            </View>
                                            <View style={styles.tableCol}>
                                                <Text style={styles.tableCell}>{getTypeText(etatDatas.etat)}</Text>
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
}

export default PrintTransaction;
