import React from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, SafeAreaView, Image, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const size = Dimensions.get("window");
function HeaderNhanVien({navigation}) {
    return (
        <View style={styles.view_header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.view_image, { marginHorizontal: 5 }]}>
                <Image style={styles.image_goback} source={require('../../../../../Images/Icons/icons_goback.png')} resizeMode={"cover"} />
            </TouchableOpacity>
            <View style={styles.view_title}>
                <Text style={styles.title_nhanvien}>Quản lý nhân viên</Text>
            </View>
            <TouchableOpacity style={[styles.view_image, { alignItems: "flex-end", marginHorizontal: 10 }]}>
                <Image resizeMode={"cover"} style={styles.image_add} source={require('../../../../../Images/Icons/icons_add.png')} />
            </TouchableOpacity>
        </View>
    );
}
export default HeaderNhanVien;
const styles = StyleSheet.create({
    view_header: {
        height: size.height * 0.05,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#309045"
    },
    view_image: {
        height: "100%",
        width: 50,
        justifyContent: "center",
    },
    image_goback: {
        height: 27,
        width: 27,
        tintColor: "white",
    },
    view_title: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        
    },
    title_nhanvien:{
        fontWeight:"bold",
        fontSize:17,
        color:"white"
    },
    image_add: {
        height: 26,
        width: 26,
        tintColor: "white"
    }
});