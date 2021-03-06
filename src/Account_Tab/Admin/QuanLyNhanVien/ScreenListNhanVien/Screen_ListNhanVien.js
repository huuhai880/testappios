import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, SafeAreaView, Image, TextInput, StatusBar, TouchableOpacity, Text, FlatList } from 'react-native';
import HeaderNhanVien from './components/Header_NhanVien';
import ViewCongViecHomNay from '../../QuanLyCongViec/CongViecHomNay';
const size = Dimensions.get("window");
const DATA_NHANVIEN = [
    { id_NV: 0, ten_NV: "Nguyễn Hữu Hai", ngaysinh_NV: "01/04/2000", soCMND_NV: "241856547", sdt_NV: "0346508759", diachi_NV: "Eakar,DakLak", email_NV: "huuhai880@gmail.com", ngayvaolam_NV: "01/04/1989", id_loaiNV: "0" },
    { id_NV: 1, ten_NV: "Nguyễn Hữu Hai", ngaysinh_NV: "01/04/2000", soCMND_NV: "241856547", sdt_NV: "0346508759", diachi_NV: "Eakar,DakLak", email_NV: "huuhai880@gmail.com", ngayvaolam_NV: "01/04/1989", id_loaiNV: "0" },
];

function ScreenListNhanVien(props) {
    const { navigation } = props;
    const [searchValue, setSearchValue] = useState('');
    const typingTimeOutRef = useRef(null);
    const SearchNhanVien = (value) => {
        setSearchValue(value);
        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current)
        };
        typingTimeOutRef.current = setTimeout(() => {
            console.log(value)
        }, 400);

    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#309045" />
            <HeaderNhanVien navigation={navigation} />
            <View style={styles.view_content}>
                <View style={styles.view_timkiem}>
                    <TextInput
                        value={searchValue}
                        style={{ flex: 1, fontSize: 13, margin: 5, fontWeight: "bold", height: 40 }} placeholder='Tìm kiếm...'
                        onChangeText={value => SearchNhanVien(value)}>
                    </TextInput>
                    <TouchableOpacity>
                        <View style={{ borderLeftWidth: 1, paddingHorizontal: 5 }}>
                            <Image style={styles.image_search} source={require("../../../../Images/Icons/icons_search.png")}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    {/* <FlatList
                        data={DATA_NHANVIEN}
                        renderItem={(item)=>{
                            <Text>
                                {item.ten_NV}
                            </Text>
                        }}
                        keyExtractor={item => item.id_NV}
                    /> */}
                    <ViewCongViecHomNay/>
                </View>
            </View>
        </SafeAreaView>
    );
}
export default ScreenListNhanVien;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    view_content: {
        flex: 1,
        flexDirection: 'column',
    },
    view_timkiem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#DCDCDC',
        height: 35,
        paddingHorizontal: 10,
        borderRadius: 22,
        margin:16,
    },
    image_search: {
        height: 20,
        width: 20,
        marginRight: 5,
        tintColor: "#309045"
    }
});