import React, { useEffect, useState } from 'react';
import { ReactTableWithPaginationCard } from 'components/table/table';
import orderLocationColumns from 'containers/column-definition/logistics/order-location-def';
import CardWrapper from 'containers/wrapper/card-wrapper';
import apiClient from 'services/axios';

const OrderLocation = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [orderLocations, setOrderLocations] = useState({});

    const [districts, setDistricts] = useState([]);
    const [thanas, setThanas] = useState([]);
    const [postCodes, setPostCodes] = useState([]);
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        getOrderLocations();
    }, []);

    const getOrderLocations = async () => {
        setIsLoading(true);
        let params = {};
        let body = {};

        try {
            await apiClient('getBulkOrders', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setOrderLocations({
                        "delivery_types":[
                           {
                              "name":"Normal",
                              "value":"normal"
                           },
                           {
                              "name":"Express",
                              "value":"express"
                           }
                        ],
                        "parcel_types":[
                           {
                              "name":"Document",
                              "value":"document"
                           },
                           {
                              "name":"Parcel",
                              "value":"parcel"
                           }
                        ],
                        "payment_methods":[
                           {
                              "name":"Cash On Delivery",
                              "value":"COD"
                           },
                           {
                              "name":"Card Payment",
                              "value":"CARD"
                           },
                           {
                              "name":"Mobile Payment",
                              "value":"MFS"
                           },
                           {
                              "name":"Point of Sale(POS)",
                              "value":"POS"
                           }
                        ],
                        "district_list":[
                           {
                              "id":1,
                              "name":"Bagherhat",
                              "value":"Bagherhat"
                           },
                           {
                              "id":2,
                              "name":"Bandarban",
                              "value":"Bandarban"
                           },
                           {
                              "id":3,
                              "name":"Barisal",
                              "value":"Barisal"
                           },
                           {
                              "id":4,
                              "name":"Bhola",
                              "value":"Bhola"
                           },
                           {
                              "id":5,
                              "name":"Bogra",
                              "value":"Bogra"
                           },
                           {
                              "id":6,
                              "name":"Barguna",
                              "value":"Barguna"
                           },
                           {
                              "id":7,
                              "name":"Brahmanbaria",
                              "value":"Brahmanbaria"
                           },
                           {
                              "id":8,
                              "name":"Chandpur",
                              "value":"Chandpur"
                           },
                           {
                              "id":9,
                              "name":"Chapainababganj",
                              "value":"Chapainababganj"
                           },
                           {
                              "id":10,
                              "name":"Chittagong",
                              "value":"Chittagong"
                           },
                           {
                              "id":11,
                              "name":"Chittagong City",
                              "value":"Chittagong City"
                           },
                           {
                              "id":12,
                              "name":"Chuadanga",
                              "value":"Chuadanga"
                           },
                           {
                              "id":13,
                              "name":"Comilla",
                              "value":"Comilla"
                           },
                           {
                              "id":14,
                              "name":"Cox's Bazar",
                              "value":"Cox's Bazar"
                           },
                           {
                              "id":15,
                              "name":"Dhaka (Sub-Area)",
                              "value":"Dhaka (Sub-Area)"
                           },
                           {
                              "id":16,
                              "name":"Dinajpur",
                              "value":"Dinajpur"
                           },
                           {
                              "id":17,
                              "name":"Faridpur",
                              "value":"Faridpur"
                           },
                           {
                              "id":18,
                              "name":"Feni",
                              "value":"Feni"
                           },
                           {
                              "id":19,
                              "name":"Gaibandha",
                              "value":"Gaibandha"
                           },
                           {
                              "id":20,
                              "name":"Gazipur",
                              "value":"Gazipur"
                           },
                           {
                              "id":21,
                              "name":"Gopalganj",
                              "value":"Gopalganj"
                           },
                           {
                              "id":22,
                              "name":"Habiganj",
                              "value":"Habiganj"
                           },
                           {
                              "id":23,
                              "name":"Jamalpur",
                              "value":"Jamalpur"
                           },
                           {
                              "id":24,
                              "name":"Jessore",
                              "value":"Jessore"
                           },
                           {
                              "id":25,
                              "name":"Jhenaidah",
                              "value":"Jhenaidah"
                           },
                           {
                              "id":26,
                              "name":"Joypurhat",
                              "value":"Joypurhat"
                           },
                           {
                              "id":27,
                              "name":"Khagrachhari",
                              "value":"Khagrachhari"
                           },
                           {
                              "id":28,
                              "name":"Khulna",
                              "value":"Khulna"
                           },
                           {
                              "id":29,
                              "name":"Kishoreganj",
                              "value":"Kishoreganj"
                           },
                           {
                              "id":30,
                              "name":"Kurigram",
                              "value":"Kurigram"
                           },
                           {
                              "id":31,
                              "name":"Kustia",
                              "value":"Kustia"
                           },
                           {
                              "id":32,
                              "name":"Lakhshmipur",
                              "value":"Lakhshmipur"
                           },
                           {
                              "id":33,
                              "name":"Lalmonirhat",
                              "value":"Lalmonirhat"
                           },
                           {
                              "id":34,
                              "name":"Madaripur",
                              "value":"Madaripur"
                           },
                           {
                              "id":35,
                              "name":"Magura",
                              "value":"Magura"
                           },
                           {
                              "id":36,
                              "name":"Manikganj",
                              "value":"Manikganj"
                           },
                           {
                              "id":37,
                              "name":"Meherpur",
                              "value":"Meherpur"
                           },
                           {
                              "id":38,
                              "name":"Moulvibazar",
                              "value":"Moulvibazar"
                           },
                           {
                              "id":39,
                              "name":"Munshiganj",
                              "value":"Munshiganj"
                           },
                           {
                              "id":40,
                              "name":"Mymenshing",
                              "value":"Mymenshing"
                           },
                           {
                              "id":41,
                              "name":"Naogaon",
                              "value":"Naogaon"
                           },
                           {
                              "id":42,
                              "name":"Naraiil",
                              "value":"Naraiil"
                           },
                           {
                              "id":43,
                              "name":"Narayanganj",
                              "value":"Narayanganj"
                           },
                           {
                              "id":44,
                              "name":"Narsingdi",
                              "value":"Narsingdi"
                           },
                           {
                              "id":45,
                              "name":"Nator",
                              "value":"Nator"
                           },
                           {
                              "id":46,
                              "name":"Netrakona",
                              "value":"Netrakona"
                           },
                           {
                              "id":47,
                              "name":"Nilphamari",
                              "value":"Nilphamari"
                           },
                           {
                              "id":48,
                              "name":"Noakhali",
                              "value":"Noakhali"
                           },
                           {
                              "id":49,
                              "name":"Pabna",
                              "value":"Pabna"
                           },
                           {
                              "id":50,
                              "name":"Panchagarh",
                              "value":"Panchagarh"
                           },
                           {
                              "id":51,
                              "name":"Patuakhali",
                              "value":"Patuakhali"
                           },
                           {
                              "id":52,
                              "name":"Pirojpur",
                              "value":"Pirojpur"
                           },
                           {
                              "id":53,
                              "name":"Rajbari",
                              "value":"Rajbari"
                           },
                           {
                              "id":54,
                              "name":"Rajshahi",
                              "value":"Rajshahi"
                           },
                           {
                              "id":55,
                              "name":"Rangamati",
                              "value":"Rangamati"
                           },
                           {
                              "id":56,
                              "name":"Rangpur",
                              "value":"Rangpur"
                           },
                           {
                              "id":57,
                              "name":"Satkhira",
                              "value":"Satkhira"
                           },
                           {
                              "id":58,
                              "name":"Dhaka",
                              "value":"Dhaka"
                           },
                           {
                              "id":59,
                              "name":"Shariatpur",
                              "value":"Shariatpur"
                           },
                           {
                              "id":60,
                              "name":"Sherpur",
                              "value":"Sherpur"
                           },
                           {
                              "id":61,
                              "name":"Sirajganj",
                              "value":"Sirajganj"
                           },
                           {
                              "id":62,
                              "name":"Sunamganj",
                              "value":"Sunamganj"
                           },
                           {
                              "id":63,
                              "name":"Sylhet",
                              "value":"Sylhet"
                           },
                           {
                              "id":64,
                              "name":"Tangail",
                              "value":"Tangail"
                           },
                           {
                              "id":65,
                              "name":"Thakurgaon",
                              "value":"Thakurgaon"
                           }
                        ],
                        "thana_list":[
                           {
                              "id":1,
                              "district_id":1,
                              "name":"Rampal",
                              "value":"Rampal"
                           },
                           {
                              "id":2,
                              "district_id":1,
                              "name":"Morelganj",
                              "value":"Morelganj"
                           },
                           {
                              "id":3,
                              "district_id":1,
                              "name":"Chalna Ankorage",
                              "value":"Chalna Ankorage"
                           },
                           {
                              "id":4,
                              "district_id":1,
                              "name":"Mollarhat",
                              "value":"Mollarhat"
                           },
                           {
                              "id":5,
                              "district_id":1,
                              "name":"Kochua",
                              "value":"Kochua"
                           },
                           {
                              "id":6,
                              "district_id":1,
                              "name":"Fakirhat",
                              "value":"Fakirhat"
                           },
                           {
                              "id":7,
                              "district_id":1,
                              "name":"Chitalmari",
                              "value":"Chitalmari"
                           },
                           {
                              "id":8,
                              "district_id":1,
                              "name":"Bagerhat Sadar",
                              "value":"Bagerhat Sadar"
                           },
                           {
                              "id":9,
                              "district_id":2,
                              "name":"Bandarban City",
                              "value":"Bandarban City"
                           },
                           {
                              "id":10,
                              "district_id":3,
                              "name":"uzirpur",
                              "value":"uzirpur"
                           },
                           {
                              "id":11,
                              "district_id":3,
                              "name":"bakerganj",
                              "value":"bakerganj"
                           },
                           {
                              "id":12,
                              "district_id":3,
                              "name":"babuganj",
                              "value":"babuganj"
                           },
                           {
                              "id":13,
                              "district_id":3,
                              "name":"muladi",
                              "value":"muladi"
                           },
                           {
                              "id":14,
                              "district_id":3,
                              "name":"mehendiganj",
                              "value":"mehendiganj"
                           },
                           {
                              "id":15,
                              "district_id":3,
                              "name":"Barisal Sadar",
                              "value":"Barisal Sadar"
                           },
                           {
                              "id":16,
                              "district_id":3,
                              "name":"gouranadi",
                              "value":"gouranadi"
                           },
                           {
                              "id":17,
                              "district_id":3,
                              "name":"agailjhara",
                              "value":"agailjhara"
                           },
                           {
                              "id":18,
                              "district_id":3,
                              "name":"banaripara",
                              "value":"banaripara"
                           },
                           {
                              "id":19,
                              "district_id":4,
                              "name":"All",
                              "value":"All"
                           },
                           {
                              "id":20,
                              "district_id":5,
                              "name":"Shibgonj",
                              "value":"Shibgonj"
                           },
                           {
                              "id":21,
                              "district_id":5,
                              "name":"Sonatola",
                              "value":"Sonatola"
                           },
                           {
                              "id":22,
                              "district_id":5,
                              "name":"Gabtoli",
                              "value":"Gabtoli"
                           },
                           {
                              "id":23,
                              "district_id":5,
                              "name":"Adomdighi",
                              "value":"Adomdighi"
                           },
                           {
                              "id":24,
                              "district_id":5,
                              "name":"Dhunut",
                              "value":"Dhunut"
                           },
                           {
                              "id":25,
                              "district_id":5,
                              "name":"Nandigram",
                              "value":"Nandigram"
                           },
                           {
                              "id":26,
                              "district_id":5,
                              "name":"sherpur",
                              "value":"sherpur"
                           },
                           {
                              "id":27,
                              "district_id":5,
                              "name":"Bogura Sadar",
                              "value":"Bogura Sadar"
                           },
                           {
                              "id":28,
                              "district_id":6,
                              "name":"Patharghata",
                              "value":"Patharghata"
                           },
                           {
                              "id":29,
                              "district_id":6,
                              "name":"Betagi",
                              "value":"Betagi"
                           },
                           {
                              "id":30,
                              "district_id":6,
                              "name":"Bamna",
                              "value":"Bamna"
                           },
                           {
                              "id":31,
                              "district_id":6,
                              "name":"Amtali",
                              "value":"Amtali"
                           },
                           {
                              "id":32,
                              "district_id":6,
                              "name":"Barguna Sadar",
                              "value":"Barguna Sadar"
                           },
                           {
                              "id":33,
                              "district_id":7,
                              "name":"Brahmanbaria Sadar",
                              "value":"Brahmanbaria Sadar"
                           },
                           {
                              "id":34,
                              "district_id":7,
                              "name":"Nasirnagar",
                              "value":"Nasirnagar"
                           },
                           {
                              "id":35,
                              "district_id":7,
                              "name":"Ashuganj",
                              "value":"Ashuganj"
                           },
                           {
                              "id":36,
                              "district_id":7,
                              "name":"Banchharampur",
                              "value":"Banchharampur"
                           },
                           {
                              "id":37,
                              "district_id":7,
                              "name":"Sarail",
                              "value":"Sarail"
                           },
                           {
                              "id":38,
                              "district_id":7,
                              "name":"Kasba",
                              "value":"Kasba"
                           },
                           {
                              "id":39,
                              "district_id":8,
                              "name":"Kachua",
                              "value":"Kachua"
                           },
                           {
                              "id":40,
                              "district_id":8,
                              "name":"Matlab",
                              "value":"Matlab"
                           },
                           {
                              "id":41,
                              "district_id":8,
                              "name":"Hajiganj",
                              "value":"Hajiganj"
                           },
                           {
                              "id":42,
                              "district_id":8,
                              "name":"Haimchar",
                              "value":"Haimchar"
                           },
                           {
                              "id":43,
                              "district_id":8,
                              "name":"Faridganj",
                              "value":"Faridganj"
                           },
                           {
                              "id":44,
                              "district_id":8,
                              "name":"Shahrasti",
                              "value":"Shahrasti"
                           },
                           {
                              "id":45,
                              "district_id":8,
                              "name":"Chandpur Sadar",
                              "value":"Chandpur Sadar"
                           },
                           {
                              "id":46,
                              "district_id":9,
                              "name":"Chapainababganj Sadar",
                              "value":"Chapainababganj Sadar"
                           },
                           {
                              "id":47,
                              "district_id":10,
                              "name":"Sandwip",
                              "value":"Sandwip"
                           },
                           {
                              "id":48,
                              "district_id":10,
                              "name":"Fatikchhari",
                              "value":"Fatikchhari"
                           },
                           {
                              "id":49,
                              "district_id":10,
                              "name":"Lohagara",
                              "value":"Lohagara"
                           },
                           {
                              "id":50,
                              "district_id":10,
                              "name":"Rangunia",
                              "value":"Rangunia"
                           },
                           {
                              "id":51,
                              "district_id":10,
                              "name":"Bhujpur",
                              "value":"Bhujpur"
                           },
                           {
                              "id":52,
                              "district_id":10,
                              "name":"Patiya",
                              "value":"Patiya"
                           },
                           {
                              "id":53,
                              "district_id":10,
                              "name":"Chandanaish",
                              "value":"Chandanaish"
                           },
                           {
                              "id":54,
                              "district_id":10,
                              "name":"Boalkhali",
                              "value":"Boalkhali"
                           },
                           {
                              "id":55,
                              "district_id":10,
                              "name":"Karnaphuli",
                              "value":"Karnaphuli"
                           },
                           {
                              "id":56,
                              "district_id":10,
                              "name":"Banshkhali",
                              "value":"Banshkhali"
                           },
                           {
                              "id":57,
                              "district_id":10,
                              "name":"Anowara",
                              "value":"Anowara"
                           },
                           {
                              "id":58,
                              "district_id":10,
                              "name":"Satkania",
                              "value":"Satkania"
                           },
                           {
                              "id":59,
                              "district_id":10,
                              "name":"Raozan",
                              "value":"Raozan"
                           },
                           {
                              "id":60,
                              "district_id":10,
                              "name":"Chittagong University of Engineering & Technology (CUET)",
                              "value":"Chittagong University of Engineering & Technology (CUET)"
                           },
                           {
                              "id":61,
                              "district_id":10,
                              "name":"Potenga chittagong",
                              "value":"Potenga chittagong"
                           },
                           {
                              "id":62,
                              "district_id":10,
                              "name":"Cornel Hat (Chittagong)",
                              "value":"Cornel Hat (Chittagong)"
                           },
                           {
                              "id":63,
                              "district_id":10,
                              "name":"Sitakund",
                              "value":"Sitakund"
                           },
                           {
                              "id":64,
                              "district_id":10,
                              "name":"Satkania Upazila Sadar",
                              "value":"Satkania Upazila Sadar"
                           },
                           {
                              "id":65,
                              "district_id":10,
                              "name":"Raozan Upazila Sadar",
                              "value":"Raozan Upazila Sadar"
                           },
                           {
                              "id":66,
                              "district_id":10,
                              "name":"Rangunia Upazila Sadar",
                              "value":"Rangunia Upazila Sadar"
                           },
                           {
                              "id":67,
                              "district_id":10,
                              "name":"Patiya Upazila Sadar",
                              "value":"Patiya Upazila Sadar"
                           },
                           {
                              "id":68,
                              "district_id":10,
                              "name":"Mirsharai",
                              "value":"Mirsharai"
                           },
                           {
                              "id":69,
                              "district_id":10,
                              "name":"Lohagara Upazila Sadar",
                              "value":"Lohagara Upazila Sadar"
                           },
                           {
                              "id":70,
                              "district_id":10,
                              "name":"Hathazari Upazila Sadar",
                              "value":"Hathazari Upazila Sadar"
                           },
                           {
                              "id":71,
                              "district_id":10,
                              "name":"Fatikchhari Upazila Sadar",
                              "value":"Fatikchhari Upazila Sadar"
                           },
                           {
                              "id":72,
                              "district_id":10,
                              "name":"Chandanaish Upazila Sadar",
                              "value":"Chandanaish Upazila Sadar"
                           },
                           {
                              "id":73,
                              "district_id":10,
                              "name":"Boalkhali Upazila Sadar",
                              "value":"Boalkhali Upazila Sadar"
                           },
                           {
                              "id":74,
                              "district_id":10,
                              "name":"Banshkhali Upazila sadar",
                              "value":"Banshkhali Upazila sadar"
                           },
                           {
                              "id":75,
                              "district_id":10,
                              "name":"Anwara Upazila sadar",
                              "value":"Anwara Upazila sadar"
                           },
                           {
                              "id":76,
                              "district_id":10,
                              "name":"Chattogram Sadar",
                              "value":"Chattogram Sadar"
                           },
                           {
                              "id":77,
                              "district_id":11,
                              "name":"Kotwali",
                              "value":"Kotwali"
                           },
                           {
                              "id":78,
                              "district_id":11,
                              "name":"Chattogram Sadar",
                              "value":"Chattogram Sadar"
                           },
                           {
                              "id":79,
                              "district_id":11,
                              "name":"Pahartoli",
                              "value":"Pahartoli"
                           },
                           {
                              "id":80,
                              "district_id":11,
                              "name":"Patenga",
                              "value":"Patenga"
                           },
                           {
                              "id":81,
                              "district_id":12,
                              "name":"Chuadanga Sadar",
                              "value":"Chuadanga Sadar"
                           },
                           {
                              "id":82,
                              "district_id":13,
                              "name":"Brahman Para",
                              "value":"Brahman Para"
                           },
                           {
                              "id":83,
                              "district_id":13,
                              "name":"Manoharganj",
                              "value":"Manoharganj"
                           },
                           {
                              "id":84,
                              "district_id":13,
                              "name":"Muradnagar",
                              "value":"Muradnagar"
                           },
                           {
                              "id":85,
                              "district_id":13,
                              "name":"Davidhar",
                              "value":"Davidhar"
                           },
                           {
                              "id":86,
                              "district_id":13,
                              "name":"Nangalkot",
                              "value":"Nangalkot"
                           },
                           {
                              "id":87,
                              "district_id":13,
                              "name":"Laksam",
                              "value":"Laksam"
                           },
                           {
                              "id":88,
                              "district_id":13,
                              "name":"Chauddagram",
                              "value":"Chauddagram"
                           },
                           {
                              "id":89,
                              "district_id":13,
                              "name":"Comilla Sadar Dakshin",
                              "value":"Comilla Sadar Dakshin"
                           },
                           {
                              "id":90,
                              "district_id":13,
                              "name":"Comilla Adarsha Sadar",
                              "value":"Comilla Adarsha Sadar"
                           },
                           {
                              "id":91,
                              "district_id":13,
                              "name":"Chandina",
                              "value":"Chandina"
                           },
                           {
                              "id":92,
                              "district_id":13,
                              "name":"Gauripur Sadar",
                              "value":"Gauripur Sadar"
                           },
                           {
                              "id":93,
                              "district_id":13,
                              "name":"Daudkandi",
                              "value":"Daudkandi"
                           },
                           {
                              "id":94,
                              "district_id":13,
                              "name":"Titas",
                              "value":"Titas"
                           },
                           {
                              "id":95,
                              "district_id":13,
                              "name":"Meghna",
                              "value":"Meghna"
                           },
                           {
                              "id":96,
                              "district_id":13,
                              "name":"Homna",
                              "value":"Homna"
                           },
                           {
                              "id":97,
                              "district_id":13,
                              "name":"Comilla City",
                              "value":"Comilla City"
                           },
                           {
                              "id":98,
                              "district_id":14,
                              "name":"Cox's Bazar Sadar",
                              "value":"Cox's Bazar Sadar"
                           },
                           {
                              "id":99,
                              "district_id":15,
                              "name":"Ati Bazar",
                              "value":"Ati Bazar"
                           },
                           {
                              "id":100,
                              "district_id":15,
                              "name":"Keraniganj Upazila Sadar",
                              "value":"Keraniganj Upazila Sadar"
                           },
                           {
                              "id":101,
                              "district_id":15,
                              "name":"Sutrapur",
                              "value":"Sutrapur"
                           },
                           {
                              "id":102,
                              "district_id":15,
                              "name":"Demra",
                              "value":"Demra"
                           },
                           {
                              "id":103,
                              "district_id":16,
                              "name":"Chirirbandar",
                              "value":"Chirirbandar"
                           },
                           {
                              "id":104,
                              "district_id":16,
                              "name":"Ghoraghat",
                              "value":"Ghoraghat"
                           },
                           {
                              "id":105,
                              "district_id":16,
                              "name":"Kaharole",
                              "value":"Kaharole"
                           },
                           {
                              "id":106,
                              "district_id":16,
                              "name":"Birganj",
                              "value":"Birganj"
                           },
                           {
                              "id":107,
                              "district_id":16,
                              "name":"Biral",
                              "value":"Biral"
                           },
                           {
                              "id":108,
                              "district_id":16,
                              "name":"Hakimpur",
                              "value":"Hakimpur"
                           },
                           {
                              "id":109,
                              "district_id":16,
                              "name":"Khansama",
                              "value":"Khansama"
                           },
                           {
                              "id":110,
                              "district_id":16,
                              "name":"Parbatipur",
                              "value":"Parbatipur"
                           },
                           {
                              "id":111,
                              "district_id":16,
                              "name":"Birampur",
                              "value":"Birampur"
                           },
                           {
                              "id":112,
                              "district_id":16,
                              "name":"Bochaganj",
                              "value":"Bochaganj"
                           },
                           {
                              "id":113,
                              "district_id":16,
                              "name":"Dinajpur Sadar",
                              "value":"Dinajpur Sadar"
                           },
                           {
                              "id":114,
                              "district_id":17,
                              "name":"Alfadanga",
                              "value":"Alfadanga"
                           },
                           {
                              "id":115,
                              "district_id":17,
                              "name":"Faridpur Sadar",
                              "value":"Faridpur Sadar"
                           },
                           {
                              "id":116,
                              "district_id":18,
                              "name":"Sonagazi",
                              "value":"Sonagazi"
                           },
                           {
                              "id":117,
                              "district_id":18,
                              "name":"Fulgazi",
                              "value":"Fulgazi"
                           },
                           {
                              "id":118,
                              "district_id":18,
                              "name":"Porshuram",
                              "value":"Porshuram"
                           },
                           {
                              "id":119,
                              "district_id":18,
                              "name":"Chhagalnaiya",
                              "value":"Chhagalnaiya"
                           },
                           {
                              "id":120,
                              "district_id":18,
                              "name":"Daganbhuiyan",
                              "value":"Daganbhuiyan"
                           },
                           {
                              "id":121,
                              "district_id":18,
                              "name":"Feni Sadar",
                              "value":"Feni Sadar"
                           },
                           {
                              "id":122,
                              "district_id":19,
                              "name":"Sundarganj",
                              "value":"Sundarganj"
                           },
                           {
                              "id":123,
                              "district_id":19,
                              "name":"Saghatta",
                              "value":"Saghatta"
                           },
                           {
                              "id":124,
                              "district_id":19,
                              "name":"Phulchhari",
                              "value":"Phulchhari"
                           },
                           {
                              "id":125,
                              "district_id":19,
                              "name":"Palashbari",
                              "value":"Palashbari"
                           },
                           {
                              "id":126,
                              "district_id":19,
                              "name":"Sadullapur",
                              "value":"Sadullapur"
                           },
                           {
                              "id":127,
                              "district_id":19,
                              "name":"Gaibandha Sadar",
                              "value":"Gaibandha Sadar"
                           },
                           {
                              "id":128,
                              "district_id":20,
                              "name":"Rajendrapur",
                              "value":"Rajendrapur"
                           },
                           {
                              "id":129,
                              "district_id":20,
                              "name":"Sreepur",
                              "value":"Sreepur"
                           },
                           {
                              "id":130,
                              "district_id":20,
                              "name":"Pubail",
                              "value":"Pubail"
                           },
                           {
                              "id":131,
                              "district_id":20,
                              "name":"Kapasia",
                              "value":"Kapasia"
                           },
                           {
                              "id":132,
                              "district_id":20,
                              "name":"Gazipur sadar",
                              "value":"Gazipur sadar"
                           },
                           {
                              "id":133,
                              "district_id":20,
                              "name":"Monnunagar",
                              "value":"Monnunagar"
                           },
                           {
                              "id":134,
                              "district_id":20,
                              "name":"Turag",
                              "value":"Turag"
                           },
                           {
                              "id":135,
                              "district_id":21,
                              "name":"Muksudpur",
                              "value":"Muksudpur"
                           },
                           {
                              "id":136,
                              "district_id":21,
                              "name":"Kashiani",
                              "value":"Kashiani"
                           },
                           {
                              "id":137,
                              "district_id":21,
                              "name":"Tungipara",
                              "value":"Tungipara"
                           },
                           {
                              "id":138,
                              "district_id":21,
                              "name":"Gopalganj Sadar",
                              "value":"Gopalganj Sadar"
                           },
                           {
                              "id":139,
                              "district_id":22,
                              "name":"Habiganj Sadar",
                              "value":"Habiganj Sadar"
                           },
                           {
                              "id":140,
                              "district_id":23,
                              "name":"Jamalpur Sadar",
                              "value":"Jamalpur Sadar"
                           },
                           {
                              "id":141,
                              "district_id":23,
                              "name":"Bakshiganj",
                              "value":"Bakshiganj"
                           },
                           {
                              "id":142,
                              "district_id":23,
                              "name":"Melandaha",
                              "value":"Melandaha"
                           },
                           {
                              "id":143,
                              "district_id":23,
                              "name":"Madarganj",
                              "value":"Madarganj"
                           },
                           {
                              "id":144,
                              "district_id":23,
                              "name":"Islampur",
                              "value":"Islampur"
                           },
                           {
                              "id":145,
                              "district_id":23,
                              "name":"Dewanganj",
                              "value":"Dewanganj"
                           },
                           {
                              "id":146,
                              "district_id":24,
                              "name":"Noapara Sadar",
                              "value":"Noapara Sadar"
                           },
                           {
                              "id":147,
                              "district_id":24,
                              "name":"Sarsa",
                              "value":"Sarsa"
                           },
                           {
                              "id":148,
                              "district_id":24,
                              "name":"Sharsha Upazila Sadar",
                              "value":"Sharsha Upazila Sadar"
                           },
                           {
                              "id":149,
                              "district_id":24,
                              "name":"Jhikargacha Sadar",
                              "value":"Jhikargacha Sadar"
                           },
                           {
                              "id":150,
                              "district_id":24,
                              "name":"Chougachha upazila Sadar",
                              "value":"Chougachha upazila Sadar"
                           },
                           {
                              "id":151,
                              "district_id":24,
                              "name":"Bagherpara Upazila Sadar",
                              "value":"Bagherpara Upazila Sadar"
                           },
                           {
                              "id":152,
                              "district_id":24,
                              "name":"Keshabpur Upazilla",
                              "value":"Keshabpur Upazilla"
                           },
                           {
                              "id":153,
                              "district_id":24,
                              "name":"Abhaynagar Upazila Sadar",
                              "value":"Abhaynagar Upazila Sadar"
                           },
                           {
                              "id":154,
                              "district_id":24,
                              "name":"Manirampur Upazila Sadar",
                              "value":"Manirampur Upazila Sadar"
                           },
                           {
                              "id":155,
                              "district_id":24,
                              "name":"Jessore Sadar",
                              "value":"Jessore Sadar"
                           },
                           {
                              "id":156,
                              "district_id":25,
                              "name":"Jhenaidah Sadar",
                              "value":"Jhenaidah Sadar"
                           },
                           {
                              "id":157,
                              "district_id":26,
                              "name":"Khetlal",
                              "value":"Khetlal"
                           },
                           {
                              "id":158,
                              "district_id":26,
                              "name":"Akkelpur",
                              "value":"Akkelpur"
                           },
                           {
                              "id":159,
                              "district_id":26,
                              "name":"Panchbibi",
                              "value":"Panchbibi"
                           },
                           {
                              "id":160,
                              "district_id":26,
                              "name":"Kalai",
                              "value":"Kalai"
                           },
                           {
                              "id":161,
                              "district_id":26,
                              "name":"Joypurhat Sadar",
                              "value":"Joypurhat Sadar"
                           },
                           {
                              "id":162,
                              "district_id":27,
                              "name":"Guimara",
                              "value":"Guimara"
                           },
                           {
                              "id":163,
                              "district_id":27,
                              "name":"Ramgarh",
                              "value":"Ramgarh"
                           },
                           {
                              "id":164,
                              "district_id":27,
                              "name":"Panchhari",
                              "value":"Panchhari"
                           },
                           {
                              "id":165,
                              "district_id":27,
                              "name":"Manikchhari",
                              "value":"Manikchhari"
                           },
                           {
                              "id":166,
                              "district_id":27,
                              "name":"Mahalchhari",
                              "value":"Mahalchhari"
                           },
                           {
                              "id":167,
                              "district_id":27,
                              "name":"Lakshmichhari",
                              "value":"Lakshmichhari"
                           },
                           {
                              "id":168,
                              "district_id":27,
                              "name":"Matiranga",
                              "value":"Matiranga"
                           },
                           {
                              "id":169,
                              "district_id":27,
                              "name":"Dighinala",
                              "value":"Dighinala"
                           },
                           {
                              "id":170,
                              "district_id":27,
                              "name":"Khagrachori Sadar",
                              "value":"Khagrachori Sadar"
                           },
                           {
                              "id":171,
                              "district_id":28,
                              "name":"Dacope",
                              "value":"Dacope"
                           },
                           {
                              "id":172,
                              "district_id":28,
                              "name":"Koyra",
                              "value":"Koyra"
                           },
                           {
                              "id":173,
                              "district_id":28,
                              "name":"Phultala",
                              "value":"Phultala"
                           },
                           {
                              "id":174,
                              "district_id":28,
                              "name":"Dumuria",
                              "value":"Dumuria"
                           },
                           {
                              "id":175,
                              "district_id":28,
                              "name":"Dighalia",
                              "value":"Dighalia"
                           },
                           {
                              "id":176,
                              "district_id":28,
                              "name":"Batiaghata",
                              "value":"Batiaghata"
                           },
                           {
                              "id":177,
                              "district_id":28,
                              "name":"Paikgachha",
                              "value":"Paikgachha"
                           },
                           {
                              "id":178,
                              "district_id":28,
                              "name":"Terokhada",
                              "value":"Terokhada"
                           },
                           {
                              "id":179,
                              "district_id":28,
                              "name":"Sonadanga",
                              "value":"Sonadanga"
                           },
                           {
                              "id":180,
                              "district_id":28,
                              "name":"Khan Jahan Ali",
                              "value":"Khan Jahan Ali"
                           },
                           {
                              "id":181,
                              "district_id":28,
                              "name":"Alaipur",
                              "value":"Alaipur"
                           },
                           {
                              "id":182,
                              "district_id":28,
                              "name":"Khulna Sadar",
                              "value":"Khulna Sadar"
                           },
                           {
                              "id":183,
                              "district_id":29,
                              "name":"Itna",
                              "value":"Itna"
                           },
                           {
                              "id":184,
                              "district_id":29,
                              "name":"Hossainpur",
                              "value":"Hossainpur"
                           },
                           {
                              "id":185,
                              "district_id":29,
                              "name":"Bajitpur",
                              "value":"Bajitpur"
                           },
                           {
                              "id":186,
                              "district_id":29,
                              "name":"Austagram",
                              "value":"Austagram"
                           },
                           {
                              "id":187,
                              "district_id":29,
                              "name":"Karimganj",
                              "value":"Karimganj"
                           },
                           {
                              "id":188,
                              "district_id":29,
                              "name":"Nikli",
                              "value":"Nikli"
                           },
                           {
                              "id":189,
                              "district_id":29,
                              "name":"Katiadi",
                              "value":"Katiadi"
                           },
                           {
                              "id":190,
                              "district_id":29,
                              "name":"Kuliarchar",
                              "value":"Kuliarchar"
                           },
                           {
                              "id":191,
                              "district_id":29,
                              "name":"Pakundia",
                              "value":"Pakundia"
                           },
                           {
                              "id":192,
                              "district_id":29,
                              "name":"Tarail",
                              "value":"Tarail"
                           },
                           {
                              "id":193,
                              "district_id":29,
                              "name":"Mithamoin",
                              "value":"Mithamoin"
                           },
                           {
                              "id":194,
                              "district_id":29,
                              "name":"Kishorganj (Sub)",
                              "value":"Kishorganj (Sub)"
                           },
                           {
                              "id":195,
                              "district_id":29,
                              "name":"Bhairab Upazila Sadar",
                              "value":"Bhairab Upazila Sadar"
                           },
                           {
                              "id":196,
                              "district_id":29,
                              "name":"Kishoreganj Sadar",
                              "value":"Kishoreganj Sadar"
                           },
                           {
                              "id":197,
                              "district_id":30,
                              "name":"Raumari",
                              "value":"Raumari"
                           },
                           {
                              "id":198,
                              "district_id":30,
                              "name":"Ulipur",
                              "value":"Ulipur"
                           },
                           {
                              "id":199,
                              "district_id":30,
                              "name":"Phulbari",
                              "value":"Phulbari"
                           },
                           {
                              "id":200,
                              "district_id":30,
                              "name":"Nageshwari",
                              "value":"Nageshwari"
                           },
                           {
                              "id":201,
                              "district_id":30,
                              "name":"Rajarhat",
                              "value":"Rajarhat"
                           },
                           {
                              "id":202,
                              "district_id":30,
                              "name":"Chilmari",
                              "value":"Chilmari"
                           },
                           {
                              "id":203,
                              "district_id":30,
                              "name":"Bhurungamari",
                              "value":"Bhurungamari"
                           },
                           {
                              "id":204,
                              "district_id":30,
                              "name":"Char Rajibpur",
                              "value":"Char Rajibpur"
                           },
                           {
                              "id":205,
                              "district_id":30,
                              "name":"Kurigram Sadar",
                              "value":"Kurigram Sadar"
                           },
                           {
                              "id":206,
                              "district_id":31,
                              "name":"Bheramara",
                              "value":"Bheramara"
                           },
                           {
                              "id":207,
                              "district_id":31,
                              "name":"Janipur",
                              "value":"Janipur"
                           },
                           {
                              "id":208,
                              "district_id":31,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":209,
                              "district_id":31,
                              "name":"Kumarkhali",
                              "value":"Kumarkhali"
                           },
                           {
                              "id":210,
                              "district_id":31,
                              "name":"Kustia Sadar",
                              "value":"Kustia Sadar"
                           },
                           {
                              "id":211,
                              "district_id":32,
                              "name":"Char Alexgander",
                              "value":"Char Alexgander"
                           },
                           {
                              "id":212,
                              "district_id":32,
                              "name":"KamalNagar",
                              "value":"KamalNagar"
                           },
                           {
                              "id":213,
                              "district_id":32,
                              "name":"Ramgati upazila",
                              "value":"Ramgati upazila"
                           },
                           {
                              "id":214,
                              "district_id":32,
                              "name":"Raipur Upazila",
                              "value":"Raipur Upazila"
                           },
                           {
                              "id":215,
                              "district_id":32,
                              "name":"Ramgonj Upazila",
                              "value":"Ramgonj Upazila"
                           },
                           {
                              "id":216,
                              "district_id":32,
                              "name":"Lakhshmipur Sadar",
                              "value":"Lakhshmipur Sadar"
                           },
                           {
                              "id":217,
                              "district_id":33,
                              "name":"Patgram Upazila",
                              "value":"Patgram Upazila"
                           },
                           {
                              "id":218,
                              "district_id":33,
                              "name":"Kaliganj Upazila",
                              "value":"Kaliganj Upazila"
                           },
                           {
                              "id":219,
                              "district_id":33,
                              "name":"Hatibandha Upazila",
                              "value":"Hatibandha Upazila"
                           },
                           {
                              "id":220,
                              "district_id":33,
                              "name":"Aditmari Upazila",
                              "value":"Aditmari Upazila"
                           },
                           {
                              "id":221,
                              "district_id":33,
                              "name":"Lalmonirhat Sadar",
                              "value":"Lalmonirhat Sadar"
                           },
                           {
                              "id":222,
                              "district_id":34,
                              "name":"Bajitpur Union Digital Centre",
                              "value":"Bajitpur Union Digital Centre"
                           },
                           {
                              "id":223,
                              "district_id":34,
                              "name":"Madaripur Sadar",
                              "value":"Madaripur Sadar"
                           },
                           {
                              "id":224,
                              "district_id":35,
                              "name":"Sreepur",
                              "value":"Sreepur"
                           },
                           {
                              "id":225,
                              "district_id":35,
                              "name":"Mohammadpur",
                              "value":"Mohammadpur"
                           },
                           {
                              "id":226,
                              "district_id":35,
                              "name":"Magura Sador",
                              "value":"Magura Sador"
                           },
                           {
                              "id":227,
                              "district_id":36,
                              "name":"Saturia",
                              "value":"Saturia"
                           },
                           {
                              "id":228,
                              "district_id":36,
                              "name":"Shibalaya",
                              "value":"Shibalaya"
                           },
                           {
                              "id":229,
                              "district_id":36,
                              "name":"Ghior",
                              "value":"Ghior"
                           },
                           {
                              "id":230,
                              "district_id":36,
                              "name":"Daulatpur",
                              "value":"Daulatpur"
                           },
                           {
                              "id":231,
                              "district_id":36,
                              "name":"Singair",
                              "value":"Singair"
                           },
                           {
                              "id":232,
                              "district_id":36,
                              "name":"Manikganj Sadar",
                              "value":"Manikganj Sadar"
                           },
                           {
                              "id":233,
                              "district_id":37,
                              "name":"Meherpur Sadar",
                              "value":"Meherpur Sadar"
                           },
                           {
                              "id":234,
                              "district_id":37,
                              "name":"Gangni",
                              "value":"Gangni"
                           },
                           {
                              "id":235,
                              "district_id":38,
                              "name":"Kamalganj",
                              "value":"Kamalganj"
                           },
                           {
                              "id":236,
                              "district_id":38,
                              "name":"Baralekha",
                              "value":"Baralekha"
                           },
                           {
                              "id":237,
                              "district_id":38,
                              "name":"Rajnagar",
                              "value":"Rajnagar"
                           },
                           {
                              "id":238,
                              "district_id":38,
                              "name":"Barlekha",
                              "value":"Barlekha"
                           },
                           {
                              "id":239,
                              "district_id":38,
                              "name":"Kulaura",
                              "value":"Kulaura"
                           },
                           {
                              "id":240,
                              "district_id":38,
                              "name":"Sreemangal",
                              "value":"Sreemangal"
                           },
                           {
                              "id":241,
                              "district_id":38,
                              "name":"Moulvibazar Sadar",
                              "value":"Moulvibazar Sadar"
                           },
                           {
                              "id":242,
                              "district_id":39,
                              "name":"Gazaria",
                              "value":"Gazaria"
                           },
                           {
                              "id":243,
                              "district_id":39,
                              "name":"Tongibari",
                              "value":"Tongibari"
                           },
                           {
                              "id":244,
                              "district_id":39,
                              "name":"Sirajdikhan",
                              "value":"Sirajdikhan"
                           },
                           {
                              "id":245,
                              "district_id":39,
                              "name":"Sreenagar",
                              "value":"Sreenagar"
                           },
                           {
                              "id":246,
                              "district_id":39,
                              "name":"Lohajang",
                              "value":"Lohajang"
                           },
                           {
                              "id":247,
                              "district_id":39,
                              "name":"Serajdikhan",
                              "value":"Serajdikhan"
                           },
                           {
                              "id":248,
                              "district_id":39,
                              "name":"Munshiganj Sadar",
                              "value":"Munshiganj Sadar"
                           },
                           {
                              "id":249,
                              "district_id":40,
                              "name":"Mymenshing Sadar",
                              "value":"Mymenshing Sadar"
                           },
                           {
                              "id":250,
                              "district_id":41,
                              "name":"Prasadpur",
                              "value":"Prasadpur"
                           },
                           {
                              "id":251,
                              "district_id":41,
                              "name":"Nitpur",
                              "value":"Nitpur"
                           },
                           {
                              "id":252,
                              "district_id":41,
                              "name":"Niamatpur",
                              "value":"Niamatpur"
                           },
                           {
                              "id":253,
                              "district_id":41,
                              "name":"Dhamoirhat",
                              "value":"Dhamoirhat"
                           },
                           {
                              "id":254,
                              "district_id":41,
                              "name":"Raninagar",
                              "value":"Raninagar"
                           },
                           {
                              "id":255,
                              "district_id":41,
                              "name":"Badalgachhi",
                              "value":"Badalgachhi"
                           },
                           {
                              "id":256,
                              "district_id":41,
                              "name":"Sapahar",
                              "value":"Sapahar"
                           },
                           {
                              "id":257,
                              "district_id":41,
                              "name":"Patnitala",
                              "value":"Patnitala"
                           },
                           {
                              "id":258,
                              "district_id":41,
                              "name":"Mahadebpur",
                              "value":"Mahadebpur"
                           },
                           {
                              "id":259,
                              "district_id":41,
                              "name":"Naogaon Sadar",
                              "value":"Naogaon Sadar"
                           },
                           {
                              "id":260,
                              "district_id":42,
                              "name":"Kalia",
                              "value":"Kalia"
                           },
                           {
                              "id":261,
                              "district_id":42,
                              "name":"Laxmipasha",
                              "value":"Laxmipasha"
                           },
                           {
                              "id":262,
                              "district_id":42,
                              "name":"Narail Sadar",
                              "value":"Narail Sadar"
                           },
                           {
                              "id":263,
                              "district_id":43,
                              "name":"Modongonj",
                              "value":"Modongonj"
                           },
                           {
                              "id":264,
                              "district_id":43,
                              "name":"Siddirganj",
                              "value":"Siddirganj"
                           },
                           {
                              "id":265,
                              "district_id":43,
                              "name":"Baidderbazar",
                              "value":"Baidderbazar"
                           },
                           {
                              "id":266,
                              "district_id":43,
                              "name":"Siddhirgonj",
                              "value":"Siddhirgonj"
                           },
                           {
                              "id":267,
                              "district_id":43,
                              "name":"Fatullah",
                              "value":"Fatullah"
                           },
                           {
                              "id":268,
                              "district_id":43,
                              "name":"Narayanganj Sadar",
                              "value":"Narayanganj Sadar"
                           },
                           {
                              "id":269,
                              "district_id":43,
                              "name":"Sonargaon",
                              "value":"Sonargaon"
                           },
                           {
                              "id":270,
                              "district_id":43,
                              "name":"Bandar",
                              "value":"Bandar"
                           },
                           {
                              "id":271,
                              "district_id":43,
                              "name":"Rupganj",
                              "value":"Rupganj"
                           },
                           {
                              "id":272,
                              "district_id":43,
                              "name":"Araihazar",
                              "value":"Araihazar"
                           },
                           {
                              "id":273,
                              "district_id":43,
                              "name":"Gopaldi",
                              "value":"Gopaldi"
                           },
                           {
                              "id":274,
                              "district_id":44,
                              "name":"Manohardi",
                              "value":"Manohardi"
                           },
                           {
                              "id":275,
                              "district_id":44,
                              "name":"Roypura",
                              "value":"Roypura"
                           },
                           {
                              "id":276,
                              "district_id":44,
                              "name":"Belabo",
                              "value":"Belabo"
                           },
                           {
                              "id":277,
                              "district_id":44,
                              "name":"Shibpur",
                              "value":"Shibpur"
                           },
                           {
                              "id":278,
                              "district_id":44,
                              "name":"Madhbdi",
                              "value":"Madhbdi"
                           },
                           {
                              "id":279,
                              "district_id":44,
                              "name":"Palash",
                              "value":"Palash"
                           },
                           {
                              "id":280,
                              "district_id":44,
                              "name":"Narsingdi Sadar",
                              "value":"Narsingdi Sadar"
                           },
                           {
                              "id":281,
                              "district_id":45,
                              "name":"Gopalpur UPO",
                              "value":"Gopalpur UPO"
                           },
                           {
                              "id":282,
                              "district_id":45,
                              "name":"Singra",
                              "value":"Singra"
                           },
                           {
                              "id":283,
                              "district_id":45,
                              "name":"Harua",
                              "value":"Harua"
                           },
                           {
                              "id":284,
                              "district_id":45,
                              "name":"Natore Sador",
                              "value":"Natore Sador"
                           },
                           {
                              "id":285,
                              "district_id":45,
                              "name":"Gurudaspur",
                              "value":"Gurudaspur"
                           },
                           {
                              "id":286,
                              "district_id":46,
                              "name":"Khaliajuri",
                              "value":"Khaliajuri"
                           },
                           {
                              "id":287,
                              "district_id":46,
                              "name":"Purbadhala",
                              "value":"Purbadhala"
                           },
                           {
                              "id":288,
                              "district_id":46,
                              "name":"Madan",
                              "value":"Madan"
                           },
                           {
                              "id":289,
                              "district_id":46,
                              "name":"Barhatta",
                              "value":"Barhatta"
                           },
                           {
                              "id":290,
                              "district_id":46,
                              "name":"Atpara",
                              "value":"Atpara"
                           },
                           {
                              "id":291,
                              "district_id":46,
                              "name":"Kalmakanda",
                              "value":"Kalmakanda"
                           },
                           {
                              "id":292,
                              "district_id":46,
                              "name":"Susung Durgapur",
                              "value":"Susung Durgapur"
                           },
                           {
                              "id":293,
                              "district_id":46,
                              "name":"Kendua",
                              "value":"Kendua"
                           },
                           {
                              "id":294,
                              "district_id":46,
                              "name":"Mohanganj Thana",
                              "value":"Mohanganj Thana"
                           },
                           {
                              "id":295,
                              "district_id":46,
                              "name":"Netrakona Sadar",
                              "value":"Netrakona Sadar"
                           },
                           {
                              "id":296,
                              "district_id":47,
                              "name":"Kishoreganj",
                              "value":"Kishoreganj"
                           },
                           {
                              "id":297,
                              "district_id":47,
                              "name":"Jaldhaka",
                              "value":"Jaldhaka"
                           },
                           {
                              "id":298,
                              "district_id":47,
                              "name":"Domar",
                              "value":"Domar"
                           },
                           {
                              "id":299,
                              "district_id":47,
                              "name":"Dimla",
                              "value":"Dimla"
                           },
                           {
                              "id":300,
                              "district_id":47,
                              "name":"Saidpur",
                              "value":"Saidpur"
                           },
                           {
                              "id":301,
                              "district_id":47,
                              "name":"Nilphamari Sadar",
                              "value":"Nilphamari Sadar"
                           },
                           {
                              "id":302,
                              "district_id":48,
                              "name":"Noakhali Sadar",
                              "value":"Noakhali Sadar"
                           },
                           {
                              "id":303,
                              "district_id":48,
                              "name":"Begumganj",
                              "value":"Begumganj"
                           },
                           {
                              "id":304,
                              "district_id":48,
                              "name":"Chatkhil",
                              "value":"Chatkhil"
                           },
                           {
                              "id":305,
                              "district_id":48,
                              "name":"Senbag",
                              "value":"Senbag"
                           },
                           {
                              "id":306,
                              "district_id":48,
                              "name":"Basurhat",
                              "value":"Basurhat"
                           },
                           {
                              "id":307,
                              "district_id":49,
                              "name":"Chatmohar",
                              "value":"Chatmohar"
                           },
                           {
                              "id":308,
                              "district_id":49,
                              "name":"Bhangura",
                              "value":"Bhangura"
                           },
                           {
                              "id":309,
                              "district_id":49,
                              "name":"Atgharia",
                              "value":"Atgharia"
                           },
                           {
                              "id":310,
                              "district_id":49,
                              "name":"Santhia",
                              "value":"Santhia"
                           },
                           {
                              "id":311,
                              "district_id":49,
                              "name":"Sujanagar",
                              "value":"Sujanagar"
                           },
                           {
                              "id":312,
                              "district_id":49,
                              "name":"Bera",
                              "value":"Bera"
                           },
                           {
                              "id":313,
                              "district_id":49,
                              "name":"Pabna Sadar",
                              "value":"Pabna Sadar"
                           },
                           {
                              "id":314,
                              "district_id":50,
                              "name":"Tentulia",
                              "value":"Tentulia"
                           },
                           {
                              "id":315,
                              "district_id":50,
                              "name":"Debiganj",
                              "value":"Debiganj"
                           },
                           {
                              "id":316,
                              "district_id":50,
                              "name":"Boda",
                              "value":"Boda"
                           },
                           {
                              "id":317,
                              "district_id":50,
                              "name":"Panchagarh Sadar",
                              "value":"Panchagarh Sadar"
                           },
                           {
                              "id":318,
                              "district_id":51,
                              "name":"Galachipa",
                              "value":"Galachipa"
                           },
                           {
                              "id":319,
                              "district_id":51,
                              "name":"Bauphal",
                              "value":"Bauphal"
                           },
                           {
                              "id":320,
                              "district_id":51,
                              "name":"Patuakhali Sadar",
                              "value":"Patuakhali Sadar"
                           },
                           {
                              "id":321,
                              "district_id":51,
                              "name":"Dashmina",
                              "value":"Dashmina"
                           },
                           {
                              "id":322,
                              "district_id":52,
                              "name":"Pirojpur Sadar",
                              "value":"Pirojpur Sadar"
                           },
                           {
                              "id":323,
                              "district_id":53,
                              "name":"Rajbari Sadar",
                              "value":"Rajbari Sadar"
                           },
                           {
                              "id":324,
                              "district_id":54,
                              "name":"Baghmara",
                              "value":"Baghmara"
                           },
                           {
                              "id":325,
                              "district_id":54,
                              "name":"Tanore",
                              "value":"Tanore"
                           },
                           {
                              "id":326,
                              "district_id":54,
                              "name":"Rajshahi Sadar",
                              "value":"Rajshahi Sadar"
                           },
                           {
                              "id":327,
                              "district_id":54,
                              "name":"Durgapur",
                              "value":"Durgapur"
                           },
                           {
                              "id":328,
                              "district_id":54,
                              "name":"Charghat",
                              "value":"Charghat"
                           },
                           {
                              "id":329,
                              "district_id":54,
                              "name":"Khod Mohanpur",
                              "value":"Khod Mohanpur"
                           },
                           {
                              "id":330,
                              "district_id":54,
                              "name":"Puthia",
                              "value":"Puthia"
                           },
                           {
                              "id":331,
                              "district_id":54,
                              "name":"Lalitganj",
                              "value":"Lalitganj"
                           },
                           {
                              "id":332,
                              "district_id":54,
                              "name":"Godagari",
                              "value":"Godagari"
                           },
                           {
                              "id":333,
                              "district_id":54,
                              "name":"Bagha",
                              "value":"Bagha"
                           },
                           {
                              "id":334,
                              "district_id":54,
                              "name":"Bagmara",
                              "value":"Bagmara"
                           },
                           {
                              "id":335,
                              "district_id":54,
                              "name":"Tanor",
                              "value":"Tanor"
                           },
                           {
                              "id":336,
                              "district_id":55,
                              "name":"Rangamati Sadar",
                              "value":"Rangamati Sadar"
                           },
                           {
                              "id":337,
                              "district_id":56,
                              "name":"Kaunia",
                              "value":"Kaunia"
                           },
                           {
                              "id":338,
                              "district_id":56,
                              "name":"Pirgachha",
                              "value":"Pirgachha"
                           },
                           {
                              "id":339,
                              "district_id":56,
                              "name":"Gangachara",
                              "value":"Gangachara"
                           },
                           {
                              "id":340,
                              "district_id":56,
                              "name":"Badarganj",
                              "value":"Badarganj"
                           },
                           {
                              "id":341,
                              "district_id":56,
                              "name":"Taraganj",
                              "value":"Taraganj"
                           },
                           {
                              "id":342,
                              "district_id":56,
                              "name":"Pirganj",
                              "value":"Pirganj"
                           },
                           {
                              "id":343,
                              "district_id":56,
                              "name":"Mitha Pukur",
                              "value":"Mitha Pukur"
                           },
                           {
                              "id":344,
                              "district_id":56,
                              "name":"Rangpur Sadar",
                              "value":"Rangpur Sadar"
                           },
                           {
                              "id":345,
                              "district_id":57,
                              "name":"Assasuni",
                              "value":"Assasuni"
                           },
                           {
                              "id":346,
                              "district_id":57,
                              "name":"Satkhira Sadar",
                              "value":"Satkhira Sadar"
                           },
                           {
                              "id":347,
                              "district_id":58,
                              "name":"Ashulia",
                              "value":"Ashulia"
                           },
                           {
                              "id":348,
                              "district_id":58,
                              "name":"Savar Sadar",
                              "value":"Savar Sadar"
                           },
                           {
                              "id":349,
                              "district_id":58,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":350,
                              "district_id":58,
                              "name":"Vatara",
                              "value":"Vatara"
                           },
                           {
                              "id":351,
                              "district_id":58,
                              "name":"Malibagh",
                              "value":"Malibagh"
                           },
                           {
                              "id":352,
                              "district_id":58,
                              "name":"Sutrapur",
                              "value":"Sutrapur"
                           },
                           {
                              "id":353,
                              "district_id":58,
                              "name":"Kotwali",
                              "value":"Kotwali"
                           },
                           {
                              "id":354,
                              "district_id":58,
                              "name":"Lalbag",
                              "value":"Lalbag"
                           },
                           {
                              "id":355,
                              "district_id":58,
                              "name":"Bangshal",
                              "value":"Bangshal"
                           },
                           {
                              "id":356,
                              "district_id":58,
                              "name":"Chawkbazar",
                              "value":"Chawkbazar"
                           },
                           {
                              "id":357,
                              "district_id":58,
                              "name":"Ramna Thana",
                              "value":"Ramna Thana"
                           },
                           {
                              "id":358,
                              "district_id":58,
                              "name":"Paltan Model",
                              "value":"Paltan Model"
                           },
                           {
                              "id":359,
                              "district_id":58,
                              "name":"Motijheel",
                              "value":"Motijheel"
                           },
                           {
                              "id":360,
                              "district_id":58,
                              "name":"Shyampur",
                              "value":"Shyampur"
                           },
                           {
                              "id":361,
                              "district_id":58,
                              "name":"Wari",
                              "value":"Wari"
                           },
                           {
                              "id":362,
                              "district_id":58,
                              "name":"Kadomtoli",
                              "value":"Kadomtoli"
                           },
                           {
                              "id":363,
                              "district_id":58,
                              "name":"Mugda",
                              "value":"Mugda"
                           },
                           {
                              "id":364,
                              "district_id":58,
                              "name":"Jattrabari",
                              "value":"Jattrabari"
                           },
                           {
                              "id":365,
                              "district_id":58,
                              "name":"Sabujbag",
                              "value":"Sabujbag"
                           },
                           {
                              "id":366,
                              "district_id":58,
                              "name":"Banani",
                              "value":"Banani"
                           },
                           {
                              "id":367,
                              "district_id":58,
                              "name":"Gulshan",
                              "value":"Gulshan"
                           },
                           {
                              "id":368,
                              "district_id":58,
                              "name":"New Market",
                              "value":"New Market"
                           },
                           {
                              "id":369,
                              "district_id":58,
                              "name":"Dhanmondi",
                              "value":"Dhanmondi"
                           },
                           {
                              "id":370,
                              "district_id":58,
                              "name":"Mohammadpur",
                              "value":"Mohammadpur"
                           },
                           {
                              "id":371,
                              "district_id":58,
                              "name":"Turag",
                              "value":"Turag"
                           },
                           {
                              "id":372,
                              "district_id":58,
                              "name":"Uttar Khan",
                              "value":"Uttar Khan"
                           },
                           {
                              "id":373,
                              "district_id":58,
                              "name":"Uttara West",
                              "value":"Uttara West"
                           },
                           {
                              "id":374,
                              "district_id":58,
                              "name":"Uttara East",
                              "value":"Uttara East"
                           },
                           {
                              "id":375,
                              "district_id":58,
                              "name":"Dakshin Khan",
                              "value":"Dakshin Khan"
                           },
                           {
                              "id":376,
                              "district_id":58,
                              "name":"Airport",
                              "value":"Airport"
                           },
                           {
                              "id":377,
                              "district_id":58,
                              "name":"Khilkhet",
                              "value":"Khilkhet"
                           },
                           {
                              "id":378,
                              "district_id":58,
                              "name":"Darus-Salam",
                              "value":"Darus-Salam"
                           },
                           {
                              "id":379,
                              "district_id":58,
                              "name":"Mirpur Model",
                              "value":"Mirpur Model"
                           },
                           {
                              "id":380,
                              "district_id":58,
                              "name":"Sher E bangla Nagar",
                              "value":"Sher E bangla Nagar"
                           },
                           {
                              "id":381,
                              "district_id":58,
                              "name":"Rampura",
                              "value":"Rampura"
                           },
                           {
                              "id":382,
                              "district_id":58,
                              "name":"Hatirjheel",
                              "value":"Hatirjheel"
                           },
                           {
                              "id":383,
                              "district_id":58,
                              "name":"Khilgaon",
                              "value":"Khilgaon"
                           },
                           {
                              "id":384,
                              "district_id":58,
                              "name":"Shanatinagar",
                              "value":"Shanatinagar"
                           },
                           {
                              "id":385,
                              "district_id":58,
                              "name":"Shahjahanpur",
                              "value":"Shahjahanpur"
                           },
                           {
                              "id":386,
                              "district_id":58,
                              "name":"Badda",
                              "value":"Badda"
                           },
                           {
                              "id":387,
                              "district_id":58,
                              "name":"Gendaria",
                              "value":"Gendaria"
                           },
                           {
                              "id":388,
                              "district_id":58,
                              "name":"Kafrul",
                              "value":"Kafrul"
                           },
                           {
                              "id":389,
                              "district_id":58,
                              "name":"Rupnagar",
                              "value":"Rupnagar"
                           },
                           {
                              "id":390,
                              "district_id":58,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":391,
                              "district_id":58,
                              "name":"Bhashantek",
                              "value":"Bhashantek"
                           },
                           {
                              "id":392,
                              "district_id":58,
                              "name":"Cantonment",
                              "value":"Cantonment"
                           },
                           {
                              "id":393,
                              "district_id":58,
                              "name":"Shah Ali",
                              "value":"Shah Ali"
                           },
                           {
                              "id":394,
                              "district_id":58,
                              "name":"Paltan",
                              "value":"Paltan"
                           },
                           {
                              "id":395,
                              "district_id":58,
                              "name":"Kamrangirchor",
                              "value":"Kamrangirchor"
                           },
                           {
                              "id":396,
                              "district_id":58,
                              "name":"Adabar",
                              "value":"Adabar"
                           },
                           {
                              "id":397,
                              "district_id":58,
                              "name":"Hazaribag",
                              "value":"Hazaribag"
                           },
                           {
                              "id":398,
                              "district_id":58,
                              "name":"Kalabagan",
                              "value":"Kalabagan"
                           },
                           {
                              "id":399,
                              "district_id":58,
                              "name":"Shahbag",
                              "value":"Shahbag"
                           },
                           {
                              "id":400,
                              "district_id":58,
                              "name":"Newmarket",
                              "value":"Newmarket"
                           },
                           {
                              "id":401,
                              "district_id":58,
                              "name":"Tejgaon Industrial",
                              "value":"Tejgaon Industrial"
                           },
                           {
                              "id":402,
                              "district_id":59,
                              "name":"Jajira",
                              "value":"Jajira"
                           },
                           {
                              "id":403,
                              "district_id":59,
                              "name":"Naria",
                              "value":"Naria"
                           },
                           {
                              "id":404,
                              "district_id":59,
                              "name":"Goshairhat",
                              "value":"Goshairhat"
                           },
                           {
                              "id":405,
                              "district_id":59,
                              "name":"Damuddya",
                              "value":"Damuddya"
                           },
                           {
                              "id":406,
                              "district_id":59,
                              "name":"Bhedarganj",
                              "value":"Bhedarganj"
                           },
                           {
                              "id":407,
                              "district_id":59,
                              "name":"Shariatpur Sadar",
                              "value":"Shariatpur Sadar"
                           },
                           {
                              "id":408,
                              "district_id":60,
                              "name":"Nailtabari",
                              "value":"Nailtabari"
                           },
                           {
                              "id":409,
                              "district_id":60,
                              "name":"Shribardi",
                              "value":"Shribardi"
                           },
                           {
                              "id":410,
                              "district_id":60,
                              "name":"Jhinaigati",
                              "value":"Jhinaigati"
                           },
                           {
                              "id":411,
                              "district_id":60,
                              "name":"Nakla",
                              "value":"Nakla"
                           },
                           {
                              "id":412,
                              "district_id":60,
                              "name":"Sherpur Sadar",
                              "value":"Sherpur Sadar"
                           },
                           {
                              "id":413,
                              "district_id":61,
                              "name":"Sirajganj Sadar",
                              "value":"Sirajganj Sadar"
                           },
                           {
                              "id":414,
                              "district_id":62,
                              "name":"Tahirpur",
                              "value":"Tahirpur"
                           },
                           {
                              "id":415,
                              "district_id":62,
                              "name":"Sulla",
                              "value":"Sulla"
                           },
                           {
                              "id":416,
                              "district_id":62,
                              "name":"Jagnnathpur",
                              "value":"Jagnnathpur"
                           },
                           {
                              "id":417,
                              "district_id":62,
                              "name":"Sunamganj Sadar",
                              "value":"Sunamganj Sadar"
                           },
                           {
                              "id":418,
                              "district_id":62,
                              "name":"Bishwambarpur",
                              "value":"Bishwambarpur"
                           },
                           {
                              "id":419,
                              "district_id":62,
                              "name":"Chhatak",
                              "value":"Chhatak"
                           },
                           {
                              "id":420,
                              "district_id":62,
                              "name":"Jagannathpur",
                              "value":"Jagannathpur"
                           },
                           {
                              "id":421,
                              "district_id":62,
                              "name":"Hasan Fatemapur",
                              "value":"Hasan Fatemapur"
                           },
                           {
                              "id":422,
                              "district_id":62,
                              "name":"Dhirai Chandpur",
                              "value":"Dhirai Chandpur"
                           },
                           {
                              "id":423,
                              "district_id":62,
                              "name":"Chatak",
                              "value":"Chatak"
                           },
                           {
                              "id":424,
                              "district_id":62,
                              "name":"Biswamvarpur",
                              "value":"Biswamvarpur"
                           },
                           {
                              "id":425,
                              "district_id":63,
                              "name":"Sylhet Sadar",
                              "value":"Sylhet Sadar"
                           },
                           {
                              "id":426,
                              "district_id":63,
                              "name":"Fenchuganj",
                              "value":"Fenchuganj"
                           },
                           {
                              "id":427,
                              "district_id":63,
                              "name":"Balaganj",
                              "value":"Balaganj"
                           },
                           {
                              "id":428,
                              "district_id":63,
                              "name":"Jaintiapur",
                              "value":"Jaintiapur"
                           },
                           {
                              "id":429,
                              "district_id":63,
                              "name":"Bishwanath",
                              "value":"Bishwanath"
                           },
                           {
                              "id":430,
                              "district_id":63,
                              "name":"Golabganj",
                              "value":"Golabganj"
                           },
                           {
                              "id":431,
                              "district_id":63,
                              "name":"Beani Bazar",
                              "value":"Beani Bazar"
                           },
                           {
                              "id":432,
                              "district_id":64,
                              "name":"Sakhipur",
                              "value":"Sakhipur"
                           },
                           {
                              "id":433,
                              "district_id":64,
                              "name":"Madhupur",
                              "value":"Madhupur"
                           },
                           {
                              "id":434,
                              "district_id":64,
                              "name":"Delduar",
                              "value":"Delduar"
                           },
                           {
                              "id":435,
                              "district_id":64,
                              "name":"Dhanbari",
                              "value":"Dhanbari"
                           },
                           {
                              "id":436,
                              "district_id":64,
                              "name":"Basail",
                              "value":"Basail"
                           },
                           {
                              "id":437,
                              "district_id":64,
                              "name":"Bhuapur",
                              "value":"Bhuapur"
                           },
                           {
                              "id":438,
                              "district_id":64,
                              "name":"Nagarpur",
                              "value":"Nagarpur"
                           },
                           {
                              "id":439,
                              "district_id":64,
                              "name":"Gopalpur",
                              "value":"Gopalpur"
                           },
                           {
                              "id":440,
                              "district_id":64,
                              "name":"Kalihati",
                              "value":"Kalihati"
                           },
                           {
                              "id":441,
                              "district_id":64,
                              "name":"Mirzapur",
                              "value":"Mirzapur"
                           },
                           {
                              "id":442,
                              "district_id":64,
                              "name":"Ghatail",
                              "value":"Ghatail"
                           },
                           {
                              "id":443,
                              "district_id":64,
                              "name":"Tangail Sadar",
                              "value":"Tangail Sadar"
                           },
                           {
                              "id":444,
                              "district_id":65,
                              "name":"Thakurgaon Sadar",
                              "value":"Thakurgaon Sadar"
                           }
                        ],
                        "postcode_list":[
                           {
                              "id":1,
                              "district_id":1,
                              "thana_id":1,
                              "name":"9340",
                              "value":"9340"
                           },
                           {
                              "id":2,
                              "district_id":1,
                              "thana_id":2,
                              "name":"9320",
                              "value":"9320"
                           },
                           {
                              "id":3,
                              "district_id":1,
                              "thana_id":3,
                              "name":"9351",
                              "value":"9351"
                           },
                           {
                              "id":4,
                              "district_id":1,
                              "thana_id":4,
                              "name":"9380",
                              "value":"9380"
                           },
                           {
                              "id":5,
                              "district_id":1,
                              "thana_id":5,
                              "name":"9310",
                              "value":"9310"
                           },
                           {
                              "id":6,
                              "district_id":1,
                              "thana_id":6,
                              "name":"9370",
                              "value":"9370"
                           },
                           {
                              "id":7,
                              "district_id":1,
                              "thana_id":7,
                              "name":"9360",
                              "value":"9360"
                           },
                           {
                              "id":8,
                              "district_id":1,
                              "thana_id":8,
                              "name":"9300",
                              "value":"9300"
                           },
                           {
                              "id":9,
                              "district_id":2,
                              "thana_id":9,
                              "name":"4600",
                              "value":"4600"
                           },
                           {
                              "id":10,
                              "district_id":3,
                              "thana_id":10,
                              "name":"8220",
                              "value":"8220"
                           },
                           {
                              "id":11,
                              "district_id":3,
                              "thana_id":11,
                              "name":"8282",
                              "value":"8282"
                           },
                           {
                              "id":12,
                              "district_id":3,
                              "thana_id":12,
                              "name":"8210",
                              "value":"8210"
                           },
                           {
                              "id":13,
                              "district_id":3,
                              "thana_id":13,
                              "name":"8250",
                              "value":"8250"
                           },
                           {
                              "id":14,
                              "district_id":3,
                              "thana_id":14,
                              "name":"8270",
                              "value":"8270"
                           },
                           {
                              "id":15,
                              "district_id":3,
                              "thana_id":15,
                              "name":"8200",
                              "value":"8200"
                           },
                           {
                              "id":16,
                              "district_id":3,
                              "thana_id":16,
                              "name":"8230",
                              "value":"8230"
                           },
                           {
                              "id":17,
                              "district_id":3,
                              "thana_id":17,
                              "name":"8240",
                              "value":"8240"
                           },
                           {
                              "id":18,
                              "district_id":3,
                              "thana_id":18,
                              "name":"8530",
                              "value":"8530"
                           },
                           {
                              "id":19,
                              "district_id":4,
                              "thana_id":19,
                              "name":"8300",
                              "value":"8300"
                           },
                           {
                              "id":20,
                              "district_id":5,
                              "thana_id":20,
                              "name":"5810",
                              "value":"5810"
                           },
                           {
                              "id":21,
                              "district_id":5,
                              "thana_id":21,
                              "name":"5826",
                              "value":"5826"
                           },
                           {
                              "id":22,
                              "district_id":5,
                              "thana_id":22,
                              "name":"5820",
                              "value":"5820"
                           },
                           {
                              "id":23,
                              "district_id":5,
                              "thana_id":23,
                              "name":"5880",
                              "value":"5880"
                           },
                           {
                              "id":24,
                              "district_id":5,
                              "thana_id":24,
                              "name":"5890",
                              "value":"5890"
                           },
                           {
                              "id":25,
                              "district_id":5,
                              "thana_id":25,
                              "name":"5850",
                              "value":"5850"
                           },
                           {
                              "id":26,
                              "district_id":5,
                              "thana_id":26,
                              "name":"5870",
                              "value":"5870"
                           },
                           {
                              "id":27,
                              "district_id":5,
                              "thana_id":26,
                              "name":"5840",
                              "value":"5840"
                           },
                           {
                              "id":28,
                              "district_id":5,
                              "thana_id":27,
                              "name":"5860",
                              "value":"5860"
                           },
                           {
                              "id":29,
                              "district_id":5,
                              "thana_id":27,
                              "name":"5800",
                              "value":"5800"
                           },
                           {
                              "id":30,
                              "district_id":6,
                              "thana_id":28,
                              "name":"8721",
                              "value":"8721"
                           },
                           {
                              "id":31,
                              "district_id":6,
                              "thana_id":29,
                              "name":"8740",
                              "value":"8740"
                           },
                           {
                              "id":32,
                              "district_id":6,
                              "thana_id":30,
                              "name":"8730",
                              "value":"8730"
                           },
                           {
                              "id":33,
                              "district_id":6,
                              "thana_id":31,
                              "name":"8710",
                              "value":"8710"
                           },
                           {
                              "id":34,
                              "district_id":6,
                              "thana_id":32,
                              "name":"8700",
                              "value":"8700"
                           },
                           {
                              "id":35,
                              "district_id":7,
                              "thana_id":33,
                              "name":"3400",
                              "value":"3400"
                           },
                           {
                              "id":36,
                              "district_id":7,
                              "thana_id":34,
                              "name":"3440",
                              "value":"3440"
                           },
                           {
                              "id":37,
                              "district_id":7,
                              "thana_id":35,
                              "name":"3402",
                              "value":"3402"
                           },
                           {
                              "id":38,
                              "district_id":7,
                              "thana_id":36,
                              "name":"3420",
                              "value":"3420"
                           },
                           {
                              "id":39,
                              "district_id":7,
                              "thana_id":37,
                              "name":"3430",
                              "value":"3430"
                           },
                           {
                              "id":40,
                              "district_id":7,
                              "thana_id":38,
                              "name":"3460",
                              "value":"3460"
                           },
                           {
                              "id":41,
                              "district_id":8,
                              "thana_id":39,
                              "name":"3630",
                              "value":"3630"
                           },
                           {
                              "id":42,
                              "district_id":8,
                              "thana_id":40,
                              "name":"3640",
                              "value":"3640"
                           },
                           {
                              "id":43,
                              "district_id":8,
                              "thana_id":41,
                              "name":"3610",
                              "value":"3610"
                           },
                           {
                              "id":44,
                              "district_id":8,
                              "thana_id":42,
                              "name":"3661",
                              "value":"3661"
                           },
                           {
                              "id":45,
                              "district_id":8,
                              "thana_id":43,
                              "name":"3650",
                              "value":"3650"
                           },
                           {
                              "id":46,
                              "district_id":8,
                              "thana_id":44,
                              "name":"3623",
                              "value":"3623"
                           },
                           {
                              "id":47,
                              "district_id":8,
                              "thana_id":45,
                              "name":"3600",
                              "value":"3600"
                           },
                           {
                              "id":48,
                              "district_id":9,
                              "thana_id":46,
                              "name":"8888",
                              "value":"8888"
                           },
                           {
                              "id":49,
                              "district_id":10,
                              "thana_id":47,
                              "name":"4300",
                              "value":"4300"
                           },
                           {
                              "id":50,
                              "district_id":10,
                              "thana_id":48,
                              "name":"4350",
                              "value":"4350"
                           },
                           {
                              "id":51,
                              "district_id":10,
                              "thana_id":49,
                              "name":"4396",
                              "value":"4396"
                           },
                           {
                              "id":52,
                              "district_id":10,
                              "thana_id":50,
                              "name":"4360",
                              "value":"4360"
                           },
                           {
                              "id":53,
                              "district_id":10,
                              "thana_id":51,
                              "name":"4355",
                              "value":"4355"
                           },
                           {
                              "id":54,
                              "district_id":10,
                              "thana_id":52,
                              "name":"4370",
                              "value":"4370"
                           },
                           {
                              "id":55,
                              "district_id":10,
                              "thana_id":53,
                              "name":"4351",
                              "value":"4351"
                           },
                           {
                              "id":56,
                              "district_id":10,
                              "thana_id":54,
                              "name":"4366",
                              "value":"4366"
                           },
                           {
                              "id":57,
                              "district_id":10,
                              "thana_id":55,
                              "name":"4369",
                              "value":"4369"
                           },
                           {
                              "id":58,
                              "district_id":10,
                              "thana_id":56,
                              "name":"4367",
                              "value":"4367"
                           },
                           {
                              "id":59,
                              "district_id":10,
                              "thana_id":57,
                              "name":"4376",
                              "value":"4376"
                           },
                           {
                              "id":60,
                              "district_id":10,
                              "thana_id":58,
                              "name":"4386",
                              "value":"4386"
                           },
                           {
                              "id":61,
                              "district_id":10,
                              "thana_id":59,
                              "name":"4340",
                              "value":"4340"
                           },
                           {
                              "id":62,
                              "district_id":10,
                              "thana_id":60,
                              "name":"4331",
                              "value":"4331"
                           },
                           {
                              "id":63,
                              "district_id":10,
                              "thana_id":61,
                              "name":"4204",
                              "value":"4204"
                           },
                           {
                              "id":64,
                              "district_id":10,
                              "thana_id":62,
                              "name":"4220",
                              "value":"4220"
                           },
                           {
                              "id":65,
                              "district_id":10,
                              "thana_id":63,
                              "name":"4310",
                              "value":"4310"
                           },
                           {
                              "id":66,
                              "district_id":10,
                              "thana_id":64,
                              "name":"4388",
                              "value":"4388"
                           },
                           {
                              "id":67,
                              "district_id":10,
                              "thana_id":65,
                              "name":"4346",
                              "value":"4346"
                           },
                           {
                              "id":68,
                              "district_id":10,
                              "thana_id":66,
                              "name":"4361",
                              "value":"4361"
                           },
                           {
                              "id":69,
                              "district_id":10,
                              "thana_id":67,
                              "name":"4371",
                              "value":"4371"
                           },
                           {
                              "id":70,
                              "district_id":10,
                              "thana_id":68,
                              "name":"4320",
                              "value":"4320"
                           },
                           {
                              "id":71,
                              "district_id":10,
                              "thana_id":69,
                              "name":"4398",
                              "value":"4398"
                           },
                           {
                              "id":72,
                              "district_id":10,
                              "thana_id":70,
                              "name":"4331",
                              "value":"4331"
                           },
                           {
                              "id":73,
                              "district_id":10,
                              "thana_id":71,
                              "name":"4352",
                              "value":"4352"
                           },
                           {
                              "id":74,
                              "district_id":10,
                              "thana_id":72,
                              "name":"4314",
                              "value":"4314"
                           },
                           {
                              "id":75,
                              "district_id":10,
                              "thana_id":73,
                              "name":"4369",
                              "value":"4369"
                           },
                           {
                              "id":76,
                              "district_id":10,
                              "thana_id":74,
                              "name":"4368",
                              "value":"4368"
                           },
                           {
                              "id":77,
                              "district_id":10,
                              "thana_id":75,
                              "name":"4378",
                              "value":"4378"
                           },
                           {
                              "id":78,
                              "district_id":10,
                              "thana_id":76,
                              "name":"4216",
                              "value":"4216"
                           },
                           {
                              "id":79,
                              "district_id":10,
                              "thana_id":76,
                              "name":"4208",
                              "value":"4208"
                           },
                           {
                              "id":80,
                              "district_id":10,
                              "thana_id":76,
                              "name":"4213",
                              "value":"4213"
                           },
                           {
                              "id":81,
                              "district_id":11,
                              "thana_id":77,
                              "name":"4000",
                              "value":"4000"
                           },
                           {
                              "id":82,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4210",
                              "value":"4210"
                           },
                           {
                              "id":83,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4220",
                              "value":"4220"
                           },
                           {
                              "id":84,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4225",
                              "value":"4225"
                           },
                           {
                              "id":85,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4202",
                              "value":"4202"
                           },
                           {
                              "id":86,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4212",
                              "value":"4212"
                           },
                           {
                              "id":87,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4219",
                              "value":"4219"
                           },
                           {
                              "id":88,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4100",
                              "value":"4100"
                           },
                           {
                              "id":89,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4223",
                              "value":"4223"
                           },
                           {
                              "id":90,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4203",
                              "value":"4203"
                           },
                           {
                              "id":91,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4211",
                              "value":"4211"
                           },
                           {
                              "id":92,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4214",
                              "value":"4214"
                           },
                           {
                              "id":93,
                              "district_id":11,
                              "thana_id":78,
                              "name":"4207",
                              "value":"4207"
                           },
                           {
                              "id":94,
                              "district_id":11,
                              "thana_id":79,
                              "name":"4202",
                              "value":"4202"
                           },
                           {
                              "id":95,
                              "district_id":11,
                              "thana_id":80,
                              "name":"4204",
                              "value":"4204"
                           },
                           {
                              "id":96,
                              "district_id":12,
                              "thana_id":81,
                              "name":"7200",
                              "value":"7200"
                           },
                           {
                              "id":97,
                              "district_id":13,
                              "thana_id":82,
                              "name":"3526",
                              "value":"3526"
                           },
                           {
                              "id":98,
                              "district_id":13,
                              "thana_id":83,
                              "name":"3532",
                              "value":"3532"
                           },
                           {
                              "id":99,
                              "district_id":13,
                              "thana_id":84,
                              "name":"3540",
                              "value":"3540"
                           },
                           {
                              "id":100,
                              "district_id":13,
                              "thana_id":85,
                              "name":"3530",
                              "value":"3530"
                           },
                           {
                              "id":101,
                              "district_id":13,
                              "thana_id":86,
                              "name":"3533",
                              "value":"3533"
                           },
                           {
                              "id":102,
                              "district_id":13,
                              "thana_id":87,
                              "name":"3570",
                              "value":"3570"
                           },
                           {
                              "id":103,
                              "district_id":13,
                              "thana_id":88,
                              "name":"3550",
                              "value":"3550"
                           },
                           {
                              "id":104,
                              "district_id":13,
                              "thana_id":89,
                              "name":"3501",
                              "value":"3501"
                           },
                           {
                              "id":105,
                              "district_id":13,
                              "thana_id":90,
                              "name":"3505",
                              "value":"3505"
                           },
                           {
                              "id":106,
                              "district_id":13,
                              "thana_id":91,
                              "name":"3510",
                              "value":"3510"
                           },
                           {
                              "id":107,
                              "district_id":13,
                              "thana_id":92,
                              "name":"3517",
                              "value":"3517"
                           },
                           {
                              "id":108,
                              "district_id":13,
                              "thana_id":93,
                              "name":"3516",
                              "value":"3516"
                           },
                           {
                              "id":109,
                              "district_id":13,
                              "thana_id":94,
                              "name":"3561",
                              "value":"3561"
                           },
                           {
                              "id":110,
                              "district_id":13,
                              "thana_id":95,
                              "name":"3541",
                              "value":"3541"
                           },
                           {
                              "id":111,
                              "district_id":13,
                              "thana_id":96,
                              "name":"3546",
                              "value":"3546"
                           },
                           {
                              "id":112,
                              "district_id":13,
                              "thana_id":97,
                              "name":"3500",
                              "value":"3500"
                           },
                           {
                              "id":113,
                              "district_id":14,
                              "thana_id":98,
                              "name":"4700",
                              "value":"4700"
                           },
                           {
                              "id":114,
                              "district_id":15,
                              "thana_id":99,
                              "name":"1312",
                              "value":"1312"
                           },
                           {
                              "id":115,
                              "district_id":15,
                              "thana_id":100,
                              "name":"1310",
                              "value":"1310"
                           },
                           {
                              "id":116,
                              "district_id":15,
                              "thana_id":101,
                              "name":"1204",
                              "value":"1204"
                           },
                           {
                              "id":117,
                              "district_id":15,
                              "thana_id":102,
                              "name":"1360",
                              "value":"1360"
                           },
                           {
                              "id":118,
                              "district_id":16,
                              "thana_id":103,
                              "name":"5240",
                              "value":"5240"
                           },
                           {
                              "id":119,
                              "district_id":16,
                              "thana_id":104,
                              "name":"5291",
                              "value":"5291"
                           },
                           {
                              "id":120,
                              "district_id":16,
                              "thana_id":105,
                              "name":"5200",
                              "value":"5200"
                           },
                           {
                              "id":121,
                              "district_id":16,
                              "thana_id":106,
                              "name":"5220",
                              "value":"5220"
                           },
                           {
                              "id":122,
                              "district_id":16,
                              "thana_id":107,
                              "name":"5210",
                              "value":"5210"
                           },
                           {
                              "id":123,
                              "district_id":16,
                              "thana_id":108,
                              "name":"5280",
                              "value":"5280"
                           },
                           {
                              "id":124,
                              "district_id":16,
                              "thana_id":109,
                              "name":"5230",
                              "value":"5230"
                           },
                           {
                              "id":125,
                              "district_id":16,
                              "thana_id":110,
                              "name":"5250",
                              "value":"5250"
                           },
                           {
                              "id":126,
                              "district_id":16,
                              "thana_id":111,
                              "name":"5201",
                              "value":"5201"
                           },
                           {
                              "id":127,
                              "district_id":16,
                              "thana_id":112,
                              "name":"5470",
                              "value":"5470"
                           },
                           {
                              "id":128,
                              "district_id":16,
                              "thana_id":113,
                              "name":"5200",
                              "value":"5200"
                           },
                           {
                              "id":129,
                              "district_id":17,
                              "thana_id":114,
                              "name":"7870",
                              "value":"7870"
                           },
                           {
                              "id":130,
                              "district_id":17,
                              "thana_id":115,
                              "name":"7801",
                              "value":"7801"
                           },
                           {
                              "id":131,
                              "district_id":17,
                              "thana_id":115,
                              "name":"7800",
                              "value":"7800"
                           },
                           {
                              "id":132,
                              "district_id":18,
                              "thana_id":116,
                              "name":"3937",
                              "value":"3937"
                           },
                           {
                              "id":133,
                              "district_id":18,
                              "thana_id":117,
                              "name":"3942",
                              "value":"3942"
                           },
                           {
                              "id":134,
                              "district_id":18,
                              "thana_id":118,
                              "name":"3940",
                              "value":"3940"
                           },
                           {
                              "id":135,
                              "district_id":18,
                              "thana_id":119,
                              "name":"3910",
                              "value":"3910"
                           },
                           {
                              "id":136,
                              "district_id":18,
                              "thana_id":120,
                              "name":"3920",
                              "value":"3920"
                           },
                           {
                              "id":137,
                              "district_id":18,
                              "thana_id":121,
                              "name":"3900",
                              "value":"3900"
                           },
                           {
                              "id":138,
                              "district_id":19,
                              "thana_id":122,
                              "name":"5720",
                              "value":"5720"
                           },
                           {
                              "id":139,
                              "district_id":19,
                              "thana_id":123,
                              "name":"5751",
                              "value":"5751"
                           },
                           {
                              "id":140,
                              "district_id":19,
                              "thana_id":124,
                              "name":"5760",
                              "value":"5760"
                           },
                           {
                              "id":141,
                              "district_id":19,
                              "thana_id":125,
                              "name":"5730",
                              "value":"5730"
                           },
                           {
                              "id":142,
                              "district_id":19,
                              "thana_id":126,
                              "name":"5710",
                              "value":"5710"
                           },
                           {
                              "id":143,
                              "district_id":19,
                              "thana_id":127,
                              "name":"5700",
                              "value":"5700"
                           },
                           {
                              "id":144,
                              "district_id":20,
                              "thana_id":128,
                              "name":"1741",
                              "value":"1741"
                           },
                           {
                              "id":145,
                              "district_id":20,
                              "thana_id":129,
                              "name":"1740",
                              "value":"1740"
                           },
                           {
                              "id":146,
                              "district_id":20,
                              "thana_id":130,
                              "name":"1721",
                              "value":"1721"
                           },
                           {
                              "id":147,
                              "district_id":20,
                              "thana_id":131,
                              "name":"1730",
                              "value":"1730"
                           },
                           {
                              "id":148,
                              "district_id":20,
                              "thana_id":132,
                              "name":"1703",
                              "value":"1703"
                           },
                           {
                              "id":149,
                              "district_id":20,
                              "thana_id":132,
                              "name":"1701",
                              "value":"1701"
                           },
                           {
                              "id":150,
                              "district_id":20,
                              "thana_id":132,
                              "name":"1700",
                              "value":"1700"
                           },
                           {
                              "id":151,
                              "district_id":20,
                              "thana_id":132,
                              "name":"1704",
                              "value":"1704"
                           },
                           {
                              "id":152,
                              "district_id":20,
                              "thana_id":133,
                              "name":"1710",
                              "value":"1710"
                           },
                           {
                              "id":153,
                              "district_id":20,
                              "thana_id":133,
                              "name":"1712",
                              "value":"1712"
                           },
                           {
                              "id":154,
                              "district_id":20,
                              "thana_id":134,
                              "name":"1711",
                              "value":"1711"
                           },
                           {
                              "id":155,
                              "district_id":21,
                              "thana_id":135,
                              "name":"8141",
                              "value":"8141"
                           },
                           {
                              "id":156,
                              "district_id":21,
                              "thana_id":136,
                              "name":"8130",
                              "value":"8130"
                           },
                           {
                              "id":157,
                              "district_id":21,
                              "thana_id":137,
                              "name":"8120",
                              "value":"8120"
                           },
                           {
                              "id":158,
                              "district_id":21,
                              "thana_id":138,
                              "name":"8100",
                              "value":"8100"
                           },
                           {
                              "id":159,
                              "district_id":22,
                              "thana_id":139,
                              "name":"3300",
                              "value":"3300"
                           },
                           {
                              "id":160,
                              "district_id":23,
                              "thana_id":140,
                              "name":"2020",
                              "value":"2020"
                           },
                           {
                              "id":161,
                              "district_id":23,
                              "thana_id":141,
                              "name":"2140",
                              "value":"2140"
                           },
                           {
                              "id":162,
                              "district_id":23,
                              "thana_id":142,
                              "name":"2010",
                              "value":"2010"
                           },
                           {
                              "id":163,
                              "district_id":23,
                              "thana_id":143,
                              "name":"2040",
                              "value":"2040"
                           },
                           {
                              "id":164,
                              "district_id":23,
                              "thana_id":144,
                              "name":"2020",
                              "value":"2020"
                           },
                           {
                              "id":165,
                              "district_id":23,
                              "thana_id":145,
                              "name":"2030",
                              "value":"2030"
                           },
                           {
                              "id":166,
                              "district_id":24,
                              "thana_id":146,
                              "name":"7460",
                              "value":"7460"
                           },
                           {
                              "id":167,
                              "district_id":24,
                              "thana_id":147,
                              "name":"7431",
                              "value":"7431"
                           },
                           {
                              "id":168,
                              "district_id":24,
                              "thana_id":148,
                              "name":"7430",
                              "value":"7430"
                           },
                           {
                              "id":169,
                              "district_id":24,
                              "thana_id":149,
                              "name":"7420",
                              "value":"7420"
                           },
                           {
                              "id":170,
                              "district_id":24,
                              "thana_id":150,
                              "name":"7410",
                              "value":"7410"
                           },
                           {
                              "id":171,
                              "district_id":24,
                              "thana_id":151,
                              "name":"7470",
                              "value":"7470"
                           },
                           {
                              "id":172,
                              "district_id":24,
                              "thana_id":152,
                              "name":"7450",
                              "value":"7450"
                           },
                           {
                              "id":173,
                              "district_id":24,
                              "thana_id":153,
                              "name":"7404",
                              "value":"7404"
                           },
                           {
                              "id":174,
                              "district_id":24,
                              "thana_id":154,
                              "name":"7440",
                              "value":"7440"
                           },
                           {
                              "id":175,
                              "district_id":24,
                              "thana_id":155,
                              "name":"7400",
                              "value":"7400"
                           },
                           {
                              "id":176,
                              "district_id":25,
                              "thana_id":156,
                              "name":"7300",
                              "value":"7300"
                           },
                           {
                              "id":177,
                              "district_id":26,
                              "thana_id":157,
                              "name":"5920",
                              "value":"5920"
                           },
                           {
                              "id":178,
                              "district_id":26,
                              "thana_id":158,
                              "name":"5940",
                              "value":"5940"
                           },
                           {
                              "id":179,
                              "district_id":26,
                              "thana_id":159,
                              "name":"5910",
                              "value":"5910"
                           },
                           {
                              "id":180,
                              "district_id":26,
                              "thana_id":160,
                              "name":"5930",
                              "value":"5930"
                           },
                           {
                              "id":181,
                              "district_id":26,
                              "thana_id":161,
                              "name":"5900",
                              "value":"5900"
                           },
                           {
                              "id":182,
                              "district_id":27,
                              "thana_id":162,
                              "name":"4400",
                              "value":"4400"
                           },
                           {
                              "id":183,
                              "district_id":27,
                              "thana_id":163,
                              "name":"4400",
                              "value":"4400"
                           },
                           {
                              "id":184,
                              "district_id":27,
                              "thana_id":164,
                              "name":"4410",
                              "value":"4410"
                           },
                           {
                              "id":185,
                              "district_id":27,
                              "thana_id":165,
                              "name":"4460",
                              "value":"4460"
                           },
                           {
                              "id":186,
                              "district_id":27,
                              "thana_id":166,
                              "name":"4430",
                              "value":"4430"
                           },
                           {
                              "id":187,
                              "district_id":27,
                              "thana_id":167,
                              "name":"4470",
                              "value":"4470"
                           },
                           {
                              "id":188,
                              "district_id":27,
                              "thana_id":168,
                              "name":"4450",
                              "value":"4450"
                           },
                           {
                              "id":189,
                              "district_id":27,
                              "thana_id":169,
                              "name":"4420",
                              "value":"4420"
                           },
                           {
                              "id":190,
                              "district_id":27,
                              "thana_id":170,
                              "name":"4400",
                              "value":"4400"
                           },
                           {
                              "id":191,
                              "district_id":28,
                              "thana_id":171,
                              "name":"9100",
                              "value":"9100"
                           },
                           {
                              "id":192,
                              "district_id":28,
                              "thana_id":172,
                              "name":"9290",
                              "value":"9290"
                           },
                           {
                              "id":193,
                              "district_id":28,
                              "thana_id":173,
                              "name":"9210",
                              "value":"9210"
                           },
                           {
                              "id":194,
                              "district_id":28,
                              "thana_id":174,
                              "name":"9100",
                              "value":"9100"
                           },
                           {
                              "id":195,
                              "district_id":28,
                              "thana_id":175,
                              "name":"9220",
                              "value":"9220"
                           },
                           {
                              "id":196,
                              "district_id":28,
                              "thana_id":176,
                              "name":"9260",
                              "value":"9260"
                           },
                           {
                              "id":197,
                              "district_id":28,
                              "thana_id":177,
                              "name":"9280",
                              "value":"9280"
                           },
                           {
                              "id":198,
                              "district_id":28,
                              "thana_id":178,
                              "name":"9230",
                              "value":"9230"
                           },
                           {
                              "id":199,
                              "district_id":28,
                              "thana_id":179,
                              "name":"9100",
                              "value":"9100"
                           },
                           {
                              "id":200,
                              "district_id":28,
                              "thana_id":180,
                              "name":"9100",
                              "value":"9100"
                           },
                           {
                              "id":201,
                              "district_id":28,
                              "thana_id":181,
                              "name":"9241",
                              "value":"9241"
                           },
                           {
                              "id":202,
                              "district_id":28,
                              "thana_id":182,
                              "name":"9100",
                              "value":"9100"
                           },
                           {
                              "id":203,
                              "district_id":29,
                              "thana_id":183,
                              "name":"2390",
                              "value":"2390"
                           },
                           {
                              "id":204,
                              "district_id":29,
                              "thana_id":184,
                              "name":"2320",
                              "value":"2320"
                           },
                           {
                              "id":205,
                              "district_id":29,
                              "thana_id":185,
                              "name":"2336",
                              "value":"2336"
                           },
                           {
                              "id":206,
                              "district_id":29,
                              "thana_id":186,
                              "name":"2380",
                              "value":"2380"
                           },
                           {
                              "id":207,
                              "district_id":29,
                              "thana_id":187,
                              "name":"2310",
                              "value":"2310"
                           },
                           {
                              "id":208,
                              "district_id":29,
                              "thana_id":188,
                              "name":"2360",
                              "value":"2360"
                           },
                           {
                              "id":209,
                              "district_id":29,
                              "thana_id":189,
                              "name":"2330",
                              "value":"2330"
                           },
                           {
                              "id":210,
                              "district_id":29,
                              "thana_id":190,
                              "name":"2340",
                              "value":"2340"
                           },
                           {
                              "id":211,
                              "district_id":29,
                              "thana_id":191,
                              "name":"2326",
                              "value":"2326"
                           },
                           {
                              "id":212,
                              "district_id":29,
                              "thana_id":192,
                              "name":"2316",
                              "value":"2316"
                           },
                           {
                              "id":213,
                              "district_id":29,
                              "thana_id":193,
                              "name":"2371",
                              "value":"2371"
                           },
                           {
                              "id":214,
                              "district_id":29,
                              "thana_id":194,
                              "name":"2350",
                              "value":"2350"
                           },
                           {
                              "id":215,
                              "district_id":29,
                              "thana_id":195,
                              "name":"2350",
                              "value":"2350"
                           },
                           {
                              "id":216,
                              "district_id":29,
                              "thana_id":196,
                              "name":"2300",
                              "value":"2300"
                           },
                           {
                              "id":217,
                              "district_id":30,
                              "thana_id":197,
                              "name":"5640",
                              "value":"5640"
                           },
                           {
                              "id":218,
                              "district_id":30,
                              "thana_id":198,
                              "name":"5620",
                              "value":"5620"
                           },
                           {
                              "id":219,
                              "district_id":30,
                              "thana_id":199,
                              "name":"5680",
                              "value":"5680"
                           },
                           {
                              "id":220,
                              "district_id":30,
                              "thana_id":200,
                              "name":"5660",
                              "value":"5660"
                           },
                           {
                              "id":221,
                              "district_id":30,
                              "thana_id":201,
                              "name":"5610",
                              "value":"5610"
                           },
                           {
                              "id":222,
                              "district_id":30,
                              "thana_id":202,
                              "name":"5630",
                              "value":"5630"
                           },
                           {
                              "id":223,
                              "district_id":30,
                              "thana_id":202,
                              "name":"56000",
                              "value":"56000"
                           },
                           {
                              "id":224,
                              "district_id":30,
                              "thana_id":202,
                              "name":"56001",
                              "value":"56001"
                           },
                           {
                              "id":225,
                              "district_id":30,
                              "thana_id":202,
                              "name":"56002",
                              "value":"56002"
                           },
                           {
                              "id":226,
                              "district_id":30,
                              "thana_id":203,
                              "name":"5670",
                              "value":"5670"
                           },
                           {
                              "id":227,
                              "district_id":30,
                              "thana_id":204,
                              "name":"5650",
                              "value":"5650"
                           },
                           {
                              "id":228,
                              "district_id":30,
                              "thana_id":205,
                              "name":"5660",
                              "value":"5660"
                           },
                           {
                              "id":229,
                              "district_id":31,
                              "thana_id":206,
                              "name":"7040",
                              "value":"7040"
                           },
                           {
                              "id":230,
                              "district_id":31,
                              "thana_id":207,
                              "name":"7021",
                              "value":"7021"
                           },
                           {
                              "id":231,
                              "district_id":31,
                              "thana_id":208,
                              "name":"7030",
                              "value":"7030"
                           },
                           {
                              "id":232,
                              "district_id":31,
                              "thana_id":209,
                              "name":"7010",
                              "value":"7010"
                           },
                           {
                              "id":233,
                              "district_id":31,
                              "thana_id":210,
                              "name":"7000",
                              "value":"7000"
                           },
                           {
                              "id":234,
                              "district_id":32,
                              "thana_id":211,
                              "name":"3732",
                              "value":"3732"
                           },
                           {
                              "id":235,
                              "district_id":32,
                              "thana_id":212,
                              "name":"3709",
                              "value":"3709"
                           },
                           {
                              "id":236,
                              "district_id":32,
                              "thana_id":213,
                              "name":"3732",
                              "value":"3732"
                           },
                           {
                              "id":237,
                              "district_id":32,
                              "thana_id":214,
                              "name":"3710",
                              "value":"3710"
                           },
                           {
                              "id":238,
                              "district_id":32,
                              "thana_id":215,
                              "name":"3720",
                              "value":"3720"
                           },
                           {
                              "id":239,
                              "district_id":32,
                              "thana_id":216,
                              "name":"3700",
                              "value":"3700"
                           },
                           {
                              "id":240,
                              "district_id":33,
                              "thana_id":217,
                              "name":"5540",
                              "value":"5540"
                           },
                           {
                              "id":241,
                              "district_id":33,
                              "thana_id":218,
                              "name":"5502",
                              "value":"5502"
                           },
                           {
                              "id":242,
                              "district_id":33,
                              "thana_id":219,
                              "name":"5530",
                              "value":"5530"
                           },
                           {
                              "id":243,
                              "district_id":33,
                              "thana_id":220,
                              "name":"5510",
                              "value":"5510"
                           },
                           {
                              "id":244,
                              "district_id":33,
                              "thana_id":221,
                              "name":"5500",
                              "value":"5500"
                           },
                           {
                              "id":245,
                              "district_id":34,
                              "thana_id":222,
                              "name":"7900",
                              "value":"7900"
                           },
                           {
                              "id":246,
                              "district_id":34,
                              "thana_id":223,
                              "name":"7900",
                              "value":"7900"
                           },
                           {
                              "id":247,
                              "district_id":35,
                              "thana_id":224,
                              "name":"7610",
                              "value":"7610"
                           },
                           {
                              "id":248,
                              "district_id":35,
                              "thana_id":225,
                              "name":"7630",
                              "value":"7630"
                           },
                           {
                              "id":249,
                              "district_id":35,
                              "thana_id":226,
                              "name":"7600",
                              "value":"7600"
                           },
                           {
                              "id":250,
                              "district_id":36,
                              "thana_id":227,
                              "name":"1810",
                              "value":"1810"
                           },
                           {
                              "id":251,
                              "district_id":36,
                              "thana_id":228,
                              "name":"1850",
                              "value":"1850"
                           },
                           {
                              "id":252,
                              "district_id":36,
                              "thana_id":229,
                              "name":"1840",
                              "value":"1840"
                           },
                           {
                              "id":253,
                              "district_id":36,
                              "thana_id":230,
                              "name":"1860",
                              "value":"1860"
                           },
                           {
                              "id":254,
                              "district_id":36,
                              "thana_id":231,
                              "name":"1820",
                              "value":"1820"
                           },
                           {
                              "id":255,
                              "district_id":36,
                              "thana_id":232,
                              "name":"1800",
                              "value":"1800"
                           },
                           {
                              "id":256,
                              "district_id":37,
                              "thana_id":233,
                              "name":"7102",
                              "value":"7102"
                           },
                           {
                              "id":257,
                              "district_id":37,
                              "thana_id":233,
                              "name":"7100",
                              "value":"7100"
                           },
                           {
                              "id":258,
                              "district_id":37,
                              "thana_id":234,
                              "name":"7110",
                              "value":"7110"
                           },
                           {
                              "id":259,
                              "district_id":38,
                              "thana_id":235,
                              "name":"3220",
                              "value":"3220"
                           },
                           {
                              "id":260,
                              "district_id":38,
                              "thana_id":236,
                              "name":"3251",
                              "value":"3251"
                           },
                           {
                              "id":261,
                              "district_id":38,
                              "thana_id":237,
                              "name":"3240",
                              "value":"3240"
                           },
                           {
                              "id":262,
                              "district_id":38,
                              "thana_id":238,
                              "name":"3250",
                              "value":"3250"
                           },
                           {
                              "id":263,
                              "district_id":38,
                              "thana_id":239,
                              "name":"3230",
                              "value":"3230"
                           },
                           {
                              "id":264,
                              "district_id":38,
                              "thana_id":240,
                              "name":"3210",
                              "value":"3210"
                           },
                           {
                              "id":265,
                              "district_id":38,
                              "thana_id":241,
                              "name":"3200",
                              "value":"3200"
                           },
                           {
                              "id":266,
                              "district_id":39,
                              "thana_id":242,
                              "name":"1510",
                              "value":"1510"
                           },
                           {
                              "id":267,
                              "district_id":39,
                              "thana_id":243,
                              "name":"1520",
                              "value":"1520"
                           },
                           {
                              "id":268,
                              "district_id":39,
                              "thana_id":244,
                              "name":"1540",
                              "value":"1540"
                           },
                           {
                              "id":269,
                              "district_id":39,
                              "thana_id":245,
                              "name":"1550",
                              "value":"1550"
                           },
                           {
                              "id":270,
                              "district_id":39,
                              "thana_id":246,
                              "name":"1530",
                              "value":"1530"
                           },
                           {
                              "id":271,
                              "district_id":39,
                              "thana_id":247,
                              "name":"1540",
                              "value":"1540"
                           },
                           {
                              "id":272,
                              "district_id":39,
                              "thana_id":248,
                              "name":"1500",
                              "value":"1500"
                           },
                           {
                              "id":273,
                              "district_id":40,
                              "thana_id":249,
                              "name":"2200",
                              "value":"2200"
                           },
                           {
                              "id":274,
                              "district_id":41,
                              "thana_id":250,
                              "name":"6511",
                              "value":"6511"
                           },
                           {
                              "id":275,
                              "district_id":41,
                              "thana_id":251,
                              "name":"6551",
                              "value":"6551"
                           },
                           {
                              "id":276,
                              "district_id":41,
                              "thana_id":252,
                              "name":"6520",
                              "value":"6520"
                           },
                           {
                              "id":277,
                              "district_id":41,
                              "thana_id":253,
                              "name":"6580",
                              "value":"6580"
                           },
                           {
                              "id":278,
                              "district_id":41,
                              "thana_id":254,
                              "name":"6590",
                              "value":"6590"
                           },
                           {
                              "id":279,
                              "district_id":41,
                              "thana_id":255,
                              "name":"6570",
                              "value":"6570"
                           },
                           {
                              "id":280,
                              "district_id":41,
                              "thana_id":256,
                              "name":"6560",
                              "value":"6560"
                           },
                           {
                              "id":281,
                              "district_id":41,
                              "thana_id":257,
                              "name":"6540",
                              "value":"6540"
                           },
                           {
                              "id":282,
                              "district_id":41,
                              "thana_id":258,
                              "name":"6530",
                              "value":"6530"
                           },
                           {
                              "id":283,
                              "district_id":41,
                              "thana_id":259,
                              "name":"6500",
                              "value":"6500"
                           },
                           {
                              "id":284,
                              "district_id":42,
                              "thana_id":260,
                              "name":"7520",
                              "value":"7520"
                           },
                           {
                              "id":285,
                              "district_id":42,
                              "thana_id":261,
                              "name":"7511",
                              "value":"7511"
                           },
                           {
                              "id":286,
                              "district_id":42,
                              "thana_id":262,
                              "name":"7500",
                              "value":"7500"
                           },
                           {
                              "id":287,
                              "district_id":43,
                              "thana_id":263,
                              "name":"1414",
                              "value":"1414"
                           },
                           {
                              "id":288,
                              "district_id":43,
                              "thana_id":264,
                              "name":"1431",
                              "value":"1431"
                           },
                           {
                              "id":289,
                              "district_id":43,
                              "thana_id":265,
                              "name":"1440",
                              "value":"1440"
                           },
                           {
                              "id":290,
                              "district_id":43,
                              "thana_id":266,
                              "name":"1430",
                              "value":"1430"
                           },
                           {
                              "id":291,
                              "district_id":43,
                              "thana_id":267,
                              "name":"1420",
                              "value":"1420"
                           },
                           {
                              "id":292,
                              "district_id":43,
                              "thana_id":268,
                              "name":"1400",
                              "value":"1400"
                           },
                           {
                              "id":293,
                              "district_id":43,
                              "thana_id":269,
                              "name":"1460",
                              "value":"1460"
                           },
                           {
                              "id":294,
                              "district_id":43,
                              "thana_id":270,
                              "name":"1410",
                              "value":"1410"
                           },
                           {
                              "id":295,
                              "district_id":43,
                              "thana_id":271,
                              "name":"1460",
                              "value":"1460"
                           },
                           {
                              "id":296,
                              "district_id":43,
                              "thana_id":272,
                              "name":"1450",
                              "value":"1450"
                           },
                           {
                              "id":297,
                              "district_id":43,
                              "thana_id":273,
                              "name":"1451",
                              "value":"1451"
                           },
                           {
                              "id":298,
                              "district_id":44,
                              "thana_id":274,
                              "name":"1650",
                              "value":"1650"
                           },
                           {
                              "id":299,
                              "district_id":44,
                              "thana_id":275,
                              "name":"1630",
                              "value":"1630"
                           },
                           {
                              "id":300,
                              "district_id":44,
                              "thana_id":276,
                              "name":"1640",
                              "value":"1640"
                           },
                           {
                              "id":301,
                              "district_id":44,
                              "thana_id":277,
                              "name":"1620",
                              "value":"1620"
                           },
                           {
                              "id":302,
                              "district_id":44,
                              "thana_id":278,
                              "name":"1604",
                              "value":"1604"
                           },
                           {
                              "id":303,
                              "district_id":44,
                              "thana_id":279,
                              "name":"1613",
                              "value":"1613"
                           },
                           {
                              "id":304,
                              "district_id":44,
                              "thana_id":279,
                              "name":"1610",
                              "value":"1610"
                           },
                           {
                              "id":305,
                              "district_id":44,
                              "thana_id":280,
                              "name":"1600",
                              "value":"1600"
                           },
                           {
                              "id":306,
                              "district_id":45,
                              "thana_id":281,
                              "name":"6421",
                              "value":"6421"
                           },
                           {
                              "id":307,
                              "district_id":45,
                              "thana_id":282,
                              "name":"6450",
                              "value":"6450"
                           },
                           {
                              "id":308,
                              "district_id":45,
                              "thana_id":283,
                              "name":"6432",
                              "value":"6432"
                           },
                           {
                              "id":309,
                              "district_id":45,
                              "thana_id":284,
                              "name":"6400",
                              "value":"6400"
                           },
                           {
                              "id":310,
                              "district_id":45,
                              "thana_id":285,
                              "name":"6432",
                              "value":"6432"
                           },
                           {
                              "id":311,
                              "district_id":46,
                              "thana_id":286,
                              "name":"2460",
                              "value":"2460"
                           },
                           {
                              "id":312,
                              "district_id":46,
                              "thana_id":287,
                              "name":"2410",
                              "value":"2410"
                           },
                           {
                              "id":313,
                              "district_id":46,
                              "thana_id":288,
                              "name":"2490",
                              "value":"2490"
                           },
                           {
                              "id":314,
                              "district_id":46,
                              "thana_id":289,
                              "name":"2440",
                              "value":"2440"
                           },
                           {
                              "id":315,
                              "district_id":46,
                              "thana_id":290,
                              "name":"2470",
                              "value":"2470"
                           },
                           {
                              "id":316,
                              "district_id":46,
                              "thana_id":291,
                              "name":"2430",
                              "value":"2430"
                           },
                           {
                              "id":317,
                              "district_id":46,
                              "thana_id":292,
                              "name":"2420",
                              "value":"2420"
                           },
                           {
                              "id":318,
                              "district_id":46,
                              "thana_id":293,
                              "name":"2480",
                              "value":"2480"
                           },
                           {
                              "id":319,
                              "district_id":46,
                              "thana_id":294,
                              "name":"2446",
                              "value":"2446"
                           },
                           {
                              "id":320,
                              "district_id":46,
                              "thana_id":295,
                              "name":"2400",
                              "value":"2400"
                           },
                           {
                              "id":321,
                              "district_id":47,
                              "thana_id":296,
                              "name":"5320",
                              "value":"5320"
                           },
                           {
                              "id":322,
                              "district_id":47,
                              "thana_id":297,
                              "name":"5330",
                              "value":"5330"
                           },
                           {
                              "id":323,
                              "district_id":47,
                              "thana_id":298,
                              "name":"5340",
                              "value":"5340"
                           },
                           {
                              "id":324,
                              "district_id":47,
                              "thana_id":299,
                              "name":"5350",
                              "value":"5350"
                           },
                           {
                              "id":325,
                              "district_id":47,
                              "thana_id":300,
                              "name":"5310",
                              "value":"5310"
                           },
                           {
                              "id":326,
                              "district_id":47,
                              "thana_id":301,
                              "name":"5300",
                              "value":"5300"
                           },
                           {
                              "id":327,
                              "district_id":48,
                              "thana_id":302,
                              "name":"3812",
                              "value":"3812"
                           },
                           {
                              "id":328,
                              "district_id":48,
                              "thana_id":302,
                              "name":"3800",
                              "value":"3800"
                           },
                           {
                              "id":329,
                              "district_id":48,
                              "thana_id":303,
                              "name":"3827",
                              "value":"3827"
                           },
                           {
                              "id":330,
                              "district_id":48,
                              "thana_id":303,
                              "name":"3820",
                              "value":"3820"
                           },
                           {
                              "id":331,
                              "district_id":48,
                              "thana_id":304,
                              "name":"3870",
                              "value":"3870"
                           },
                           {
                              "id":332,
                              "district_id":48,
                              "thana_id":305,
                              "name":"3860",
                              "value":"3860"
                           },
                           {
                              "id":333,
                              "district_id":48,
                              "thana_id":306,
                              "name":"3850",
                              "value":"3850"
                           },
                           {
                              "id":334,
                              "district_id":49,
                              "thana_id":307,
                              "name":"6630",
                              "value":"6630"
                           },
                           {
                              "id":335,
                              "district_id":52,
                              "thana_id":322,
                              "name":"8500",
                              "value":"8500"
                           },
                           {
                              "id":336,
                              "district_id":53,
                              "thana_id":323,
                              "name":"7700",
                              "value":"7700"
                           },
                           {
                              "id":337,
                              "district_id":54,
                              "thana_id":324,
                              "name":"6250",
                              "value":"6250"
                           },
                           {
                              "id":338,
                              "district_id":54,
                              "thana_id":325,
                              "name":"6230",
                              "value":"6230"
                           },
                           {
                              "id":339,
                              "district_id":54,
                              "thana_id":326,
                              "name":"6000",
                              "value":"6000"
                           },
                           {
                              "id":340,
                              "district_id":54,
                              "thana_id":327,
                              "name":"6240",
                              "value":"6240"
                           },
                           {
                              "id":341,
                              "district_id":54,
                              "thana_id":328,
                              "name":"6270",
                              "value":"6270"
                           },
                           {
                              "id":342,
                              "district_id":54,
                              "thana_id":329,
                              "name":"6220",
                              "value":"6220"
                           },
                           {
                              "id":343,
                              "district_id":54,
                              "thana_id":330,
                              "name":"6260",
                              "value":"6260"
                           },
                           {
                              "id":344,
                              "district_id":54,
                              "thana_id":331,
                              "name":"6211",
                              "value":"6211"
                           },
                           {
                              "id":345,
                              "district_id":54,
                              "thana_id":332,
                              "name":"6290",
                              "value":"6290"
                           },
                           {
                              "id":346,
                              "district_id":54,
                              "thana_id":333,
                              "name":"6280",
                              "value":"6280"
                           },
                           {
                              "id":347,
                              "district_id":54,
                              "thana_id":334,
                              "name":"6250",
                              "value":"6250"
                           },
                           {
                              "id":348,
                              "district_id":54,
                              "thana_id":335,
                              "name":"6230",
                              "value":"6230"
                           },
                           {
                              "id":349,
                              "district_id":55,
                              "thana_id":336,
                              "name":"4500",
                              "value":"4500"
                           },
                           {
                              "id":350,
                              "district_id":56,
                              "thana_id":337,
                              "name":"5440",
                              "value":"5440"
                           },
                           {
                              "id":351,
                              "district_id":56,
                              "thana_id":338,
                              "name":"5450",
                              "value":"5450"
                           },
                           {
                              "id":352,
                              "district_id":56,
                              "thana_id":339,
                              "name":"5410",
                              "value":"5410"
                           },
                           {
                              "id":353,
                              "district_id":56,
                              "thana_id":340,
                              "name":"5430",
                              "value":"5430"
                           },
                           {
                              "id":354,
                              "district_id":56,
                              "thana_id":341,
                              "name":"5420",
                              "value":"5420"
                           },
                           {
                              "id":355,
                              "district_id":56,
                              "thana_id":342,
                              "name":"5470",
                              "value":"5470"
                           },
                           {
                              "id":356,
                              "district_id":56,
                              "thana_id":343,
                              "name":"5460",
                              "value":"5460"
                           },
                           {
                              "id":357,
                              "district_id":56,
                              "thana_id":344,
                              "name":"5400",
                              "value":"5400"
                           },
                           {
                              "id":358,
                              "district_id":57,
                              "thana_id":345,
                              "name":"9460",
                              "value":"9460"
                           },
                           {
                              "id":359,
                              "district_id":57,
                              "thana_id":346,
                              "name":"9400",
                              "value":"9400"
                           },
                           {
                              "id":360,
                              "district_id":58,
                              "thana_id":347,
                              "name":"1346",
                              "value":"1346"
                           },
                           {
                              "id":361,
                              "district_id":58,
                              "thana_id":347,
                              "name":"1349",
                              "value":"1349"
                           },
                           {
                              "id":362,
                              "district_id":58,
                              "thana_id":347,
                              "name":"1344",
                              "value":"1344"
                           },
                           {
                              "id":363,
                              "district_id":58,
                              "thana_id":347,
                              "name":"1348",
                              "value":"1348"
                           },
                           {
                              "id":364,
                              "district_id":58,
                              "thana_id":348,
                              "name":"1342",
                              "value":"1342"
                           },
                           {
                              "id":365,
                              "district_id":58,
                              "thana_id":348,
                              "name":"1346",
                              "value":"1346"
                           },
                           {
                              "id":366,
                              "district_id":58,
                              "thana_id":349,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":367,
                              "district_id":58,
                              "thana_id":349,
                              "name":"1209",
                              "value":"1209"
                           },
                           {
                              "id":368,
                              "district_id":58,
                              "thana_id":349,
                              "name":"1225",
                              "value":"1225"
                           },
                           {
                              "id":369,
                              "district_id":58,
                              "thana_id":349,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":370,
                              "district_id":58,
                              "thana_id":349,
                              "name":"1207",
                              "value":"1207"
                           },
                           {
                              "id":371,
                              "district_id":58,
                              "thana_id":350,
                              "name":"1229",
                              "value":"1229"
                           },
                           {
                              "id":372,
                              "district_id":58,
                              "thana_id":350,
                              "name":"1212",
                              "value":"1212"
                           },
                           {
                              "id":373,
                              "district_id":58,
                              "thana_id":350,
                              "name":"1219",
                              "value":"1219"
                           },
                           {
                              "id":374,
                              "district_id":58,
                              "thana_id":351,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":375,
                              "district_id":58,
                              "thana_id":352,
                              "name":"1203",
                              "value":"1203"
                           },
                           {
                              "id":376,
                              "district_id":58,
                              "thana_id":352,
                              "name":"1100",
                              "value":"1100"
                           },
                           {
                              "id":377,
                              "district_id":58,
                              "thana_id":353,
                              "name":"1100",
                              "value":"1100"
                           },
                           {
                              "id":378,
                              "district_id":58,
                              "thana_id":354,
                              "name":"1211",
                              "value":"1211"
                           },
                           {
                              "id":379,
                              "district_id":58,
                              "thana_id":355,
                              "name":"1100",
                              "value":"1100"
                           },
                           {
                              "id":380,
                              "district_id":58,
                              "thana_id":356,
                              "name":"1211",
                              "value":"1211"
                           },
                           {
                              "id":381,
                              "district_id":58,
                              "thana_id":356,
                              "name":"1223",
                              "value":"1223"
                           },
                           {
                              "id":382,
                              "district_id":58,
                              "thana_id":356,
                              "name":"1205",
                              "value":"1205"
                           },
                           {
                              "id":383,
                              "district_id":58,
                              "thana_id":357,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":384,
                              "district_id":58,
                              "thana_id":357,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":385,
                              "district_id":58,
                              "thana_id":358,
                              "name":"1000",
                              "value":"1000"
                           },
                           {
                              "id":386,
                              "district_id":58,
                              "thana_id":359,
                              "name":"1000",
                              "value":"1000"
                           },
                           {
                              "id":387,
                              "district_id":58,
                              "thana_id":360,
                              "name":"1362",
                              "value":"1362"
                           },
                           {
                              "id":388,
                              "district_id":58,
                              "thana_id":361,
                              "name":"1203",
                              "value":"1203"
                           },
                           {
                              "id":389,
                              "district_id":58,
                              "thana_id":362,
                              "name":"1362",
                              "value":"1362"
                           },
                           {
                              "id":390,
                              "district_id":58,
                              "thana_id":363,
                              "name":"1214",
                              "value":"1214"
                           },
                           {
                              "id":391,
                              "district_id":58,
                              "thana_id":364,
                              "name":"1236",
                              "value":"1236"
                           },
                           {
                              "id":392,
                              "district_id":58,
                              "thana_id":365,
                              "name":"1214",
                              "value":"1214"
                           },
                           {
                              "id":393,
                              "district_id":58,
                              "thana_id":366,
                              "name":"1213",
                              "value":"1213"
                           },
                           {
                              "id":394,
                              "district_id":58,
                              "thana_id":366,
                              "name":"1212",
                              "value":"1212"
                           },
                           {
                              "id":395,
                              "district_id":58,
                              "thana_id":367,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":396,
                              "district_id":58,
                              "thana_id":367,
                              "name":"1212",
                              "value":"1212"
                           },
                           {
                              "id":397,
                              "district_id":58,
                              "thana_id":368,
                              "name":"1205",
                              "value":"1205"
                           },
                           {
                              "id":398,
                              "district_id":58,
                              "thana_id":369,
                              "name":"1205",
                              "value":"1205"
                           },
                           {
                              "id":399,
                              "district_id":58,
                              "thana_id":369,
                              "name":"1225",
                              "value":"1225"
                           },
                           {
                              "id":400,
                              "district_id":58,
                              "thana_id":369,
                              "name":"1209",
                              "value":"1209"
                           },
                           {
                              "id":401,
                              "district_id":58,
                              "thana_id":370,
                              "name":"1207",
                              "value":"1207"
                           },
                           {
                              "id":402,
                              "district_id":58,
                              "thana_id":371,
                              "name":"1230",
                              "value":"1230"
                           },
                           {
                              "id":403,
                              "district_id":58,
                              "thana_id":372,
                              "name":"1230",
                              "value":"1230"
                           },
                           {
                              "id":404,
                              "district_id":58,
                              "thana_id":373,
                              "name":"1230",
                              "value":"1230"
                           },
                           {
                              "id":405,
                              "district_id":58,
                              "thana_id":374,
                              "name":"1230",
                              "value":"1230"
                           },
                           {
                              "id":406,
                              "district_id":58,
                              "thana_id":375,
                              "name":"1230",
                              "value":"1230"
                           },
                           {
                              "id":407,
                              "district_id":58,
                              "thana_id":376,
                              "name":"1230",
                              "value":"1230"
                           },
                           {
                              "id":408,
                              "district_id":58,
                              "thana_id":377,
                              "name":"1229",
                              "value":"1229"
                           },
                           {
                              "id":409,
                              "district_id":58,
                              "thana_id":378,
                              "name":"1216",
                              "value":"1216"
                           },
                           {
                              "id":410,
                              "district_id":58,
                              "thana_id":379,
                              "name":"1216",
                              "value":"1216"
                           },
                           {
                              "id":411,
                              "district_id":58,
                              "thana_id":380,
                              "name":"1216",
                              "value":"1216"
                           },
                           {
                              "id":412,
                              "district_id":58,
                              "thana_id":380,
                              "name":"1207",
                              "value":"1207"
                           },
                           {
                              "id":413,
                              "district_id":58,
                              "thana_id":380,
                              "name":"1225",
                              "value":"1225"
                           },
                           {
                              "id":414,
                              "district_id":58,
                              "thana_id":381,
                              "name":"1219",
                              "value":"1219"
                           },
                           {
                              "id":415,
                              "district_id":58,
                              "thana_id":381,
                              "name":"1213",
                              "value":"1213"
                           },
                           {
                              "id":416,
                              "district_id":58,
                              "thana_id":381,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":417,
                              "district_id":58,
                              "thana_id":381,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":418,
                              "district_id":58,
                              "thana_id":382,
                              "name":"1212",
                              "value":"1212"
                           },
                           {
                              "id":419,
                              "district_id":58,
                              "thana_id":382,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":420,
                              "district_id":58,
                              "thana_id":382,
                              "name":"1219",
                              "value":"1219"
                           },
                           {
                              "id":421,
                              "district_id":58,
                              "thana_id":382,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":422,
                              "district_id":58,
                              "thana_id":383,
                              "name":"1219",
                              "value":"1219"
                           },
                           {
                              "id":423,
                              "district_id":58,
                              "thana_id":383,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":424,
                              "district_id":58,
                              "thana_id":384,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":425,
                              "district_id":58,
                              "thana_id":385,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":426,
                              "district_id":58,
                              "thana_id":385,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":427,
                              "district_id":58,
                              "thana_id":385,
                              "name":"1219",
                              "value":"1219"
                           },
                           {
                              "id":428,
                              "district_id":58,
                              "thana_id":386,
                              "name":"1212",
                              "value":"1212"
                           },
                           {
                              "id":429,
                              "district_id":58,
                              "thana_id":386,
                              "name":"1213",
                              "value":"1213"
                           },
                           {
                              "id":430,
                              "district_id":58,
                              "thana_id":386,
                              "name":"1219",
                              "value":"1219"
                           },
                           {
                              "id":431,
                              "district_id":58,
                              "thana_id":387,
                              "name":"1204",
                              "value":"1204"
                           },
                           {
                              "id":432,
                              "district_id":58,
                              "thana_id":388,
                              "name":"1206",
                              "value":"1206"
                           },
                           {
                              "id":433,
                              "district_id":58,
                              "thana_id":389,
                              "name":"1216",
                              "value":"1216"
                           },
                           {
                              "id":434,
                              "district_id":58,
                              "thana_id":390,
                              "name":"1216",
                              "value":"1216"
                           },
                           {
                              "id":435,
                              "district_id":58,
                              "thana_id":391,
                              "name":"1216",
                              "value":"1216"
                           },
                           {
                              "id":436,
                              "district_id":58,
                              "thana_id":392,
                              "name":"1206",
                              "value":"1206"
                           },
                           {
                              "id":437,
                              "district_id":58,
                              "thana_id":393,
                              "name":"1216",
                              "value":"1216"
                           },
                           {
                              "id":438,
                              "district_id":58,
                              "thana_id":394,
                              "name":"1217",
                              "value":"1217"
                           },
                           {
                              "id":439,
                              "district_id":58,
                              "thana_id":394,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":440,
                              "district_id":58,
                              "thana_id":395,
                              "name":"1312",
                              "value":"1312"
                           },
                           {
                              "id":441,
                              "district_id":58,
                              "thana_id":396,
                              "name":"1207",
                              "value":"1207"
                           },
                           {
                              "id":442,
                              "district_id":58,
                              "thana_id":397,
                              "name":"1209",
                              "value":"1209"
                           },
                           {
                              "id":443,
                              "district_id":58,
                              "thana_id":398,
                              "name":"1205",
                              "value":"1205"
                           },
                           {
                              "id":444,
                              "district_id":58,
                              "thana_id":398,
                              "name":"1209",
                              "value":"1209"
                           },
                           {
                              "id":445,
                              "district_id":58,
                              "thana_id":399,
                              "name":"1205",
                              "value":"1205"
                           },
                           {
                              "id":446,
                              "district_id":58,
                              "thana_id":399,
                              "name":"1209",
                              "value":"1209"
                           },
                           {
                              "id":447,
                              "district_id":58,
                              "thana_id":400,
                              "name":"1205",
                              "value":"1205"
                           },
                           {
                              "id":448,
                              "district_id":58,
                              "thana_id":401,
                              "name":"1215",
                              "value":"1215"
                           },
                           {
                              "id":449,
                              "district_id":59,
                              "thana_id":402,
                              "name":"8010",
                              "value":"8010"
                           },
                           {
                              "id":450,
                              "district_id":59,
                              "thana_id":403,
                              "name":"8020",
                              "value":"8020"
                           },
                           {
                              "id":451,
                              "district_id":59,
                              "thana_id":404,
                              "name":"8050",
                              "value":"8050"
                           },
                           {
                              "id":452,
                              "district_id":59,
                              "thana_id":405,
                              "name":"8040",
                              "value":"8040"
                           },
                           {
                              "id":453,
                              "district_id":59,
                              "thana_id":406,
                              "name":"8030",
                              "value":"8030"
                           },
                           {
                              "id":454,
                              "district_id":59,
                              "thana_id":407,
                              "name":"8000",
                              "value":"8000"
                           },
                           {
                              "id":455,
                              "district_id":60,
                              "thana_id":408,
                              "name":"2110",
                              "value":"2110"
                           },
                           {
                              "id":456,
                              "district_id":60,
                              "thana_id":409,
                              "name":"2130",
                              "value":"2130"
                           },
                           {
                              "id":457,
                              "district_id":60,
                              "thana_id":410,
                              "name":"2120",
                              "value":"2120"
                           },
                           {
                              "id":458,
                              "district_id":60,
                              "thana_id":411,
                              "name":"2150",
                              "value":"2150"
                           },
                           {
                              "id":459,
                              "district_id":60,
                              "thana_id":412,
                              "name":"2100",
                              "value":"2100"
                           },
                           {
                              "id":460,
                              "district_id":61,
                              "thana_id":413,
                              "name":"6700",
                              "value":"6700"
                           },
                           {
                              "id":461,
                              "district_id":62,
                              "thana_id":414,
                              "name":"3030",
                              "value":"3030"
                           },
                           {
                              "id":462,
                              "district_id":62,
                              "thana_id":415,
                              "name":"3062",
                              "value":"3062"
                           },
                           {
                              "id":463,
                              "district_id":62,
                              "thana_id":416,
                              "name":"3063",
                              "value":"3063"
                           },
                           {
                              "id":464,
                              "district_id":62,
                              "thana_id":417,
                              "name":"3000",
                              "value":"3000"
                           },
                           {
                              "id":465,
                              "district_id":62,
                              "thana_id":418,
                              "name":"3010",
                              "value":"3010"
                           },
                           {
                              "id":466,
                              "district_id":62,
                              "thana_id":419,
                              "name":"3080",
                              "value":"3080"
                           },
                           {
                              "id":467,
                              "district_id":62,
                              "thana_id":420,
                              "name":"3060",
                              "value":"3060"
                           },
                           {
                              "id":468,
                              "district_id":62,
                              "thana_id":421,
                              "name":"3063",
                              "value":"3063"
                           },
                           {
                              "id":469,
                              "district_id":62,
                              "thana_id":422,
                              "name":"3040",
                              "value":"3040"
                           },
                           {
                              "id":470,
                              "district_id":62,
                              "thana_id":423,
                              "name":"3080",
                              "value":"3080"
                           },
                           {
                              "id":471,
                              "district_id":62,
                              "thana_id":424,
                              "name":"3010",
                              "value":"3010"
                           },
                           {
                              "id":472,
                              "district_id":63,
                              "thana_id":425,
                              "name":"3114",
                              "value":"3114"
                           },
                           {
                              "id":473,
                              "district_id":63,
                              "thana_id":425,
                              "name":"3107",
                              "value":"3107"
                           },
                           {
                              "id":474,
                              "district_id":63,
                              "thana_id":425,
                              "name":"3100",
                              "value":"3100"
                           },
                           {
                              "id":475,
                              "district_id":63,
                              "thana_id":426,
                              "name":"3116",
                              "value":"3116"
                           },
                           {
                              "id":476,
                              "district_id":63,
                              "thana_id":427,
                              "name":"3120",
                              "value":"3120"
                           },
                           {
                              "id":477,
                              "district_id":63,
                              "thana_id":428,
                              "name":"3156",
                              "value":"3156"
                           },
                           {
                              "id":478,
                              "district_id":63,
                              "thana_id":429,
                              "name":"3130",
                              "value":"3130"
                           },
                           {
                              "id":479,
                              "district_id":63,
                              "thana_id":430,
                              "name":"3160",
                              "value":"3160"
                           },
                           {
                              "id":480,
                              "district_id":63,
                              "thana_id":431,
                              "name":"3170",
                              "value":"3170"
                           },
                           {
                              "id":481,
                              "district_id":64,
                              "thana_id":432,
                              "name":"1950",
                              "value":"1950"
                           },
                           {
                              "id":482,
                              "district_id":64,
                              "thana_id":433,
                              "name":"1996",
                              "value":"1996"
                           },
                           {
                              "id":483,
                              "district_id":64,
                              "thana_id":434,
                              "name":"1910",
                              "value":"1910"
                           },
                           {
                              "id":484,
                              "district_id":64,
                              "thana_id":435,
                              "name":"1997",
                              "value":"1997"
                           },
                           {
                              "id":485,
                              "district_id":64,
                              "thana_id":436,
                              "name":"1920",
                              "value":"1920"
                           },
                           {
                              "id":486,
                              "district_id":64,
                              "thana_id":437,
                              "name":"1960",
                              "value":"1960"
                           },
                           {
                              "id":487,
                              "district_id":64,
                              "thana_id":438,
                              "name":"1936",
                              "value":"1936"
                           },
                           {
                              "id":488,
                              "district_id":64,
                              "thana_id":439,
                              "name":"1990",
                              "value":"1990"
                           },
                           {
                              "id":489,
                              "district_id":64,
                              "thana_id":440,
                              "name":"1970",
                              "value":"1970"
                           },
                           {
                              "id":490,
                              "district_id":64,
                              "thana_id":441,
                              "name":"1940",
                              "value":"1940"
                           },
                           {
                              "id":491,
                              "district_id":64,
                              "thana_id":442,
                              "name":"1980",
                              "value":"1980"
                           },
                           {
                              "id":492,
                              "district_id":64,
                              "thana_id":443,
                              "name":"1900",
                              "value":"1900"
                           },
                           {
                              "id":493,
                              "district_id":65,
                              "thana_id":444,
                              "name":"5100",
                              "value":"5100"
                           }
                        ],
                        "area_list":[
                           {
                              "id":1,
                              "postcode_id":1,
                              "name":"Rampal",
                              "value":"Rampal"
                           },
                           {
                              "id":2,
                              "postcode_id":2,
                              "name":"Morelganj",
                              "value":"Morelganj"
                           },
                           {
                              "id":3,
                              "postcode_id":4,
                              "name":"Mollarhat",
                              "value":"Mollarhat"
                           },
                           {
                              "id":4,
                              "postcode_id":5,
                              "name":"Kochua",
                              "value":"Kochua"
                           },
                           {
                              "id":5,
                              "postcode_id":8,
                              "name":"Bagerhat Sadar",
                              "value":"Bagerhat Sadar"
                           },
                           {
                              "id":6,
                              "postcode_id":9,
                              "name":"Bandarban City",
                              "value":"Bandarban City"
                           },
                           {
                              "id":7,
                              "postcode_id":10,
                              "name":"uzirpur",
                              "value":"uzirpur"
                           },
                           {
                              "id":8,
                              "postcode_id":11,
                              "name":"bakerganj",
                              "value":"bakerganj"
                           },
                           {
                              "id":9,
                              "postcode_id":12,
                              "name":"babuganj",
                              "value":"babuganj"
                           },
                           {
                              "id":10,
                              "postcode_id":13,
                              "name":"muladi",
                              "value":"muladi"
                           },
                           {
                              "id":11,
                              "postcode_id":14,
                              "name":"mehendiganj",
                              "value":"mehendiganj"
                           },
                           {
                              "id":12,
                              "postcode_id":15,
                              "name":"Barisal City Corporation",
                              "value":"Barisal City Corporation"
                           },
                           {
                              "id":13,
                              "postcode_id":15,
                              "name":"hizla",
                              "value":"hizla"
                           },
                           {
                              "id":14,
                              "postcode_id":16,
                              "name":"gouranadi",
                              "value":"gouranadi"
                           },
                           {
                              "id":15,
                              "postcode_id":17,
                              "name":"agailjhara",
                              "value":"agailjhara"
                           },
                           {
                              "id":16,
                              "postcode_id":18,
                              "name":"banaripara",
                              "value":"banaripara"
                           },
                           {
                              "id":17,
                              "postcode_id":19,
                              "name":"Bhola Sadar",
                              "value":"Bhola Sadar"
                           },
                           {
                              "id":18,
                              "postcode_id":20,
                              "name":"Shibgonj",
                              "value":"Shibgonj"
                           },
                           {
                              "id":19,
                              "postcode_id":23,
                              "name":"Dupchanchachia",
                              "value":"Dupchanchachia"
                           },
                           {
                              "id":20,
                              "postcode_id":24,
                              "name":"Adomdighi",
                              "value":"Adomdighi"
                           },
                           {
                              "id":21,
                              "postcode_id":25,
                              "name":"Dhunut",
                              "value":"Dhunut"
                           },
                           {
                              "id":22,
                              "postcode_id":26,
                              "name":"Kahalu",
                              "value":"Kahalu"
                           },
                           {
                              "id":23,
                              "postcode_id":26,
                              "name":"Sajahanpur",
                              "value":"Sajahanpur"
                           },
                           {
                              "id":24,
                              "postcode_id":27,
                              "name":"Sherpur",
                              "value":"Sherpur"
                           },
                           {
                              "id":25,
                              "postcode_id":29,
                              "name":"Bogura Sadar",
                              "value":"Bogura Sadar"
                           },
                           {
                              "id":26,
                              "postcode_id":30,
                              "name":"Patharghata",
                              "value":"Patharghata"
                           },
                           {
                              "id":27,
                              "postcode_id":31,
                              "name":"Betagi",
                              "value":"Betagi"
                           },
                           {
                              "id":28,
                              "postcode_id":31,
                              "name":"Taltali",
                              "value":"Taltali"
                           },
                           {
                              "id":29,
                              "postcode_id":32,
                              "name":"Bamna",
                              "value":"Bamna"
                           },
                           {
                              "id":30,
                              "postcode_id":33,
                              "name":"Amtali",
                              "value":"Amtali"
                           },
                           {
                              "id":31,
                              "postcode_id":34,
                              "name":"Barguna Sadar",
                              "value":"Barguna Sadar"
                           },
                           {
                              "id":32,
                              "postcode_id":35,
                              "name":"Brahmanbaria Sadar",
                              "value":"Brahmanbaria Sadar"
                           },
                           {
                              "id":33,
                              "postcode_id":36,
                              "name":"Bijoynagar",
                              "value":"Bijoynagar"
                           },
                           {
                              "id":34,
                              "postcode_id":36,
                              "name":"Nasirnagar",
                              "value":"Nasirnagar"
                           },
                           {
                              "id":35,
                              "postcode_id":37,
                              "name":"Ashuganj",
                              "value":"Ashuganj"
                           },
                           {
                              "id":36,
                              "postcode_id":38,
                              "name":"Banchharampur",
                              "value":"Banchharampur"
                           },
                           {
                              "id":37,
                              "postcode_id":39,
                              "name":"Sarail",
                              "value":"Sarail"
                           },
                           {
                              "id":38,
                              "postcode_id":40,
                              "name":"Kasba",
                              "value":"Kasba"
                           },
                           {
                              "id":39,
                              "postcode_id":41,
                              "name":"Kachua",
                              "value":"Kachua"
                           },
                           {
                              "id":40,
                              "postcode_id":44,
                              "name":"Haimchar",
                              "value":"Haimchar"
                           },
                           {
                              "id":41,
                              "postcode_id":45,
                              "name":"Faridganj",
                              "value":"Faridganj"
                           },
                           {
                              "id":42,
                              "postcode_id":46,
                              "name":"Shahrasti",
                              "value":"Shahrasti"
                           },
                           {
                              "id":43,
                              "postcode_id":47,
                              "name":"Chandpur City",
                              "value":"Chandpur City"
                           },
                           {
                              "id":44,
                              "postcode_id":49,
                              "name":"Sandwip",
                              "value":"Sandwip"
                           },
                           {
                              "id":45,
                              "postcode_id":50,
                              "name":"Fatikchhari",
                              "value":"Fatikchhari"
                           },
                           {
                              "id":46,
                              "postcode_id":52,
                              "name":"Rangunia",
                              "value":"Rangunia"
                           },
                           {
                              "id":47,
                              "postcode_id":53,
                              "name":"Bhujpur",
                              "value":"Bhujpur"
                           },
                           {
                              "id":48,
                              "postcode_id":54,
                              "name":"Patiya",
                              "value":"Patiya"
                           },
                           {
                              "id":49,
                              "postcode_id":55,
                              "name":"Chandanaish",
                              "value":"Chandanaish"
                           },
                           {
                              "id":50,
                              "postcode_id":56,
                              "name":"Boalkhali",
                              "value":"Boalkhali"
                           },
                           {
                              "id":51,
                              "postcode_id":57,
                              "name":"Boalkhali Upazila Sadar",
                              "value":"Boalkhali Upazila Sadar"
                           },
                           {
                              "id":52,
                              "postcode_id":57,
                              "name":"Karnaphuli",
                              "value":"Karnaphuli"
                           },
                           {
                              "id":53,
                              "postcode_id":58,
                              "name":"Banshkhali",
                              "value":"Banshkhali"
                           },
                           {
                              "id":54,
                              "postcode_id":59,
                              "name":"Anowara",
                              "value":"Anowara"
                           },
                           {
                              "id":55,
                              "postcode_id":60,
                              "name":"Satkania",
                              "value":"Satkania"
                           },
                           {
                              "id":56,
                              "postcode_id":61,
                              "name":"Raozan",
                              "value":"Raozan"
                           },
                           {
                              "id":57,
                              "postcode_id":62,
                              "name":"Chittagong University of Engineering & Technology (CUET)",
                              "value":"Chittagong University of Engineering & Technology (CUET)"
                           },
                           {
                              "id":58,
                              "postcode_id":62,
                              "name":"Hathazari Upazila Sadar",
                              "value":"Hathazari Upazila Sadar"
                           },
                           {
                              "id":59,
                              "postcode_id":63,
                              "name":"Patenga",
                              "value":"Patenga"
                           },
                           {
                              "id":60,
                              "postcode_id":63,
                              "name":"Potenga chittagong",
                              "value":"Potenga chittagong"
                           },
                           {
                              "id":61,
                              "postcode_id":64,
                              "name":"Cantonment",
                              "value":"Cantonment"
                           },
                           {
                              "id":62,
                              "postcode_id":64,
                              "name":"Cornel Hat (Chittagong)",
                              "value":"Cornel Hat (Chittagong)"
                           },
                           {
                              "id":63,
                              "postcode_id":65,
                              "name":"Sitakund",
                              "value":"Sitakund"
                           },
                           {
                              "id":64,
                              "postcode_id":66,
                              "name":"Satkania Upazila Sadar",
                              "value":"Satkania Upazila Sadar"
                           },
                           {
                              "id":65,
                              "postcode_id":67,
                              "name":"Raozan Upazila Sadar",
                              "value":"Raozan Upazila Sadar"
                           },
                           {
                              "id":66,
                              "postcode_id":68,
                              "name":"Rangunia Upazila Sadar",
                              "value":"Rangunia Upazila Sadar"
                           },
                           {
                              "id":67,
                              "postcode_id":69,
                              "name":"Patiya Upazila Sadar",
                              "value":"Patiya Upazila Sadar"
                           },
                           {
                              "id":68,
                              "postcode_id":70,
                              "name":"Mirsharai",
                              "value":"Mirsharai"
                           },
                           {
                              "id":69,
                              "postcode_id":71,
                              "name":"Lohagara Upazila Sadar",
                              "value":"Lohagara Upazila Sadar"
                           },
                           {
                              "id":70,
                              "postcode_id":72,
                              "name":"Chittagong University of Engineering & Technology (CUET)",
                              "value":"Chittagong University of Engineering & Technology (CUET)"
                           },
                           {
                              "id":71,
                              "postcode_id":72,
                              "name":"Hathazari Upazila Sadar",
                              "value":"Hathazari Upazila Sadar"
                           },
                           {
                              "id":72,
                              "postcode_id":73,
                              "name":"Fatikchhari Upazila Sadar",
                              "value":"Fatikchhari Upazila Sadar"
                           },
                           {
                              "id":73,
                              "postcode_id":74,
                              "name":"Chandanaish Upazila Sadar",
                              "value":"Chandanaish Upazila Sadar"
                           },
                           {
                              "id":74,
                              "postcode_id":75,
                              "name":"Boalkhali Upazila Sadar",
                              "value":"Boalkhali Upazila Sadar"
                           },
                           {
                              "id":75,
                              "postcode_id":75,
                              "name":"Karnaphuli",
                              "value":"Karnaphuli"
                           },
                           {
                              "id":76,
                              "postcode_id":76,
                              "name":"Banshkhali Upazila sadar",
                              "value":"Banshkhali Upazila sadar"
                           },
                           {
                              "id":77,
                              "postcode_id":115,
                              "name":"Keraniganj Upazila Sadar",
                              "value":"Keraniganj Upazila Sadar"
                           },
                           {
                              "id":78,
                              "postcode_id":116,
                              "name":"Foridabad",
                              "value":"Foridabad"
                           },
                           {
                              "id":79,
                              "postcode_id":116,
                              "name":"Gendaria",
                              "value":"Gendaria"
                           },
                           {
                              "id":80,
                              "postcode_id":116,
                              "name":"Lakshmibazar",
                              "value":"Lakshmibazar"
                           },
                           {
                              "id":81,
                              "postcode_id":116,
                              "name":"Shutrapur",
                              "value":"Shutrapur"
                           },
                           {
                              "id":82,
                              "postcode_id":117,
                              "name":"Demra",
                              "value":"Demra"
                           },
                           {
                              "id":83,
                              "postcode_id":118,
                              "name":"Chirirbandar",
                              "value":"Chirirbandar"
                           },
                           {
                              "id":84,
                              "postcode_id":119,
                              "name":"Ghoraghat",
                              "value":"Ghoraghat"
                           },
                           {
                              "id":85,
                              "postcode_id":120,
                              "name":"Dinajpur Sadar",
                              "value":"Dinajpur Sadar"
                           },
                           {
                              "id":86,
                              "postcode_id":120,
                              "name":"Kaharole",
                              "value":"Kaharole"
                           },
                           {
                              "id":87,
                              "postcode_id":121,
                              "name":"Birganj",
                              "value":"Birganj"
                           },
                           {
                              "id":88,
                              "postcode_id":122,
                              "name":"Biral",
                              "value":"Biral"
                           },
                           {
                              "id":89,
                              "postcode_id":123,
                              "name":"Hakimpur",
                              "value":"Hakimpur"
                           },
                           {
                              "id":90,
                              "postcode_id":124,
                              "name":"Khansama",
                              "value":"Khansama"
                           },
                           {
                              "id":91,
                              "postcode_id":125,
                              "name":"Parbatipur",
                              "value":"Parbatipur"
                           },
                           {
                              "id":92,
                              "postcode_id":126,
                              "name":"Birampur",
                              "value":"Birampur"
                           },
                           {
                              "id":93,
                              "postcode_id":127,
                              "name":"Bochaganj",
                              "value":"Bochaganj"
                           },
                           {
                              "id":94,
                              "postcode_id":128,
                              "name":"Dinajpur Sadar",
                              "value":"Dinajpur Sadar"
                           },
                           {
                              "id":95,
                              "postcode_id":128,
                              "name":"Kaharole",
                              "value":"Kaharole"
                           },
                           {
                              "id":96,
                              "postcode_id":129,
                              "name":"Alfadanga",
                              "value":"Alfadanga"
                           },
                           {
                              "id":97,
                              "postcode_id":130,
                              "name":"Faridpur (Sub)",
                              "value":"Faridpur (Sub)"
                           },
                           {
                              "id":98,
                              "postcode_id":131,
                              "name":"Faridpur Sadar",
                              "value":"Faridpur Sadar"
                           },
                           {
                              "id":99,
                              "postcode_id":132,
                              "name":"Sonagazi",
                              "value":"Sonagazi"
                           },
                           {
                              "id":100,
                              "postcode_id":133,
                              "name":"Fulgazi",
                              "value":"Fulgazi"
                           },
                           {
                              "id":101,
                              "postcode_id":134,
                              "name":"Porshuram",
                              "value":"Porshuram"
                           },
                           {
                              "id":102,
                              "postcode_id":137,
                              "name":"Feni Sadar",
                              "value":"Feni Sadar"
                           },
                           {
                              "id":103,
                              "postcode_id":138,
                              "name":"Sundarganj",
                              "value":"Sundarganj"
                           },
                           {
                              "id":104,
                              "postcode_id":139,
                              "name":"Saghatta",
                              "value":"Saghatta"
                           },
                           {
                              "id":105,
                              "postcode_id":141,
                              "name":"Palashbari",
                              "value":"Palashbari"
                           },
                           {
                              "id":106,
                              "postcode_id":142,
                              "name":"Sadullapur",
                              "value":"Sadullapur"
                           },
                           {
                              "id":107,
                              "postcode_id":143,
                              "name":"Gaibandha Sadar",
                              "value":"Gaibandha Sadar"
                           },
                           {
                              "id":108,
                              "postcode_id":144,
                              "name":"Rajendrapur",
                              "value":"Rajendrapur"
                           },
                           {
                              "id":109,
                              "postcode_id":145,
                              "name":"Bhawal",
                              "value":"Bhawal"
                           },
                           {
                              "id":110,
                              "postcode_id":145,
                              "name":"Gacha",
                              "value":"Gacha"
                           },
                           {
                              "id":111,
                              "postcode_id":145,
                              "name":"Mawna",
                              "value":"Mawna"
                           },
                           {
                              "id":112,
                              "postcode_id":146,
                              "name":"Pubail",
                              "value":"Pubail"
                           },
                           {
                              "id":113,
                              "postcode_id":147,
                              "name":"Kapasia",
                              "value":"Kapasia"
                           },
                           {
                              "id":114,
                              "postcode_id":149,
                              "name":"Kashimpur",
                              "value":"Kashimpur"
                           },
                           {
                              "id":115,
                              "postcode_id":158,
                              "name":"Gopalganj Sadar",
                              "value":"Gopalganj Sadar"
                           },
                           {
                              "id":116,
                              "postcode_id":159,
                              "name":"Habiganj Sadar",
                              "value":"Habiganj Sadar"
                           },
                           {
                              "id":117,
                              "postcode_id":166,
                              "name":"Noapara Sadar",
                              "value":"Noapara Sadar"
                           },
                           {
                              "id":118,
                              "postcode_id":167,
                              "name":"Benapole",
                              "value":"Benapole"
                           },
                           {
                              "id":119,
                              "postcode_id":168,
                              "name":"Sharsha Upazila Sadar",
                              "value":"Sharsha Upazila Sadar"
                           },
                           {
                              "id":120,
                              "postcode_id":169,
                              "name":"Jhikargacha Sadar",
                              "value":"Jhikargacha Sadar"
                           },
                           {
                              "id":121,
                              "postcode_id":170,
                              "name":"Chougachha upazila Sadar",
                              "value":"Chougachha upazila Sadar"
                           },
                           {
                              "id":122,
                              "postcode_id":171,
                              "name":"Bagherpara Upazila Sadar",
                              "value":"Bagherpara Upazila Sadar"
                           },
                           {
                              "id":123,
                              "postcode_id":172,
                              "name":"Keshabpur Upazilla",
                              "value":"Keshabpur Upazilla"
                           },
                           {
                              "id":124,
                              "postcode_id":173,
                              "name":"Abhaynagar Upazila Sadar",
                              "value":"Abhaynagar Upazila Sadar"
                           },
                           {
                              "id":125,
                              "postcode_id":174,
                              "name":"Manirampur Upazila Sadar",
                              "value":"Manirampur Upazila Sadar"
                           },
                           {
                              "id":126,
                              "postcode_id":175,
                              "name":"Jessore Sadar",
                              "value":"Jessore Sadar"
                           },
                           {
                              "id":127,
                              "postcode_id":176,
                              "name":"Jhenaidah Sadar",
                              "value":"Jhenaidah Sadar"
                           },
                           {
                              "id":128,
                              "postcode_id":181,
                              "name":"Joypurhat Sadar",
                              "value":"Joypurhat Sadar"
                           },
                           {
                              "id":129,
                              "postcode_id":182,
                              "name":"Guimara",
                              "value":"Guimara"
                           },
                           {
                              "id":130,
                              "postcode_id":182,
                              "name":"Khagrachori Sadar",
                              "value":"Khagrachori Sadar"
                           },
                           {
                              "id":131,
                              "postcode_id":182,
                              "name":"Ramgarh",
                              "value":"Ramgarh"
                           },
                           {
                              "id":132,
                              "postcode_id":183,
                              "name":"Guimara",
                              "value":"Guimara"
                           },
                           {
                              "id":133,
                              "postcode_id":183,
                              "name":"Khagrachori Sadar",
                              "value":"Khagrachori Sadar"
                           },
                           {
                              "id":134,
                              "postcode_id":183,
                              "name":"Ramgarh",
                              "value":"Ramgarh"
                           },
                           {
                              "id":135,
                              "postcode_id":184,
                              "name":"Panchhari",
                              "value":"Panchhari"
                           },
                           {
                              "id":136,
                              "postcode_id":185,
                              "name":"Manikchhari",
                              "value":"Manikchhari"
                           },
                           {
                              "id":137,
                              "postcode_id":186,
                              "name":"Mahalchhari",
                              "value":"Mahalchhari"
                           },
                           {
                              "id":138,
                              "postcode_id":187,
                              "name":"Lakshmichhari",
                              "value":"Lakshmichhari"
                           },
                           {
                              "id":139,
                              "postcode_id":188,
                              "name":"Matiranga",
                              "value":"Matiranga"
                           },
                           {
                              "id":140,
                              "postcode_id":189,
                              "name":"Dighinala",
                              "value":"Dighinala"
                           },
                           {
                              "id":141,
                              "postcode_id":190,
                              "name":"Guimara",
                              "value":"Guimara"
                           },
                           {
                              "id":142,
                              "postcode_id":190,
                              "name":"Khagrachori Sadar",
                              "value":"Khagrachori Sadar"
                           },
                           {
                              "id":143,
                              "postcode_id":190,
                              "name":"Ramgarh",
                              "value":"Ramgarh"
                           },
                           {
                              "id":144,
                              "postcode_id":191,
                              "name":"Khulna City",
                              "value":"Khulna City"
                           },
                           {
                              "id":145,
                              "postcode_id":191,
                              "name":"Shibbarir more",
                              "value":"Shibbarir more"
                           },
                           {
                              "id":146,
                              "postcode_id":194,
                              "name":"Khulna City",
                              "value":"Khulna City"
                           },
                           {
                              "id":147,
                              "postcode_id":194,
                              "name":"Shibbarir more",
                              "value":"Shibbarir more"
                           },
                           {
                              "id":148,
                              "postcode_id":199,
                              "name":"Khulna City",
                              "value":"Khulna City"
                           },
                           {
                              "id":149,
                              "postcode_id":199,
                              "name":"Shibbarir more",
                              "value":"Shibbarir more"
                           },
                           {
                              "id":150,
                              "postcode_id":200,
                              "name":"Khulna City",
                              "value":"Khulna City"
                           },
                           {
                              "id":151,
                              "postcode_id":200,
                              "name":"Shibbarir more",
                              "value":"Shibbarir more"
                           },
                           {
                              "id":152,
                              "postcode_id":202,
                              "name":"Khulna City",
                              "value":"Khulna City"
                           },
                           {
                              "id":153,
                              "postcode_id":202,
                              "name":"Shibbarir more",
                              "value":"Shibbarir more"
                           },
                           {
                              "id":154,
                              "postcode_id":203,
                              "name":"Itna",
                              "value":"Itna"
                           },
                           {
                              "id":155,
                              "postcode_id":204,
                              "name":"Hossainpur",
                              "value":"Hossainpur"
                           },
                           {
                              "id":156,
                              "postcode_id":205,
                              "name":"Bajitpur",
                              "value":"Bajitpur"
                           },
                           {
                              "id":157,
                              "postcode_id":206,
                              "name":"Austagram",
                              "value":"Austagram"
                           },
                           {
                              "id":158,
                              "postcode_id":207,
                              "name":"Karimganj",
                              "value":"Karimganj"
                           },
                           {
                              "id":159,
                              "postcode_id":208,
                              "name":"Nikli",
                              "value":"Nikli"
                           },
                           {
                              "id":160,
                              "postcode_id":209,
                              "name":"Katiadi",
                              "value":"Katiadi"
                           },
                           {
                              "id":161,
                              "postcode_id":210,
                              "name":"Kuliarchar",
                              "value":"Kuliarchar"
                           },
                           {
                              "id":162,
                              "postcode_id":211,
                              "name":"Pakundia",
                              "value":"Pakundia"
                           },
                           {
                              "id":163,
                              "postcode_id":212,
                              "name":"Tarail",
                              "value":"Tarail"
                           },
                           {
                              "id":164,
                              "postcode_id":213,
                              "name":"Mithamoin",
                              "value":"Mithamoin"
                           },
                           {
                              "id":165,
                              "postcode_id":214,
                              "name":"Bhairab Upazila Sadar",
                              "value":"Bhairab Upazila Sadar"
                           },
                           {
                              "id":166,
                              "postcode_id":214,
                              "name":"Kishorganj (Sub)",
                              "value":"Kishorganj (Sub)"
                           },
                           {
                              "id":167,
                              "postcode_id":215,
                              "name":"Bhairab Upazila Sadar",
                              "value":"Bhairab Upazila Sadar"
                           },
                           {
                              "id":168,
                              "postcode_id":215,
                              "name":"Kishorganj (Sub)",
                              "value":"Kishorganj (Sub)"
                           },
                           {
                              "id":169,
                              "postcode_id":216,
                              "name":"Kishoreganj Sadar",
                              "value":"Kishoreganj Sadar"
                           },
                           {
                              "id":170,
                              "postcode_id":220,
                              "name":"Kurigram Sadar",
                              "value":"Kurigram Sadar"
                           },
                           {
                              "id":171,
                              "postcode_id":227,
                              "name":"Char Rajibpur",
                              "value":"Char Rajibpur"
                           },
                           {
                              "id":172,
                              "postcode_id":228,
                              "name":"Kurigram Sadar",
                              "value":"Kurigram Sadar"
                           },
                           {
                              "id":173,
                              "postcode_id":229,
                              "name":"Bheramara",
                              "value":"Bheramara"
                           },
                           {
                              "id":174,
                              "postcode_id":230,
                              "name":"Khoksa",
                              "value":"Khoksa"
                           },
                           {
                              "id":175,
                              "postcode_id":232,
                              "name":"Kumarkhali",
                              "value":"Kumarkhali"
                           },
                           {
                              "id":176,
                              "postcode_id":233,
                              "name":"Kustia Sadar",
                              "value":"Kustia Sadar"
                           },
                           {
                              "id":177,
                              "postcode_id":234,
                              "name":"Ramgati upazila",
                              "value":"Ramgati upazila"
                           },
                           {
                              "id":178,
                              "postcode_id":235,
                              "name":"KamalNagar",
                              "value":"KamalNagar"
                           },
                           {
                              "id":179,
                              "postcode_id":236,
                              "name":"Ramgati upazila",
                              "value":"Ramgati upazila"
                           },
                           {
                              "id":180,
                              "postcode_id":237,
                              "name":"Raipur Upazila",
                              "value":"Raipur Upazila"
                           },
                           {
                              "id":181,
                              "postcode_id":238,
                              "name":"Ramgonj Upazila",
                              "value":"Ramgonj Upazila"
                           },
                           {
                              "id":182,
                              "postcode_id":239,
                              "name":"Lakhshmipur Sadar",
                              "value":"Lakhshmipur Sadar"
                           },
                           {
                              "id":183,
                              "postcode_id":240,
                              "name":"Patgram Upazila",
                              "value":"Patgram Upazila"
                           },
                           {
                              "id":184,
                              "postcode_id":241,
                              "name":"Kaliganj Upazila",
                              "value":"Kaliganj Upazila"
                           },
                           {
                              "id":185,
                              "postcode_id":242,
                              "name":"Hatibandha Upazila",
                              "value":"Hatibandha Upazila"
                           },
                           {
                              "id":186,
                              "postcode_id":243,
                              "name":"Aditmari Upazila",
                              "value":"Aditmari Upazila"
                           },
                           {
                              "id":187,
                              "postcode_id":244,
                              "name":"Lalmonirhat Sadar",
                              "value":"Lalmonirhat Sadar"
                           },
                           {
                              "id":188,
                              "postcode_id":245,
                              "name":"Bajitpur Union Digital Centre",
                              "value":"Bajitpur Union Digital Centre"
                           },
                           {
                              "id":189,
                              "postcode_id":245,
                              "name":"Madaripur Sadar",
                              "value":"Madaripur Sadar"
                           },
                           {
                              "id":190,
                              "postcode_id":246,
                              "name":"Bajitpur Union Digital Centre",
                              "value":"Bajitpur Union Digital Centre"
                           },
                           {
                              "id":191,
                              "postcode_id":246,
                              "name":"Madaripur Sadar",
                              "value":"Madaripur Sadar"
                           },
                           {
                              "id":192,
                              "postcode_id":248,
                              "name":"Shalikha",
                              "value":"Shalikha"
                           },
                           {
                              "id":193,
                              "postcode_id":249,
                              "name":"Magura Sador",
                              "value":"Magura Sador"
                           },
                           {
                              "id":194,
                              "postcode_id":255,
                              "name":"Manikganj Sadar",
                              "value":"Manikganj Sadar"
                           },
                           {
                              "id":195,
                              "postcode_id":257,
                              "name":"Meherpur Sadar",
                              "value":"Meherpur Sadar"
                           },
                           {
                              "id":196,
                              "postcode_id":259,
                              "name":"Kamalganj",
                              "value":"Kamalganj"
                           },
                           {
                              "id":197,
                              "postcode_id":260,
                              "name":"Juri",
                              "value":"Juri"
                           },
                           {
                              "id":198,
                              "postcode_id":261,
                              "name":"Rajnagar",
                              "value":"Rajnagar"
                           },
                           {
                              "id":199,
                              "postcode_id":262,
                              "name":"Barlekha",
                              "value":"Barlekha"
                           },
                           {
                              "id":200,
                              "postcode_id":263,
                              "name":"Kulaura",
                              "value":"Kulaura"
                           },
                           {
                              "id":201,
                              "postcode_id":264,
                              "name":"Sreemangal",
                              "value":"Sreemangal"
                           },
                           {
                              "id":202,
                              "postcode_id":265,
                              "name":"Moulvibazar Sadar",
                              "value":"Moulvibazar Sadar"
                           },
                           {
                              "id":203,
                              "postcode_id":266,
                              "name":"Gazaria",
                              "value":"Gazaria"
                           },
                           {
                              "id":204,
                              "postcode_id":267,
                              "name":"Tongibari",
                              "value":"Tongibari"
                           },
                           {
                              "id":205,
                              "postcode_id":268,
                              "name":"Sirajdikhan",
                              "value":"Sirajdikhan"
                           },
                           {
                              "id":206,
                              "postcode_id":269,
                              "name":"Sreenagar",
                              "value":"Sreenagar"
                           },
                           {
                              "id":207,
                              "postcode_id":270,
                              "name":"Lohajang",
                              "value":"Lohajang"
                           },
                           {
                              "id":208,
                              "postcode_id":271,
                              "name":"Sirajdikhan",
                              "value":"Sirajdikhan"
                           },
                           {
                              "id":209,
                              "postcode_id":272,
                              "name":"Munshiganj Sadar",
                              "value":"Munshiganj Sadar"
                           },
                           {
                              "id":210,
                              "postcode_id":273,
                              "name":"Mymenshing Sadar",
                              "value":"Mymenshing Sadar"
                           },
                           {
                              "id":211,
                              "postcode_id":284,
                              "name":"Kalia",
                              "value":"Kalia"
                           },
                           {
                              "id":212,
                              "postcode_id":285,
                              "name":"Lohagara",
                              "value":"Lohagara"
                           },
                           {
                              "id":213,
                              "postcode_id":286,
                              "name":"Narail Sadar",
                              "value":"Narail Sadar"
                           },
                           {
                              "id":214,
                              "postcode_id":287,
                              "name":"Modongonj",
                              "value":"Modongonj"
                           },
                           {
                              "id":215,
                              "postcode_id":288,
                              "name":"Adomjee",
                              "value":"Adomjee"
                           },
                           {
                              "id":216,
                              "postcode_id":289,
                              "name":"Baidderbazar",
                              "value":"Baidderbazar"
                           },
                           {
                              "id":217,
                              "postcode_id":290,
                              "name":"Siddhirgonj ",
                              "value":"Siddhirgonj "
                           },
                           {
                              "id":218,
                              "postcode_id":291,
                              "name":"Fatullah",
                              "value":"Fatullah"
                           },
                           {
                              "id":219,
                              "postcode_id":292,
                              "name":"Amalapara(24hr)",
                              "value":"Amalapara(24hr)"
                           },
                           {
                              "id":220,
                              "postcode_id":292,
                              "name":"Chasara(24hr)",
                              "value":"Chasara(24hr)"
                           },
                           {
                              "id":221,
                              "postcode_id":292,
                              "name":"Dewbogh(24hr)",
                              "value":"Dewbogh(24hr)"
                           },
                           {
                              "id":222,
                              "postcode_id":292,
                              "name":"Haziganj\/Patahntoli(24hr)",
                              "value":"Haziganj\/Patahntoli(24hr)"
                           },
                           {
                              "id":223,
                              "postcode_id":292,
                              "name":"Jamtola(24hr)",
                              "value":"Jamtola(24hr)"
                           },
                           {
                              "id":224,
                              "postcode_id":292,
                              "name":"Khanpur\/Hospital Road(24hr)",
                              "value":"Khanpur\/Hospital Road(24hr)"
                           },
                           {
                              "id":225,
                              "postcode_id":292,
                              "name":"Masdair\/Isdair(24hr)",
                              "value":"Masdair\/Isdair(24hr)"
                           },
                           {
                              "id":226,
                              "postcode_id":292,
                              "name":"Narayanganj Sadar(24hr)",
                              "value":"Narayanganj Sadar(24hr)"
                           },
                           {
                              "id":227,
                              "postcode_id":292,
                              "name":"Nitaiganj\/Tanbazar(24hr)",
                              "value":"Nitaiganj\/Tanbazar(24hr)"
                           },
                           {
                              "id":228,
                              "postcode_id":292,
                              "name":"Paikpara\/Baburail(24hr)",
                              "value":"Paikpara\/Baburail(24hr)"
                           },
                           {
                              "id":229,
                              "postcode_id":292,
                              "name":"Tolla(24hr)",
                              "value":"Tolla(24hr)"
                           },
                           {
                              "id":230,
                              "postcode_id":293,
                              "name":"Bulta",
                              "value":"Bulta"
                           },
                           {
                              "id":231,
                              "postcode_id":295,
                              "name":"Bulta",
                              "value":"Bulta"
                           },
                           {
                              "id":232,
                              "postcode_id":297,
                              "name":"Gopaldi",
                              "value":"Gopaldi"
                           },
                           {
                              "id":233,
                              "postcode_id":302,
                              "name":"Madhbdi",
                              "value":"Madhbdi"
                           },
                           {
                              "id":234,
                              "postcode_id":303,
                              "name":"Ghorashal",
                              "value":"Ghorashal"
                           },
                           {
                              "id":235,
                              "postcode_id":304,
                              "name":"Palash",
                              "value":"Palash"
                           },
                           {
                              "id":236,
                              "postcode_id":305,
                              "name":"Narsingdi Sadar",
                              "value":"Narsingdi Sadar"
                           },
                           {
                              "id":237,
                              "postcode_id":306,
                              "name":"Lalpur",
                              "value":"Lalpur"
                           },
                           {
                              "id":238,
                              "postcode_id":307,
                              "name":"Singra",
                              "value":"Singra"
                           },
                           {
                              "id":239,
                              "postcode_id":308,
                              "name":"Boraigram",
                              "value":"Boraigram"
                           },
                           {
                              "id":240,
                              "postcode_id":308,
                              "name":"Gurudaspur",
                              "value":"Gurudaspur"
                           },
                           {
                              "id":241,
                              "postcode_id":309,
                              "name":"Bagatipara",
                              "value":"Bagatipara"
                           },
                           {
                              "id":242,
                              "postcode_id":309,
                              "name":"Natore Sador",
                              "value":"Natore Sador"
                           },
                           {
                              "id":243,
                              "postcode_id":310,
                              "name":"Boraigram",
                              "value":"Boraigram"
                           },
                           {
                              "id":244,
                              "postcode_id":310,
                              "name":"Gurudaspur",
                              "value":"Gurudaspur"
                           },
                           {
                              "id":245,
                              "postcode_id":383,
                              "name":"Abujar bafari gali",
                              "value":"Abujar bafari gali"
                           },
                           {
                              "id":246,
                              "postcode_id":383,
                              "name":"Ansar Camp(Moghbazar)",
                              "value":"Ansar Camp(Moghbazar)"
                           },
                           {
                              "id":247,
                              "postcode_id":383,
                              "name":"Baily Road",
                              "value":"Baily Road"
                           },
                           {
                              "id":248,
                              "postcode_id":383,
                              "name":"Bata gali",
                              "value":"Bata gali"
                           },
                           {
                              "id":249,
                              "postcode_id":383,
                              "name":"BG Press",
                              "value":"BG Press"
                           },
                           {
                              "id":250,
                              "postcode_id":383,
                              "name":"Biam Auditorium",
                              "value":"Biam Auditorium"
                           },
                           {
                              "id":251,
                              "postcode_id":383,
                              "name":"Boro Moghbazar",
                              "value":"Boro Moghbazar"
                           },
                           {
                              "id":252,
                              "postcode_id":383,
                              "name":"Channel 24",
                              "value":"Channel 24"
                           },
                           {
                              "id":253,
                              "postcode_id":383,
                              "name":"Chowdhury Para",
                              "value":"Chowdhury Para"
                           },
                           {
                              "id":254,
                              "postcode_id":383,
                              "name":"Dillu road",
                              "value":"Dillu road"
                           },
                           {
                              "id":255,
                              "postcode_id":383,
                              "name":"Hazari bari",
                              "value":"Hazari bari"
                           },
                           {
                              "id":256,
                              "postcode_id":383,
                              "name":"Imam bag",
                              "value":"Imam bag"
                           },
                           {
                              "id":257,
                              "postcode_id":383,
                              "name":"Kamalapur",
                              "value":"Kamalapur"
                           },
                           {
                              "id":258,
                              "postcode_id":383,
                              "name":"Kazi office r gali",
                              "value":"Kazi office r gali"
                           },
                           {
                              "id":259,
                              "postcode_id":383,
                              "name":"Mailbag 1st line",
                              "value":"Mailbag 1st line"
                           },
                           {
                              "id":260,
                              "postcode_id":383,
                              "name":"Malibag Chowdhuripara",
                              "value":"Malibag Chowdhuripara"
                           },
                           {
                              "id":261,
                              "postcode_id":383,
                              "name":"Mintu Road",
                              "value":"Mintu Road"
                           },
                           {
                              "id":262,
                              "postcode_id":383,
                              "name":"Modhubag",
                              "value":"Modhubag"
                           },
                           {
                              "id":263,
                              "postcode_id":383,
                              "name":"Mogbazar",
                              "value":"Mogbazar"
                           },
                           {
                              "id":264,
                              "postcode_id":383,
                              "name":"Moghbazar",
                              "value":"Moghbazar"
                           },
                           {
                              "id":265,
                              "postcode_id":383,
                              "name":"Mouchak",
                              "value":"Mouchak"
                           },
                           {
                              "id":266,
                              "postcode_id":383,
                              "name":"Noyatola",
                              "value":"Noyatola"
                           },
                           {
                              "id":267,
                              "postcode_id":383,
                              "name":"Paglamajar gali",
                              "value":"Paglamajar gali"
                           },
                           {
                              "id":268,
                              "postcode_id":383,
                              "name":"Rajarbag",
                              "value":"Rajarbag"
                           },
                           {
                              "id":269,
                              "postcode_id":383,
                              "name":"Roma Century ",
                              "value":"Roma Century "
                           },
                           {
                              "id":270,
                              "postcode_id":383,
                              "name":"Santibag",
                              "value":"Santibag"
                           },
                           {
                              "id":271,
                              "postcode_id":383,
                              "name":"Shahidbag",
                              "value":"Shahidbag"
                           },
                           {
                              "id":272,
                              "postcode_id":383,
                              "name":"Shahjanpur",
                              "value":"Shahjanpur"
                           },
                           {
                              "id":273,
                              "postcode_id":383,
                              "name":"Shajahanpur",
                              "value":"Shajahanpur"
                           },
                           {
                              "id":274,
                              "postcode_id":383,
                              "name":"Shantinagar",
                              "value":"Shantinagar"
                           },
                           {
                              "id":275,
                              "postcode_id":383,
                              "name":"Sheron bag",
                              "value":"Sheron bag"
                           },
                           {
                              "id":276,
                              "postcode_id":383,
                              "name":"Shideshwari",
                              "value":"Shideshwari"
                           },
                           {
                              "id":277,
                              "postcode_id":383,
                              "name":"Siddiq master dhal",
                              "value":"Siddiq master dhal"
                           },
                           {
                              "id":278,
                              "postcode_id":383,
                              "name":"Sismohol",
                              "value":"Sismohol"
                           },
                           {
                              "id":279,
                              "postcode_id":383,
                              "name":"Wreless gate",
                              "value":"Wreless gate"
                           },
                           {
                              "id":280,
                              "postcode_id":384,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":281,
                              "postcode_id":384,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":282,
                              "postcode_id":384,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":283,
                              "postcode_id":384,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":284,
                              "postcode_id":384,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":285,
                              "postcode_id":384,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":286,
                              "postcode_id":384,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":287,
                              "postcode_id":384,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":288,
                              "postcode_id":384,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":289,
                              "postcode_id":384,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":290,
                              "postcode_id":384,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":291,
                              "postcode_id":384,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":292,
                              "postcode_id":384,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":293,
                              "postcode_id":384,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":294,
                              "postcode_id":384,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":295,
                              "postcode_id":384,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":296,
                              "postcode_id":384,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":297,
                              "postcode_id":384,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":298,
                              "postcode_id":384,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":299,
                              "postcode_id":384,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":300,
                              "postcode_id":384,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":301,
                              "postcode_id":384,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":302,
                              "postcode_id":384,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":303,
                              "postcode_id":384,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":304,
                              "postcode_id":384,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":305,
                              "postcode_id":384,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":306,
                              "postcode_id":384,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":307,
                              "postcode_id":384,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":308,
                              "postcode_id":384,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":309,
                              "postcode_id":384,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":310,
                              "postcode_id":384,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":311,
                              "postcode_id":384,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":312,
                              "postcode_id":384,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":313,
                              "postcode_id":384,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":314,
                              "postcode_id":384,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":315,
                              "postcode_id":384,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":316,
                              "postcode_id":384,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":317,
                              "postcode_id":384,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":318,
                              "postcode_id":384,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":319,
                              "postcode_id":384,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":320,
                              "postcode_id":384,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":321,
                              "postcode_id":384,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":322,
                              "postcode_id":384,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":323,
                              "postcode_id":384,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":324,
                              "postcode_id":384,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":325,
                              "postcode_id":384,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":326,
                              "postcode_id":384,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":327,
                              "postcode_id":384,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":328,
                              "postcode_id":384,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":329,
                              "postcode_id":384,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":330,
                              "postcode_id":384,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":331,
                              "postcode_id":384,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":332,
                              "postcode_id":384,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":333,
                              "postcode_id":384,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":334,
                              "postcode_id":385,
                              "name":"Fokirapool",
                              "value":"Fokirapool"
                           },
                           {
                              "id":335,
                              "postcode_id":385,
                              "name":"Gulistan",
                              "value":"Gulistan"
                           },
                           {
                              "id":336,
                              "postcode_id":385,
                              "name":"Kakrail",
                              "value":"Kakrail"
                           },
                           {
                              "id":337,
                              "postcode_id":385,
                              "name":"Paltan",
                              "value":"Paltan"
                           },
                           {
                              "id":338,
                              "postcode_id":386,
                              "name":"Fokirapool",
                              "value":"Fokirapool"
                           },
                           {
                              "id":339,
                              "postcode_id":386,
                              "name":"Gulistan",
                              "value":"Gulistan"
                           },
                           {
                              "id":340,
                              "postcode_id":386,
                              "name":"Kakrail",
                              "value":"Kakrail"
                           },
                           {
                              "id":341,
                              "postcode_id":386,
                              "name":"Paltan",
                              "value":"Paltan"
                           },
                           {
                              "id":342,
                              "postcode_id":387,
                              "name":"Jurain",
                              "value":"Jurain"
                           },
                           {
                              "id":343,
                              "postcode_id":387,
                              "name":"Postogola",
                              "value":"Postogola"
                           },
                           {
                              "id":344,
                              "postcode_id":387,
                              "name":"Shonir Akhra",
                              "value":"Shonir Akhra"
                           },
                           {
                              "id":345,
                              "postcode_id":388,
                              "name":"Golapbag",
                              "value":"Golapbag"
                           },
                           {
                              "id":346,
                              "postcode_id":388,
                              "name":"Gopibag",
                              "value":"Gopibag"
                           },
                           {
                              "id":347,
                              "postcode_id":388,
                              "name":"Narinda",
                              "value":"Narinda"
                           },
                           {
                              "id":348,
                              "postcode_id":388,
                              "name":"Tikatuli",
                              "value":"Tikatuli"
                           },
                           {
                              "id":349,
                              "postcode_id":388,
                              "name":"Wari",
                              "value":"Wari"
                           },
                           {
                              "id":350,
                              "postcode_id":389,
                              "name":"Jurain",
                              "value":"Jurain"
                           },
                           {
                              "id":351,
                              "postcode_id":389,
                              "name":"Postogola",
                              "value":"Postogola"
                           },
                           {
                              "id":352,
                              "postcode_id":389,
                              "name":"Shonir Akhra",
                              "value":"Shonir Akhra"
                           },
                           {
                              "id":353,
                              "postcode_id":390,
                              "name":"Bashabo",
                              "value":"Bashabo"
                           },
                           {
                              "id":354,
                              "postcode_id":390,
                              "name":"ManikNagar",
                              "value":"ManikNagar"
                           },
                           {
                              "id":355,
                              "postcode_id":390,
                              "name":"Mugdapara",
                              "value":"Mugdapara"
                           },
                           {
                              "id":356,
                              "postcode_id":390,
                              "name":"Nondipara",
                              "value":"Nondipara"
                           },
                           {
                              "id":357,
                              "postcode_id":391,
                              "name":"Bibirbagicha",
                              "value":"Bibirbagicha"
                           },
                           {
                              "id":358,
                              "postcode_id":391,
                              "name":"Jatrabari",
                              "value":"Jatrabari"
                           },
                           {
                              "id":359,
                              "postcode_id":391,
                              "name":"Kajla",
                              "value":"Kajla"
                           },
                           {
                              "id":360,
                              "postcode_id":392,
                              "name":"Bashabo",
                              "value":"Bashabo"
                           },
                           {
                              "id":361,
                              "postcode_id":392,
                              "name":"ManikNagar",
                              "value":"ManikNagar"
                           },
                           {
                              "id":362,
                              "postcode_id":392,
                              "name":"Mugdapara",
                              "value":"Mugdapara"
                           },
                           {
                              "id":363,
                              "postcode_id":392,
                              "name":"Nondipara",
                              "value":"Nondipara"
                           },
                           {
                              "id":364,
                              "postcode_id":393,
                              "name":"Banani",
                              "value":"Banani"
                           },
                           {
                              "id":365,
                              "postcode_id":393,
                              "name":"Banani (Chairman Bari)",
                              "value":"Banani (Chairman Bari)"
                           },
                           {
                              "id":366,
                              "postcode_id":393,
                              "name":"Banani 1",
                              "value":"Banani 1"
                           },
                           {
                              "id":367,
                              "postcode_id":393,
                              "name":"Banani 11",
                              "value":"Banani 11"
                           },
                           {
                              "id":368,
                              "postcode_id":393,
                              "name":"Banani 17",
                              "value":"Banani 17"
                           },
                           {
                              "id":369,
                              "postcode_id":393,
                              "name":"Banani 2",
                              "value":"Banani 2"
                           },
                           {
                              "id":370,
                              "postcode_id":393,
                              "name":"Banani 21",
                              "value":"Banani 21"
                           },
                           {
                              "id":371,
                              "postcode_id":393,
                              "name":"Banani 23",
                              "value":"Banani 23"
                           },
                           {
                              "id":372,
                              "postcode_id":393,
                              "name":"Banani 27",
                              "value":"Banani 27"
                           },
                           {
                              "id":373,
                              "postcode_id":393,
                              "name":"Banani 8",
                              "value":"Banani 8"
                           },
                           {
                              "id":374,
                              "postcode_id":393,
                              "name":"Banani chairman Bari",
                              "value":"Banani chairman Bari"
                           },
                           {
                              "id":375,
                              "postcode_id":393,
                              "name":"Dokkhin para",
                              "value":"Dokkhin para"
                           },
                           {
                              "id":376,
                              "postcode_id":393,
                              "name":"Graveyard road",
                              "value":"Graveyard road"
                           },
                           {
                              "id":377,
                              "postcode_id":393,
                              "name":"Kemal Ataturk avenue",
                              "value":"Kemal Ataturk avenue"
                           },
                           {
                              "id":378,
                              "postcode_id":393,
                              "name":"Korail Bosti",
                              "value":"Korail Bosti"
                           },
                           {
                              "id":379,
                              "postcode_id":393,
                              "name":"Maasranga television",
                              "value":"Maasranga television"
                           },
                           {
                              "id":380,
                              "postcode_id":393,
                              "name":"Navy headquarters",
                              "value":"Navy headquarters"
                           },
                           {
                              "id":381,
                              "postcode_id":393,
                              "name":"Radisson water Blu Hotel",
                              "value":"Radisson water Blu Hotel"
                           },
                           {
                              "id":382,
                              "postcode_id":393,
                              "name":"Shanti Niketon",
                              "value":"Shanti Niketon"
                           },
                           {
                              "id":383,
                              "postcode_id":393,
                              "name":"Shoinik Club",
                              "value":"Shoinik Club"
                           },
                           {
                              "id":384,
                              "postcode_id":393,
                              "name":"Soinik club",
                              "value":"Soinik club"
                           },
                           {
                              "id":385,
                              "postcode_id":393,
                              "name":"T&T colony",
                              "value":"T&T colony"
                           },
                           {
                              "id":386,
                              "postcode_id":394,
                              "name":"Abdullah Bag",
                              "value":"Abdullah Bag"
                           },
                           {
                              "id":387,
                              "postcode_id":394,
                              "name":"Adorsho Nagor",
                              "value":"Adorsho Nagor"
                           },
                           {
                              "id":388,
                              "postcode_id":394,
                              "name":"Agora",
                              "value":"Agora"
                           },
                           {
                              "id":389,
                              "postcode_id":394,
                              "name":"Apollo Hospital",
                              "value":"Apollo Hospital"
                           },
                           {
                              "id":390,
                              "postcode_id":394,
                              "name":"Ashalota, Bonolota",
                              "value":"Ashalota, Bonolota"
                           },
                           {
                              "id":391,
                              "postcode_id":394,
                              "name":"Aziz Sarani",
                              "value":"Aziz Sarani"
                           },
                           {
                              "id":392,
                              "postcode_id":394,
                              "name":"Badda",
                              "value":"Badda"
                           },
                           {
                              "id":393,
                              "postcode_id":394,
                              "name":"Baridhara",
                              "value":"Baridhara"
                           },
                           {
                              "id":394,
                              "postcode_id":394,
                              "name":"Baridhara Block-J",
                              "value":"Baridhara Block-J"
                           },
                           {
                              "id":395,
                              "postcode_id":394,
                              "name":"Baridhara DOHS",
                              "value":"Baridhara DOHS"
                           },
                           {
                              "id":396,
                              "postcode_id":394,
                              "name":"Bashtola",
                              "value":"Bashtola"
                           },
                           {
                              "id":397,
                              "postcode_id":394,
                              "name":"Bashundhara 300ft",
                              "value":"Bashundhara 300ft"
                           },
                           {
                              "id":398,
                              "postcode_id":394,
                              "name":"Bashundhara Block  A to L",
                              "value":"Bashundhara Block  A to L"
                           },
                           {
                              "id":399,
                              "postcode_id":394,
                              "name":"Bashundhara RA",
                              "value":"Bashundhara RA"
                           },
                           {
                              "id":400,
                              "postcode_id":394,
                              "name":"Coca-cola",
                              "value":"Coca-cola"
                           },
                           {
                              "id":401,
                              "postcode_id":394,
                              "name":"Comilla Para",
                              "value":"Comilla Para"
                           },
                           {
                              "id":402,
                              "postcode_id":394,
                              "name":"Dalibari Kachabazar",
                              "value":"Dalibari Kachabazar"
                           },
                           {
                              "id":403,
                              "postcode_id":394,
                              "name":"Diplomatic Zone",
                              "value":"Diplomatic Zone"
                           },
                           {
                              "id":404,
                              "postcode_id":394,
                              "name":"Fasertake",
                              "value":"Fasertake"
                           },
                           {
                              "id":405,
                              "postcode_id":394,
                              "name":"GM Bari",
                              "value":"GM Bari"
                           },
                           {
                              "id":406,
                              "postcode_id":394,
                              "name":"Gopipara",
                              "value":"Gopipara"
                           },
                           {
                              "id":407,
                              "postcode_id":394,
                              "name":"Gudara ghat",
                              "value":"Gudara ghat"
                           },
                           {
                              "id":408,
                              "postcode_id":394,
                              "name":"Gulshan 1",
                              "value":"Gulshan 1"
                           },
                           {
                              "id":409,
                              "postcode_id":394,
                              "name":"Gulshan 2",
                              "value":"Gulshan 2"
                           },
                           {
                              "id":410,
                              "postcode_id":394,
                              "name":"Gulshan Arong",
                              "value":"Gulshan Arong"
                           },
                           {
                              "id":411,
                              "postcode_id":394,
                              "name":"Gulshan Avenue",
                              "value":"Gulshan Avenue"
                           },
                           {
                              "id":412,
                              "postcode_id":394,
                              "name":"Gulshan-1",
                              "value":"Gulshan-1"
                           },
                           {
                              "id":413,
                              "postcode_id":394,
                              "name":"Gulshan-2",
                              "value":"Gulshan-2"
                           },
                           {
                              "id":414,
                              "postcode_id":394,
                              "name":"Gupi para",
                              "value":"Gupi para"
                           },
                           {
                              "id":415,
                              "postcode_id":394,
                              "name":"Jagonnath Pur",
                              "value":"Jagonnath Pur"
                           },
                           {
                              "id":416,
                              "postcode_id":394,
                              "name":"Jamuna future Park",
                              "value":"Jamuna future Park"
                           },
                           {
                              "id":417,
                              "postcode_id":394,
                              "name":"Jourshara and Lichu Bagan",
                              "value":"Jourshara and Lichu Bagan"
                           },
                           {
                              "id":418,
                              "postcode_id":394,
                              "name":"Kalachad pur and Norda",
                              "value":"Kalachad pur and Norda"
                           },
                           {
                              "id":419,
                              "postcode_id":394,
                              "name":"Kalachandpur",
                              "value":"Kalachandpur"
                           },
                           {
                              "id":420,
                              "postcode_id":394,
                              "name":"Khilbarir take",
                              "value":"Khilbarir take"
                           },
                           {
                              "id":421,
                              "postcode_id":394,
                              "name":"Kuril ",
                              "value":"Kuril "
                           },
                           {
                              "id":422,
                              "postcode_id":394,
                              "name":"Kuril Bisso Road",
                              "value":"Kuril Bisso Road"
                           },
                           {
                              "id":423,
                              "postcode_id":394,
                              "name":"Kuril Chaurasta",
                              "value":"Kuril Chaurasta"
                           },
                           {
                              "id":424,
                              "postcode_id":394,
                              "name":"Kuril Ghatpar",
                              "value":"Kuril Ghatpar"
                           },
                           {
                              "id":425,
                              "postcode_id":394,
                              "name":"Link Road",
                              "value":"Link Road"
                           },
                           {
                              "id":426,
                              "postcode_id":394,
                              "name":"Marul Badda",
                              "value":"Marul Badda"
                           },
                           {
                              "id":427,
                              "postcode_id":394,
                              "name":"Middle Badda",
                              "value":"Middle Badda"
                           },
                           {
                              "id":428,
                              "postcode_id":394,
                              "name":"Moinar bag",
                              "value":"Moinar bag"
                           },
                           {
                              "id":429,
                              "postcode_id":394,
                              "name":"Norda",
                              "value":"Norda"
                           },
                           {
                              "id":430,
                              "postcode_id":394,
                              "name":"North Badda",
                              "value":"North Badda"
                           },
                           {
                              "id":431,
                              "postcode_id":394,
                              "name":"Notun Bazar",
                              "value":"Notun Bazar"
                           },
                           {
                              "id":432,
                              "postcode_id":394,
                              "name":"Nurerchala",
                              "value":"Nurerchala"
                           },
                           {
                              "id":433,
                              "postcode_id":394,
                              "name":"Pakistan embassy",
                              "value":"Pakistan embassy"
                           },
                           {
                              "id":434,
                              "postcode_id":394,
                              "name":"Police plaza",
                              "value":"Police plaza"
                           },
                           {
                              "id":435,
                              "postcode_id":394,
                              "name":"Post office road",
                              "value":"Post office road"
                           },
                           {
                              "id":436,
                              "postcode_id":394,
                              "name":"Purba Anchol Road",
                              "value":"Purba Anchol Road"
                           },
                           {
                              "id":437,
                              "postcode_id":394,
                              "name":"Sayed nagor",
                              "value":"Sayed nagor"
                           },
                           {
                              "id":438,
                              "postcode_id":394,
                              "name":"Shadhinota sharoni",
                              "value":"Shadhinota sharoni"
                           },
                           {
                              "id":439,
                              "postcode_id":394,
                              "name":"Shahjadpur",
                              "value":"Shahjadpur"
                           },
                           {
                              "id":440,
                              "postcode_id":394,
                              "name":"Shajadpur East",
                              "value":"Shajadpur East"
                           },
                           {
                              "id":441,
                              "postcode_id":394,
                              "name":"Shatar Kul",
                              "value":"Shatar Kul"
                           },
                           {
                              "id":442,
                              "postcode_id":394,
                              "name":"Shatarkul",
                              "value":"Shatarkul"
                           },
                           {
                              "id":443,
                              "postcode_id":394,
                              "name":"Shubastu najor velly",
                              "value":"Shubastu najor velly"
                           },
                           {
                              "id":444,
                              "postcode_id":394,
                              "name":"Soilmaid",
                              "value":"Soilmaid"
                           },
                           {
                              "id":445,
                              "postcode_id":394,
                              "name":"South Badda",
                              "value":"South Badda"
                           },
                           {
                              "id":446,
                              "postcode_id":394,
                              "name":"Ulon",
                              "value":"Ulon"
                           },
                           {
                              "id":447,
                              "postcode_id":394,
                              "name":"United hospital ",
                              "value":"United hospital "
                           },
                           {
                              "id":448,
                              "postcode_id":394,
                              "name":"Vatara",
                              "value":"Vatara"
                           },
                           {
                              "id":449,
                              "postcode_id":395,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":450,
                              "postcode_id":395,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":451,
                              "postcode_id":395,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":452,
                              "postcode_id":395,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":453,
                              "postcode_id":395,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":454,
                              "postcode_id":395,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":455,
                              "postcode_id":395,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":456,
                              "postcode_id":395,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":457,
                              "postcode_id":395,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":458,
                              "postcode_id":395,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":459,
                              "postcode_id":395,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":460,
                              "postcode_id":395,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":461,
                              "postcode_id":395,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":462,
                              "postcode_id":395,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":463,
                              "postcode_id":395,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":464,
                              "postcode_id":395,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":465,
                              "postcode_id":395,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":466,
                              "postcode_id":395,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":467,
                              "postcode_id":395,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":468,
                              "postcode_id":395,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":469,
                              "postcode_id":395,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":470,
                              "postcode_id":395,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":471,
                              "postcode_id":395,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":472,
                              "postcode_id":395,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":473,
                              "postcode_id":395,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":474,
                              "postcode_id":395,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":475,
                              "postcode_id":395,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":476,
                              "postcode_id":395,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":477,
                              "postcode_id":395,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":478,
                              "postcode_id":395,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":479,
                              "postcode_id":395,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":480,
                              "postcode_id":395,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":481,
                              "postcode_id":395,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":482,
                              "postcode_id":395,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":483,
                              "postcode_id":395,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":484,
                              "postcode_id":395,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":485,
                              "postcode_id":395,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":486,
                              "postcode_id":395,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":487,
                              "postcode_id":395,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":488,
                              "postcode_id":395,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":489,
                              "postcode_id":395,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":490,
                              "postcode_id":395,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":491,
                              "postcode_id":395,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":492,
                              "postcode_id":395,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":493,
                              "postcode_id":395,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":494,
                              "postcode_id":395,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":495,
                              "postcode_id":395,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":496,
                              "postcode_id":395,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":497,
                              "postcode_id":395,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":498,
                              "postcode_id":395,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":499,
                              "postcode_id":395,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":500,
                              "postcode_id":395,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":501,
                              "postcode_id":395,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":502,
                              "postcode_id":395,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":503,
                              "postcode_id":396,
                              "name":"Abdullah Bag",
                              "value":"Abdullah Bag"
                           },
                           {
                              "id":504,
                              "postcode_id":396,
                              "name":"Adorsho Nagor",
                              "value":"Adorsho Nagor"
                           },
                           {
                              "id":505,
                              "postcode_id":396,
                              "name":"Agora",
                              "value":"Agora"
                           },
                           {
                              "id":506,
                              "postcode_id":396,
                              "name":"Apollo Hospital",
                              "value":"Apollo Hospital"
                           },
                           {
                              "id":507,
                              "postcode_id":396,
                              "name":"Ashalota, Bonolota",
                              "value":"Ashalota, Bonolota"
                           },
                           {
                              "id":508,
                              "postcode_id":396,
                              "name":"Aziz Sarani",
                              "value":"Aziz Sarani"
                           },
                           {
                              "id":509,
                              "postcode_id":396,
                              "name":"Badda",
                              "value":"Badda"
                           },
                           {
                              "id":510,
                              "postcode_id":396,
                              "name":"Baridhara",
                              "value":"Baridhara"
                           },
                           {
                              "id":511,
                              "postcode_id":396,
                              "name":"Baridhara Block-J",
                              "value":"Baridhara Block-J"
                           },
                           {
                              "id":512,
                              "postcode_id":396,
                              "name":"Baridhara DOHS",
                              "value":"Baridhara DOHS"
                           },
                           {
                              "id":513,
                              "postcode_id":396,
                              "name":"Bashtola",
                              "value":"Bashtola"
                           },
                           {
                              "id":514,
                              "postcode_id":396,
                              "name":"Bashundhara 300ft",
                              "value":"Bashundhara 300ft"
                           },
                           {
                              "id":515,
                              "postcode_id":396,
                              "name":"Bashundhara Block  A to L",
                              "value":"Bashundhara Block  A to L"
                           },
                           {
                              "id":516,
                              "postcode_id":396,
                              "name":"Bashundhara RA",
                              "value":"Bashundhara RA"
                           },
                           {
                              "id":517,
                              "postcode_id":396,
                              "name":"Coca-cola",
                              "value":"Coca-cola"
                           },
                           {
                              "id":518,
                              "postcode_id":396,
                              "name":"Comilla Para",
                              "value":"Comilla Para"
                           },
                           {
                              "id":519,
                              "postcode_id":396,
                              "name":"Dalibari Kachabazar",
                              "value":"Dalibari Kachabazar"
                           },
                           {
                              "id":520,
                              "postcode_id":396,
                              "name":"Diplomatic Zone",
                              "value":"Diplomatic Zone"
                           },
                           {
                              "id":521,
                              "postcode_id":396,
                              "name":"Fasertake",
                              "value":"Fasertake"
                           },
                           {
                              "id":522,
                              "postcode_id":396,
                              "name":"GM Bari",
                              "value":"GM Bari"
                           },
                           {
                              "id":523,
                              "postcode_id":396,
                              "name":"Gopipara",
                              "value":"Gopipara"
                           },
                           {
                              "id":524,
                              "postcode_id":396,
                              "name":"Gudara ghat",
                              "value":"Gudara ghat"
                           },
                           {
                              "id":525,
                              "postcode_id":396,
                              "name":"Gulshan 1",
                              "value":"Gulshan 1"
                           },
                           {
                              "id":526,
                              "postcode_id":396,
                              "name":"Gulshan 2",
                              "value":"Gulshan 2"
                           },
                           {
                              "id":527,
                              "postcode_id":396,
                              "name":"Gulshan Arong",
                              "value":"Gulshan Arong"
                           },
                           {
                              "id":528,
                              "postcode_id":396,
                              "name":"Gulshan Avenue",
                              "value":"Gulshan Avenue"
                           },
                           {
                              "id":529,
                              "postcode_id":396,
                              "name":"Gulshan-1",
                              "value":"Gulshan-1"
                           },
                           {
                              "id":530,
                              "postcode_id":396,
                              "name":"Gulshan-2",
                              "value":"Gulshan-2"
                           },
                           {
                              "id":531,
                              "postcode_id":396,
                              "name":"Gupi para",
                              "value":"Gupi para"
                           },
                           {
                              "id":532,
                              "postcode_id":396,
                              "name":"Jagonnath Pur",
                              "value":"Jagonnath Pur"
                           },
                           {
                              "id":533,
                              "postcode_id":396,
                              "name":"Jamuna future Park",
                              "value":"Jamuna future Park"
                           },
                           {
                              "id":534,
                              "postcode_id":396,
                              "name":"Jourshara and Lichu Bagan",
                              "value":"Jourshara and Lichu Bagan"
                           },
                           {
                              "id":535,
                              "postcode_id":396,
                              "name":"Kalachad pur and Norda",
                              "value":"Kalachad pur and Norda"
                           },
                           {
                              "id":536,
                              "postcode_id":396,
                              "name":"Kalachandpur",
                              "value":"Kalachandpur"
                           },
                           {
                              "id":537,
                              "postcode_id":396,
                              "name":"Khilbarir take",
                              "value":"Khilbarir take"
                           },
                           {
                              "id":538,
                              "postcode_id":396,
                              "name":"Kuril ",
                              "value":"Kuril "
                           },
                           {
                              "id":539,
                              "postcode_id":396,
                              "name":"Kuril Bisso Road",
                              "value":"Kuril Bisso Road"
                           },
                           {
                              "id":540,
                              "postcode_id":396,
                              "name":"Kuril Chaurasta",
                              "value":"Kuril Chaurasta"
                           },
                           {
                              "id":541,
                              "postcode_id":396,
                              "name":"Kuril Ghatpar",
                              "value":"Kuril Ghatpar"
                           },
                           {
                              "id":542,
                              "postcode_id":396,
                              "name":"Link Road",
                              "value":"Link Road"
                           },
                           {
                              "id":543,
                              "postcode_id":396,
                              "name":"Marul Badda",
                              "value":"Marul Badda"
                           },
                           {
                              "id":544,
                              "postcode_id":396,
                              "name":"Middle Badda",
                              "value":"Middle Badda"
                           },
                           {
                              "id":545,
                              "postcode_id":396,
                              "name":"Moinar bag",
                              "value":"Moinar bag"
                           },
                           {
                              "id":546,
                              "postcode_id":396,
                              "name":"Norda",
                              "value":"Norda"
                           },
                           {
                              "id":547,
                              "postcode_id":396,
                              "name":"North Badda",
                              "value":"North Badda"
                           },
                           {
                              "id":548,
                              "postcode_id":396,
                              "name":"Notun Bazar",
                              "value":"Notun Bazar"
                           },
                           {
                              "id":549,
                              "postcode_id":396,
                              "name":"Nurerchala",
                              "value":"Nurerchala"
                           },
                           {
                              "id":550,
                              "postcode_id":396,
                              "name":"Pakistan embassy",
                              "value":"Pakistan embassy"
                           },
                           {
                              "id":551,
                              "postcode_id":396,
                              "name":"Police plaza",
                              "value":"Police plaza"
                           },
                           {
                              "id":552,
                              "postcode_id":396,
                              "name":"Post office road",
                              "value":"Post office road"
                           },
                           {
                              "id":553,
                              "postcode_id":396,
                              "name":"Purba Anchol Road",
                              "value":"Purba Anchol Road"
                           },
                           {
                              "id":554,
                              "postcode_id":396,
                              "name":"Sayed nagor",
                              "value":"Sayed nagor"
                           },
                           {
                              "id":555,
                              "postcode_id":396,
                              "name":"Shadhinota sharoni",
                              "value":"Shadhinota sharoni"
                           },
                           {
                              "id":556,
                              "postcode_id":396,
                              "name":"Shahjadpur",
                              "value":"Shahjadpur"
                           },
                           {
                              "id":557,
                              "postcode_id":396,
                              "name":"Shajadpur East",
                              "value":"Shajadpur East"
                           },
                           {
                              "id":558,
                              "postcode_id":396,
                              "name":"Shatar Kul",
                              "value":"Shatar Kul"
                           },
                           {
                              "id":559,
                              "postcode_id":396,
                              "name":"Shatarkul",
                              "value":"Shatarkul"
                           },
                           {
                              "id":560,
                              "postcode_id":396,
                              "name":"Shubastu najor velly",
                              "value":"Shubastu najor velly"
                           },
                           {
                              "id":561,
                              "postcode_id":396,
                              "name":"Soilmaid",
                              "value":"Soilmaid"
                           },
                           {
                              "id":562,
                              "postcode_id":396,
                              "name":"South Badda",
                              "value":"South Badda"
                           },
                           {
                              "id":563,
                              "postcode_id":396,
                              "name":"Ulon",
                              "value":"Ulon"
                           },
                           {
                              "id":564,
                              "postcode_id":396,
                              "name":"United hospital ",
                              "value":"United hospital "
                           },
                           {
                              "id":565,
                              "postcode_id":396,
                              "name":"Vatara",
                              "value":"Vatara"
                           },
                           {
                              "id":566,
                              "postcode_id":397,
                              "name":"Azimpur",
                              "value":"Azimpur"
                           },
                           {
                              "id":567,
                              "postcode_id":397,
                              "name":"Dhaka University",
                              "value":"Dhaka University"
                           },
                           {
                              "id":568,
                              "postcode_id":397,
                              "name":"Dhanmondi 1",
                              "value":"Dhanmondi 1"
                           },
                           {
                              "id":569,
                              "postcode_id":397,
                              "name":"Dhanmondi 14",
                              "value":"Dhanmondi 14"
                           },
                           {
                              "id":570,
                              "postcode_id":397,
                              "name":"Dhanmondi 1A",
                              "value":"Dhanmondi 1A"
                           },
                           {
                              "id":571,
                              "postcode_id":397,
                              "name":"Dhanmondi 2",
                              "value":"Dhanmondi 2"
                           },
                           {
                              "id":572,
                              "postcode_id":397,
                              "name":"Dhanmondi 2A",
                              "value":"Dhanmondi 2A"
                           },
                           {
                              "id":573,
                              "postcode_id":397,
                              "name":"Elephant Road",
                              "value":"Elephant Road"
                           },
                           {
                              "id":574,
                              "postcode_id":398,
                              "name":"Azimpur",
                              "value":"Azimpur"
                           },
                           {
                              "id":575,
                              "postcode_id":398,
                              "name":"Dhaka University",
                              "value":"Dhaka University"
                           },
                           {
                              "id":576,
                              "postcode_id":398,
                              "name":"Dhanmondi 1",
                              "value":"Dhanmondi 1"
                           },
                           {
                              "id":577,
                              "postcode_id":398,
                              "name":"Dhanmondi 14",
                              "value":"Dhanmondi 14"
                           },
                           {
                              "id":578,
                              "postcode_id":398,
                              "name":"Dhanmondi 1A",
                              "value":"Dhanmondi 1A"
                           },
                           {
                              "id":579,
                              "postcode_id":398,
                              "name":"Dhanmondi 2",
                              "value":"Dhanmondi 2"
                           },
                           {
                              "id":580,
                              "postcode_id":398,
                              "name":"Dhanmondi 2A",
                              "value":"Dhanmondi 2A"
                           },
                           {
                              "id":581,
                              "postcode_id":398,
                              "name":"Elephant Road",
                              "value":"Elephant Road"
                           },
                           {
                              "id":582,
                              "postcode_id":399,
                              "name":"Asad Gate",
                              "value":"Asad Gate"
                           },
                           {
                              "id":583,
                              "postcode_id":399,
                              "name":"Shonargoan",
                              "value":"Shonargoan"
                           },
                           {
                              "id":584,
                              "postcode_id":399,
                              "name":"Tejturi Bazar",
                              "value":"Tejturi Bazar"
                           },
                           {
                              "id":585,
                              "postcode_id":400,
                              "name":"Dhanmondi 10A",
                              "value":"Dhanmondi 10A"
                           },
                           {
                              "id":586,
                              "postcode_id":400,
                              "name":"Dhanmondi 11",
                              "value":"Dhanmondi 11"
                           },
                           {
                              "id":587,
                              "postcode_id":400,
                              "name":"Dhanmondi 11A",
                              "value":"Dhanmondi 11A"
                           },
                           {
                              "id":588,
                              "postcode_id":400,
                              "name":"Dhanmondi 12A",
                              "value":"Dhanmondi 12A"
                           },
                           {
                              "id":589,
                              "postcode_id":400,
                              "name":"Dhanmondi 15",
                              "value":"Dhanmondi 15"
                           },
                           {
                              "id":590,
                              "postcode_id":400,
                              "name":"Dhanmondi 27",
                              "value":"Dhanmondi 27"
                           },
                           {
                              "id":591,
                              "postcode_id":400,
                              "name":"Dhanmondi 28",
                              "value":"Dhanmondi 28"
                           },
                           {
                              "id":592,
                              "postcode_id":400,
                              "name":"Dhanmondi 3",
                              "value":"Dhanmondi 3"
                           },
                           {
                              "id":593,
                              "postcode_id":400,
                              "name":"Dhanmondi 32",
                              "value":"Dhanmondi 32"
                           },
                           {
                              "id":594,
                              "postcode_id":400,
                              "name":"Dhanmondi 3A",
                              "value":"Dhanmondi 3A"
                           },
                           {
                              "id":595,
                              "postcode_id":400,
                              "name":"Dhanmondi 4",
                              "value":"Dhanmondi 4"
                           },
                           {
                              "id":596,
                              "postcode_id":400,
                              "name":"Dhanmondi 4A",
                              "value":"Dhanmondi 4A"
                           },
                           {
                              "id":597,
                              "postcode_id":400,
                              "name":"Dhanmondi 5",
                              "value":"Dhanmondi 5"
                           },
                           {
                              "id":598,
                              "postcode_id":400,
                              "name":"Dhanmondi 5A",
                              "value":"Dhanmondi 5A"
                           },
                           {
                              "id":599,
                              "postcode_id":400,
                              "name":"Dhanmondi 6",
                              "value":"Dhanmondi 6"
                           },
                           {
                              "id":600,
                              "postcode_id":400,
                              "name":"Dhanmondi 6A",
                              "value":"Dhanmondi 6A"
                           },
                           {
                              "id":601,
                              "postcode_id":400,
                              "name":"Dhanmondi 7",
                              "value":"Dhanmondi 7"
                           },
                           {
                              "id":602,
                              "postcode_id":400,
                              "name":"Dhanmondi 7A",
                              "value":"Dhanmondi 7A"
                           },
                           {
                              "id":603,
                              "postcode_id":400,
                              "name":"Dhanmondi 8",
                              "value":"Dhanmondi 8"
                           },
                           {
                              "id":604,
                              "postcode_id":400,
                              "name":"Dhanmondi 8A",
                              "value":"Dhanmondi 8A"
                           },
                           {
                              "id":605,
                              "postcode_id":400,
                              "name":"Dhanmondi 9",
                              "value":"Dhanmondi 9"
                           },
                           {
                              "id":606,
                              "postcode_id":400,
                              "name":"Dhanmondi 9A",
                              "value":"Dhanmondi 9A"
                           },
                           {
                              "id":607,
                              "postcode_id":400,
                              "name":"Green Road",
                              "value":"Green Road"
                           },
                           {
                              "id":608,
                              "postcode_id":400,
                              "name":"Hazaribag",
                              "value":"Hazaribag"
                           },
                           {
                              "id":609,
                              "postcode_id":400,
                              "name":"Kalabagan",
                              "value":"Kalabagan"
                           },
                           {
                              "id":610,
                              "postcode_id":400,
                              "name":"Shankar",
                              "value":"Shankar"
                           },
                           {
                              "id":611,
                              "postcode_id":401,
                              "name":"Adabar",
                              "value":"Adabar"
                           },
                           {
                              "id":612,
                              "postcode_id":401,
                              "name":"Asad Avenue",
                              "value":"Asad Avenue"
                           },
                           {
                              "id":613,
                              "postcode_id":401,
                              "name":"Aziz Mohollah",
                              "value":"Aziz Mohollah"
                           },
                           {
                              "id":614,
                              "postcode_id":401,
                              "name":"Baitul Aman Housing",
                              "value":"Baitul Aman Housing"
                           },
                           {
                              "id":615,
                              "postcode_id":401,
                              "name":"Bashbari",
                              "value":"Bashbari"
                           },
                           {
                              "id":616,
                              "postcode_id":401,
                              "name":"Chan Mia Housing",
                              "value":"Chan Mia Housing"
                           },
                           {
                              "id":617,
                              "postcode_id":401,
                              "name":"Chand Uddan",
                              "value":"Chand Uddan"
                           },
                           {
                              "id":618,
                              "postcode_id":401,
                              "name":"Dhaka Housing",
                              "value":"Dhaka Housing"
                           },
                           {
                              "id":619,
                              "postcode_id":401,
                              "name":"Geneva Camp",
                              "value":"Geneva Camp"
                           },
                           {
                              "id":620,
                              "postcode_id":401,
                              "name":"Humayun Road",
                              "value":"Humayun Road"
                           },
                           {
                              "id":621,
                              "postcode_id":401,
                              "name":"Jafrabad",
                              "value":"Jafrabad"
                           },
                           {
                              "id":622,
                              "postcode_id":401,
                              "name":"Jakir Hussain Road",
                              "value":"Jakir Hussain Road"
                           },
                           {
                              "id":623,
                              "postcode_id":401,
                              "name":"Kaderabad Housing",
                              "value":"Kaderabad Housing"
                           },
                           {
                              "id":624,
                              "postcode_id":401,
                              "name":"Katasur",
                              "value":"Katasur"
                           },
                           {
                              "id":625,
                              "postcode_id":401,
                              "name":"Mohammadia Housing Limited",
                              "value":"Mohammadia Housing Limited"
                           },
                           {
                              "id":626,
                              "postcode_id":401,
                              "name":"Mohammadpur Thana (New)",
                              "value":"Mohammadpur Thana (New)"
                           },
                           {
                              "id":627,
                              "postcode_id":401,
                              "name":"Shekhertek",
                              "value":"Shekhertek"
                           },
                           {
                              "id":628,
                              "postcode_id":401,
                              "name":"Sher Shah Suri Road",
                              "value":"Sher Shah Suri Road"
                           },
                           {
                              "id":629,
                              "postcode_id":401,
                              "name":"Sur Soyad Road",
                              "value":"Sur Soyad Road"
                           },
                           {
                              "id":630,
                              "postcode_id":402,
                              "name":"Abdullahpur",
                              "value":"Abdullahpur"
                           },
                           {
                              "id":631,
                              "postcode_id":402,
                              "name":"Ashkona",
                              "value":"Ashkona"
                           },
                           {
                              "id":632,
                              "postcode_id":402,
                              "name":"Azampur",
                              "value":"Azampur"
                           },
                           {
                              "id":633,
                              "postcode_id":402,
                              "name":"Kawla",
                              "value":"Kawla"
                           },
                           {
                              "id":634,
                              "postcode_id":402,
                              "name":"Uttar khan|Dakkhin Khan",
                              "value":"Uttar khan|Dakkhin Khan"
                           },
                           {
                              "id":635,
                              "postcode_id":402,
                              "name":"Uttara 8",
                              "value":"Uttara 8"
                           },
                           {
                              "id":636,
                              "postcode_id":402,
                              "name":"Uttara Jasimuddin",
                              "value":"Uttara Jasimuddin"
                           },
                           {
                              "id":637,
                              "postcode_id":402,
                              "name":"Uttara Sector 1",
                              "value":"Uttara Sector 1"
                           },
                           {
                              "id":638,
                              "postcode_id":402,
                              "name":"Uttara Sector 10",
                              "value":"Uttara Sector 10"
                           },
                           {
                              "id":639,
                              "postcode_id":402,
                              "name":"Uttara Sector 11",
                              "value":"Uttara Sector 11"
                           },
                           {
                              "id":640,
                              "postcode_id":402,
                              "name":"Uttara Sector 12",
                              "value":"Uttara Sector 12"
                           },
                           {
                              "id":641,
                              "postcode_id":402,
                              "name":"Uttara Sector 13",
                              "value":"Uttara Sector 13"
                           },
                           {
                              "id":642,
                              "postcode_id":402,
                              "name":"Uttara Sector 14",
                              "value":"Uttara Sector 14"
                           },
                           {
                              "id":643,
                              "postcode_id":402,
                              "name":"Uttara Sector 3",
                              "value":"Uttara Sector 3"
                           },
                           {
                              "id":644,
                              "postcode_id":402,
                              "name":"Uttara Sector 4",
                              "value":"Uttara Sector 4"
                           },
                           {
                              "id":645,
                              "postcode_id":402,
                              "name":"Uttara Sector 5",
                              "value":"Uttara Sector 5"
                           },
                           {
                              "id":646,
                              "postcode_id":402,
                              "name":"Uttara Sector 6",
                              "value":"Uttara Sector 6"
                           },
                           {
                              "id":647,
                              "postcode_id":402,
                              "name":"Uttara Sector 7",
                              "value":"Uttara Sector 7"
                           },
                           {
                              "id":648,
                              "postcode_id":402,
                              "name":"Uttara Sector 9",
                              "value":"Uttara Sector 9"
                           },
                           {
                              "id":649,
                              "postcode_id":403,
                              "name":"Abdullahpur",
                              "value":"Abdullahpur"
                           },
                           {
                              "id":650,
                              "postcode_id":403,
                              "name":"Ashkona",
                              "value":"Ashkona"
                           },
                           {
                              "id":651,
                              "postcode_id":403,
                              "name":"Azampur",
                              "value":"Azampur"
                           },
                           {
                              "id":652,
                              "postcode_id":403,
                              "name":"Kawla",
                              "value":"Kawla"
                           },
                           {
                              "id":653,
                              "postcode_id":403,
                              "name":"Uttar khan|Dakkhin Khan",
                              "value":"Uttar khan|Dakkhin Khan"
                           },
                           {
                              "id":654,
                              "postcode_id":403,
                              "name":"Uttara 8",
                              "value":"Uttara 8"
                           },
                           {
                              "id":655,
                              "postcode_id":403,
                              "name":"Uttara Jasimuddin",
                              "value":"Uttara Jasimuddin"
                           },
                           {
                              "id":656,
                              "postcode_id":403,
                              "name":"Uttara Sector 1",
                              "value":"Uttara Sector 1"
                           },
                           {
                              "id":657,
                              "postcode_id":403,
                              "name":"Uttara Sector 10",
                              "value":"Uttara Sector 10"
                           },
                           {
                              "id":658,
                              "postcode_id":403,
                              "name":"Uttara Sector 11",
                              "value":"Uttara Sector 11"
                           },
                           {
                              "id":659,
                              "postcode_id":403,
                              "name":"Uttara Sector 12",
                              "value":"Uttara Sector 12"
                           },
                           {
                              "id":660,
                              "postcode_id":403,
                              "name":"Uttara Sector 13",
                              "value":"Uttara Sector 13"
                           },
                           {
                              "id":661,
                              "postcode_id":403,
                              "name":"Uttara Sector 14",
                              "value":"Uttara Sector 14"
                           },
                           {
                              "id":662,
                              "postcode_id":403,
                              "name":"Uttara Sector 3",
                              "value":"Uttara Sector 3"
                           },
                           {
                              "id":663,
                              "postcode_id":403,
                              "name":"Uttara Sector 4",
                              "value":"Uttara Sector 4"
                           },
                           {
                              "id":664,
                              "postcode_id":403,
                              "name":"Uttara Sector 5",
                              "value":"Uttara Sector 5"
                           },
                           {
                              "id":665,
                              "postcode_id":403,
                              "name":"Uttara Sector 6",
                              "value":"Uttara Sector 6"
                           },
                           {
                              "id":666,
                              "postcode_id":403,
                              "name":"Uttara Sector 7",
                              "value":"Uttara Sector 7"
                           },
                           {
                              "id":667,
                              "postcode_id":403,
                              "name":"Uttara Sector 9",
                              "value":"Uttara Sector 9"
                           },
                           {
                              "id":668,
                              "postcode_id":404,
                              "name":"Abdullahpur",
                              "value":"Abdullahpur"
                           },
                           {
                              "id":669,
                              "postcode_id":404,
                              "name":"Ashkona",
                              "value":"Ashkona"
                           },
                           {
                              "id":670,
                              "postcode_id":404,
                              "name":"Azampur",
                              "value":"Azampur"
                           },
                           {
                              "id":671,
                              "postcode_id":404,
                              "name":"Kawla",
                              "value":"Kawla"
                           },
                           {
                              "id":672,
                              "postcode_id":404,
                              "name":"Uttar khan|Dakkhin Khan",
                              "value":"Uttar khan|Dakkhin Khan"
                           },
                           {
                              "id":673,
                              "postcode_id":404,
                              "name":"Uttara 8",
                              "value":"Uttara 8"
                           },
                           {
                              "id":674,
                              "postcode_id":404,
                              "name":"Uttara Jasimuddin",
                              "value":"Uttara Jasimuddin"
                           },
                           {
                              "id":675,
                              "postcode_id":404,
                              "name":"Uttara Sector 1",
                              "value":"Uttara Sector 1"
                           },
                           {
                              "id":676,
                              "postcode_id":404,
                              "name":"Uttara Sector 10",
                              "value":"Uttara Sector 10"
                           },
                           {
                              "id":677,
                              "postcode_id":404,
                              "name":"Uttara Sector 11",
                              "value":"Uttara Sector 11"
                           },
                           {
                              "id":678,
                              "postcode_id":404,
                              "name":"Uttara Sector 12",
                              "value":"Uttara Sector 12"
                           },
                           {
                              "id":679,
                              "postcode_id":404,
                              "name":"Uttara Sector 13",
                              "value":"Uttara Sector 13"
                           },
                           {
                              "id":680,
                              "postcode_id":404,
                              "name":"Uttara Sector 14",
                              "value":"Uttara Sector 14"
                           },
                           {
                              "id":681,
                              "postcode_id":404,
                              "name":"Uttara Sector 3",
                              "value":"Uttara Sector 3"
                           },
                           {
                              "id":682,
                              "postcode_id":404,
                              "name":"Uttara Sector 4",
                              "value":"Uttara Sector 4"
                           },
                           {
                              "id":683,
                              "postcode_id":404,
                              "name":"Uttara Sector 5",
                              "value":"Uttara Sector 5"
                           },
                           {
                              "id":684,
                              "postcode_id":404,
                              "name":"Uttara Sector 6",
                              "value":"Uttara Sector 6"
                           },
                           {
                              "id":685,
                              "postcode_id":404,
                              "name":"Uttara Sector 7",
                              "value":"Uttara Sector 7"
                           },
                           {
                              "id":686,
                              "postcode_id":404,
                              "name":"Uttara Sector 9",
                              "value":"Uttara Sector 9"
                           },
                           {
                              "id":687,
                              "postcode_id":405,
                              "name":"Abdullahpur",
                              "value":"Abdullahpur"
                           },
                           {
                              "id":688,
                              "postcode_id":405,
                              "name":"Ashkona",
                              "value":"Ashkona"
                           },
                           {
                              "id":689,
                              "postcode_id":405,
                              "name":"Azampur",
                              "value":"Azampur"
                           },
                           {
                              "id":690,
                              "postcode_id":405,
                              "name":"Kawla",
                              "value":"Kawla"
                           },
                           {
                              "id":691,
                              "postcode_id":405,
                              "name":"Uttar khan|Dakkhin Khan",
                              "value":"Uttar khan|Dakkhin Khan"
                           },
                           {
                              "id":692,
                              "postcode_id":405,
                              "name":"Uttara 8",
                              "value":"Uttara 8"
                           },
                           {
                              "id":693,
                              "postcode_id":405,
                              "name":"Uttara Jasimuddin",
                              "value":"Uttara Jasimuddin"
                           },
                           {
                              "id":694,
                              "postcode_id":405,
                              "name":"Uttara Sector 1",
                              "value":"Uttara Sector 1"
                           },
                           {
                              "id":695,
                              "postcode_id":405,
                              "name":"Uttara Sector 10",
                              "value":"Uttara Sector 10"
                           },
                           {
                              "id":696,
                              "postcode_id":405,
                              "name":"Uttara Sector 11",
                              "value":"Uttara Sector 11"
                           },
                           {
                              "id":697,
                              "postcode_id":405,
                              "name":"Uttara Sector 12",
                              "value":"Uttara Sector 12"
                           },
                           {
                              "id":698,
                              "postcode_id":405,
                              "name":"Uttara Sector 13",
                              "value":"Uttara Sector 13"
                           },
                           {
                              "id":699,
                              "postcode_id":405,
                              "name":"Uttara Sector 14",
                              "value":"Uttara Sector 14"
                           },
                           {
                              "id":700,
                              "postcode_id":405,
                              "name":"Uttara Sector 3",
                              "value":"Uttara Sector 3"
                           },
                           {
                              "id":701,
                              "postcode_id":405,
                              "name":"Uttara Sector 4",
                              "value":"Uttara Sector 4"
                           },
                           {
                              "id":702,
                              "postcode_id":405,
                              "name":"Uttara Sector 5",
                              "value":"Uttara Sector 5"
                           },
                           {
                              "id":703,
                              "postcode_id":405,
                              "name":"Uttara Sector 6",
                              "value":"Uttara Sector 6"
                           },
                           {
                              "id":704,
                              "postcode_id":405,
                              "name":"Uttara Sector 7",
                              "value":"Uttara Sector 7"
                           },
                           {
                              "id":705,
                              "postcode_id":405,
                              "name":"Uttara Sector 9",
                              "value":"Uttara Sector 9"
                           },
                           {
                              "id":706,
                              "postcode_id":406,
                              "name":"Abdullahpur",
                              "value":"Abdullahpur"
                           },
                           {
                              "id":707,
                              "postcode_id":406,
                              "name":"Ashkona",
                              "value":"Ashkona"
                           },
                           {
                              "id":708,
                              "postcode_id":406,
                              "name":"Azampur",
                              "value":"Azampur"
                           },
                           {
                              "id":709,
                              "postcode_id":406,
                              "name":"Kawla",
                              "value":"Kawla"
                           },
                           {
                              "id":710,
                              "postcode_id":406,
                              "name":"Uttar khan|Dakkhin Khan",
                              "value":"Uttar khan|Dakkhin Khan"
                           },
                           {
                              "id":711,
                              "postcode_id":406,
                              "name":"Uttara 8",
                              "value":"Uttara 8"
                           },
                           {
                              "id":712,
                              "postcode_id":406,
                              "name":"Uttara Jasimuddin",
                              "value":"Uttara Jasimuddin"
                           },
                           {
                              "id":713,
                              "postcode_id":406,
                              "name":"Uttara Sector 1",
                              "value":"Uttara Sector 1"
                           },
                           {
                              "id":714,
                              "postcode_id":406,
                              "name":"Uttara Sector 10",
                              "value":"Uttara Sector 10"
                           },
                           {
                              "id":715,
                              "postcode_id":406,
                              "name":"Uttara Sector 11",
                              "value":"Uttara Sector 11"
                           },
                           {
                              "id":716,
                              "postcode_id":406,
                              "name":"Uttara Sector 12",
                              "value":"Uttara Sector 12"
                           },
                           {
                              "id":717,
                              "postcode_id":406,
                              "name":"Uttara Sector 13",
                              "value":"Uttara Sector 13"
                           },
                           {
                              "id":718,
                              "postcode_id":406,
                              "name":"Uttara Sector 14",
                              "value":"Uttara Sector 14"
                           },
                           {
                              "id":719,
                              "postcode_id":406,
                              "name":"Uttara Sector 3",
                              "value":"Uttara Sector 3"
                           },
                           {
                              "id":720,
                              "postcode_id":406,
                              "name":"Uttara Sector 4",
                              "value":"Uttara Sector 4"
                           },
                           {
                              "id":721,
                              "postcode_id":406,
                              "name":"Uttara Sector 5",
                              "value":"Uttara Sector 5"
                           },
                           {
                              "id":722,
                              "postcode_id":406,
                              "name":"Uttara Sector 6",
                              "value":"Uttara Sector 6"
                           },
                           {
                              "id":723,
                              "postcode_id":406,
                              "name":"Uttara Sector 7",
                              "value":"Uttara Sector 7"
                           },
                           {
                              "id":724,
                              "postcode_id":406,
                              "name":"Uttara Sector 9",
                              "value":"Uttara Sector 9"
                           },
                           {
                              "id":725,
                              "postcode_id":407,
                              "name":"Abdullahpur",
                              "value":"Abdullahpur"
                           },
                           {
                              "id":726,
                              "postcode_id":407,
                              "name":"Ashkona",
                              "value":"Ashkona"
                           },
                           {
                              "id":727,
                              "postcode_id":407,
                              "name":"Azampur",
                              "value":"Azampur"
                           },
                           {
                              "id":728,
                              "postcode_id":407,
                              "name":"Kawla",
                              "value":"Kawla"
                           },
                           {
                              "id":729,
                              "postcode_id":407,
                              "name":"Uttar khan|Dakkhin Khan",
                              "value":"Uttar khan|Dakkhin Khan"
                           },
                           {
                              "id":730,
                              "postcode_id":407,
                              "name":"Uttara 8",
                              "value":"Uttara 8"
                           },
                           {
                              "id":731,
                              "postcode_id":407,
                              "name":"Uttara Jasimuddin",
                              "value":"Uttara Jasimuddin"
                           },
                           {
                              "id":732,
                              "postcode_id":407,
                              "name":"Uttara Sector 1",
                              "value":"Uttara Sector 1"
                           },
                           {
                              "id":733,
                              "postcode_id":407,
                              "name":"Uttara Sector 10",
                              "value":"Uttara Sector 10"
                           },
                           {
                              "id":734,
                              "postcode_id":407,
                              "name":"Uttara Sector 11",
                              "value":"Uttara Sector 11"
                           },
                           {
                              "id":735,
                              "postcode_id":407,
                              "name":"Uttara Sector 12",
                              "value":"Uttara Sector 12"
                           },
                           {
                              "id":736,
                              "postcode_id":407,
                              "name":"Uttara Sector 13",
                              "value":"Uttara Sector 13"
                           },
                           {
                              "id":737,
                              "postcode_id":407,
                              "name":"Uttara Sector 14",
                              "value":"Uttara Sector 14"
                           },
                           {
                              "id":738,
                              "postcode_id":407,
                              "name":"Uttara Sector 3",
                              "value":"Uttara Sector 3"
                           },
                           {
                              "id":739,
                              "postcode_id":407,
                              "name":"Uttara Sector 4",
                              "value":"Uttara Sector 4"
                           },
                           {
                              "id":740,
                              "postcode_id":407,
                              "name":"Uttara Sector 5",
                              "value":"Uttara Sector 5"
                           },
                           {
                              "id":741,
                              "postcode_id":407,
                              "name":"Uttara Sector 6",
                              "value":"Uttara Sector 6"
                           },
                           {
                              "id":742,
                              "postcode_id":407,
                              "name":"Uttara Sector 7",
                              "value":"Uttara Sector 7"
                           },
                           {
                              "id":743,
                              "postcode_id":407,
                              "name":"Uttara Sector 9",
                              "value":"Uttara Sector 9"
                           },
                           {
                              "id":744,
                              "postcode_id":408,
                              "name":"Khilkhet",
                              "value":"Khilkhet"
                           },
                           {
                              "id":745,
                              "postcode_id":408,
                              "name":"Lake City",
                              "value":"Lake City"
                           },
                           {
                              "id":746,
                              "postcode_id":408,
                              "name":"Nikunjo 1",
                              "value":"Nikunjo 1"
                           },
                           {
                              "id":747,
                              "postcode_id":409,
                              "name":"Agargaon",
                              "value":"Agargaon"
                           },
                           {
                              "id":748,
                              "postcode_id":409,
                              "name":"Ahamedbag",
                              "value":"Ahamedbag"
                           },
                           {
                              "id":749,
                              "postcode_id":409,
                              "name":"Ansar Camp",
                              "value":"Ansar Camp"
                           },
                           {
                              "id":750,
                              "postcode_id":409,
                              "name":"Bangla College",
                              "value":"Bangla College"
                           },
                           {
                              "id":751,
                              "postcode_id":409,
                              "name":"Bangladesh Betar",
                              "value":"Bangladesh Betar"
                           },
                           {
                              "id":752,
                              "postcode_id":409,
                              "name":"Bordhon Bari",
                              "value":"Bordhon Bari"
                           },
                           {
                              "id":753,
                              "postcode_id":409,
                              "name":"Darus Salam",
                              "value":"Darus Salam"
                           },
                           {
                              "id":754,
                              "postcode_id":409,
                              "name":"Eastern Housing",
                              "value":"Eastern Housing"
                           },
                           {
                              "id":755,
                              "postcode_id":409,
                              "name":"Golarteak",
                              "value":"Golarteak"
                           },
                           {
                              "id":756,
                              "postcode_id":409,
                              "name":"Janata Housing",
                              "value":"Janata Housing"
                           },
                           {
                              "id":757,
                              "postcode_id":409,
                              "name":"Kallaynnpur",
                              "value":"Kallaynnpur"
                           },
                           {
                              "id":758,
                              "postcode_id":409,
                              "name":"Kalshi",
                              "value":"Kalshi"
                           },
                           {
                              "id":759,
                              "postcode_id":409,
                              "name":"Matikata",
                              "value":"Matikata"
                           },
                           {
                              "id":760,
                              "postcode_id":409,
                              "name":"Mazar road",
                              "value":"Mazar road"
                           },
                           {
                              "id":761,
                              "postcode_id":409,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":762,
                              "postcode_id":409,
                              "name":"Mirpur 1",
                              "value":"Mirpur 1"
                           },
                           {
                              "id":763,
                              "postcode_id":409,
                              "name":"Mirpur 10",
                              "value":"Mirpur 10"
                           },
                           {
                              "id":764,
                              "postcode_id":409,
                              "name":"Mirpur 11",
                              "value":"Mirpur 11"
                           },
                           {
                              "id":765,
                              "postcode_id":409,
                              "name":"Mirpur 12",
                              "value":"Mirpur 12"
                           },
                           {
                              "id":766,
                              "postcode_id":409,
                              "name":"Mirpur 2",
                              "value":"Mirpur 2"
                           },
                           {
                              "id":767,
                              "postcode_id":409,
                              "name":"Mirpur 6",
                              "value":"Mirpur 6"
                           },
                           {
                              "id":768,
                              "postcode_id":409,
                              "name":"Mirpur 7",
                              "value":"Mirpur 7"
                           },
                           {
                              "id":769,
                              "postcode_id":409,
                              "name":"Paikpara",
                              "value":"Paikpara"
                           },
                           {
                              "id":770,
                              "postcode_id":409,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":771,
                              "postcode_id":409,
                              "name":"Pirerbag",
                              "value":"Pirerbag"
                           },
                           {
                              "id":772,
                              "postcode_id":409,
                              "name":"Rupnagor",
                              "value":"Rupnagor"
                           },
                           {
                              "id":773,
                              "postcode_id":409,
                              "name":"SONY Cienema Hall",
                              "value":"SONY Cienema Hall"
                           },
                           {
                              "id":774,
                              "postcode_id":409,
                              "name":"South Bishil",
                              "value":"South Bishil"
                           },
                           {
                              "id":775,
                              "postcode_id":409,
                              "name":"Tolarbag",
                              "value":"Tolarbag"
                           },
                           {
                              "id":776,
                              "postcode_id":409,
                              "name":"Vasan Tek",
                              "value":"Vasan Tek"
                           },
                           {
                              "id":777,
                              "postcode_id":410,
                              "name":"Agargaon",
                              "value":"Agargaon"
                           },
                           {
                              "id":778,
                              "postcode_id":410,
                              "name":"Ahamedbag",
                              "value":"Ahamedbag"
                           },
                           {
                              "id":779,
                              "postcode_id":410,
                              "name":"Ansar Camp",
                              "value":"Ansar Camp"
                           },
                           {
                              "id":780,
                              "postcode_id":410,
                              "name":"Bangla College",
                              "value":"Bangla College"
                           },
                           {
                              "id":781,
                              "postcode_id":410,
                              "name":"Bangladesh Betar",
                              "value":"Bangladesh Betar"
                           },
                           {
                              "id":782,
                              "postcode_id":410,
                              "name":"Bordhon Bari",
                              "value":"Bordhon Bari"
                           },
                           {
                              "id":783,
                              "postcode_id":410,
                              "name":"Darus Salam",
                              "value":"Darus Salam"
                           },
                           {
                              "id":784,
                              "postcode_id":410,
                              "name":"Eastern Housing",
                              "value":"Eastern Housing"
                           },
                           {
                              "id":785,
                              "postcode_id":410,
                              "name":"Golarteak",
                              "value":"Golarteak"
                           },
                           {
                              "id":786,
                              "postcode_id":410,
                              "name":"Janata Housing",
                              "value":"Janata Housing"
                           },
                           {
                              "id":787,
                              "postcode_id":410,
                              "name":"Kallaynnpur",
                              "value":"Kallaynnpur"
                           },
                           {
                              "id":788,
                              "postcode_id":410,
                              "name":"Kalshi",
                              "value":"Kalshi"
                           },
                           {
                              "id":789,
                              "postcode_id":410,
                              "name":"Matikata",
                              "value":"Matikata"
                           },
                           {
                              "id":790,
                              "postcode_id":410,
                              "name":"Mazar road",
                              "value":"Mazar road"
                           },
                           {
                              "id":791,
                              "postcode_id":410,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":792,
                              "postcode_id":410,
                              "name":"Mirpur 1",
                              "value":"Mirpur 1"
                           },
                           {
                              "id":793,
                              "postcode_id":410,
                              "name":"Mirpur 10",
                              "value":"Mirpur 10"
                           },
                           {
                              "id":794,
                              "postcode_id":410,
                              "name":"Mirpur 11",
                              "value":"Mirpur 11"
                           },
                           {
                              "id":795,
                              "postcode_id":410,
                              "name":"Mirpur 12",
                              "value":"Mirpur 12"
                           },
                           {
                              "id":796,
                              "postcode_id":410,
                              "name":"Mirpur 2",
                              "value":"Mirpur 2"
                           },
                           {
                              "id":797,
                              "postcode_id":410,
                              "name":"Mirpur 6",
                              "value":"Mirpur 6"
                           },
                           {
                              "id":798,
                              "postcode_id":410,
                              "name":"Mirpur 7",
                              "value":"Mirpur 7"
                           },
                           {
                              "id":799,
                              "postcode_id":410,
                              "name":"Paikpara",
                              "value":"Paikpara"
                           },
                           {
                              "id":800,
                              "postcode_id":410,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":801,
                              "postcode_id":410,
                              "name":"Pirerbag",
                              "value":"Pirerbag"
                           },
                           {
                              "id":802,
                              "postcode_id":410,
                              "name":"Rupnagor",
                              "value":"Rupnagor"
                           },
                           {
                              "id":803,
                              "postcode_id":410,
                              "name":"SONY Cienema Hall",
                              "value":"SONY Cienema Hall"
                           },
                           {
                              "id":804,
                              "postcode_id":410,
                              "name":"South Bishil",
                              "value":"South Bishil"
                           },
                           {
                              "id":805,
                              "postcode_id":410,
                              "name":"Tolarbag",
                              "value":"Tolarbag"
                           },
                           {
                              "id":806,
                              "postcode_id":410,
                              "name":"Vasan Tek",
                              "value":"Vasan Tek"
                           },
                           {
                              "id":807,
                              "postcode_id":411,
                              "name":"Agargaon",
                              "value":"Agargaon"
                           },
                           {
                              "id":808,
                              "postcode_id":411,
                              "name":"Ahamedbag",
                              "value":"Ahamedbag"
                           },
                           {
                              "id":809,
                              "postcode_id":411,
                              "name":"Ansar Camp",
                              "value":"Ansar Camp"
                           },
                           {
                              "id":810,
                              "postcode_id":411,
                              "name":"Bangla College",
                              "value":"Bangla College"
                           },
                           {
                              "id":811,
                              "postcode_id":411,
                              "name":"Bangladesh Betar",
                              "value":"Bangladesh Betar"
                           },
                           {
                              "id":812,
                              "postcode_id":411,
                              "name":"Bordhon Bari",
                              "value":"Bordhon Bari"
                           },
                           {
                              "id":813,
                              "postcode_id":411,
                              "name":"Darus Salam",
                              "value":"Darus Salam"
                           },
                           {
                              "id":814,
                              "postcode_id":411,
                              "name":"Eastern Housing",
                              "value":"Eastern Housing"
                           },
                           {
                              "id":815,
                              "postcode_id":411,
                              "name":"Golarteak",
                              "value":"Golarteak"
                           },
                           {
                              "id":816,
                              "postcode_id":411,
                              "name":"Janata Housing",
                              "value":"Janata Housing"
                           },
                           {
                              "id":817,
                              "postcode_id":411,
                              "name":"Kallaynnpur",
                              "value":"Kallaynnpur"
                           },
                           {
                              "id":818,
                              "postcode_id":411,
                              "name":"Kalshi",
                              "value":"Kalshi"
                           },
                           {
                              "id":819,
                              "postcode_id":411,
                              "name":"Matikata",
                              "value":"Matikata"
                           },
                           {
                              "id":820,
                              "postcode_id":411,
                              "name":"Mazar road",
                              "value":"Mazar road"
                           },
                           {
                              "id":821,
                              "postcode_id":411,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":822,
                              "postcode_id":411,
                              "name":"Mirpur 1",
                              "value":"Mirpur 1"
                           },
                           {
                              "id":823,
                              "postcode_id":411,
                              "name":"Mirpur 10",
                              "value":"Mirpur 10"
                           },
                           {
                              "id":824,
                              "postcode_id":411,
                              "name":"Mirpur 11",
                              "value":"Mirpur 11"
                           },
                           {
                              "id":825,
                              "postcode_id":411,
                              "name":"Mirpur 12",
                              "value":"Mirpur 12"
                           },
                           {
                              "id":826,
                              "postcode_id":411,
                              "name":"Mirpur 2",
                              "value":"Mirpur 2"
                           },
                           {
                              "id":827,
                              "postcode_id":411,
                              "name":"Mirpur 6",
                              "value":"Mirpur 6"
                           },
                           {
                              "id":828,
                              "postcode_id":411,
                              "name":"Mirpur 7",
                              "value":"Mirpur 7"
                           },
                           {
                              "id":829,
                              "postcode_id":411,
                              "name":"Paikpara",
                              "value":"Paikpara"
                           },
                           {
                              "id":830,
                              "postcode_id":411,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":831,
                              "postcode_id":411,
                              "name":"Pirerbag",
                              "value":"Pirerbag"
                           },
                           {
                              "id":832,
                              "postcode_id":411,
                              "name":"Rupnagor",
                              "value":"Rupnagor"
                           },
                           {
                              "id":833,
                              "postcode_id":411,
                              "name":"SONY Cienema Hall",
                              "value":"SONY Cienema Hall"
                           },
                           {
                              "id":834,
                              "postcode_id":411,
                              "name":"South Bishil",
                              "value":"South Bishil"
                           },
                           {
                              "id":835,
                              "postcode_id":411,
                              "name":"Tolarbag",
                              "value":"Tolarbag"
                           },
                           {
                              "id":836,
                              "postcode_id":411,
                              "name":"Vasan Tek",
                              "value":"Vasan Tek"
                           },
                           {
                              "id":837,
                              "postcode_id":412,
                              "name":"Adabar",
                              "value":"Adabar"
                           },
                           {
                              "id":838,
                              "postcode_id":412,
                              "name":"Asad Avenue",
                              "value":"Asad Avenue"
                           },
                           {
                              "id":839,
                              "postcode_id":412,
                              "name":"Aziz Mohollah",
                              "value":"Aziz Mohollah"
                           },
                           {
                              "id":840,
                              "postcode_id":412,
                              "name":"Baitul Aman Housing",
                              "value":"Baitul Aman Housing"
                           },
                           {
                              "id":841,
                              "postcode_id":412,
                              "name":"Bashbari",
                              "value":"Bashbari"
                           },
                           {
                              "id":842,
                              "postcode_id":412,
                              "name":"Chan Mia Housing",
                              "value":"Chan Mia Housing"
                           },
                           {
                              "id":843,
                              "postcode_id":412,
                              "name":"Chand Uddan",
                              "value":"Chand Uddan"
                           },
                           {
                              "id":844,
                              "postcode_id":412,
                              "name":"Dhaka Housing",
                              "value":"Dhaka Housing"
                           },
                           {
                              "id":845,
                              "postcode_id":412,
                              "name":"Geneva Camp",
                              "value":"Geneva Camp"
                           },
                           {
                              "id":846,
                              "postcode_id":412,
                              "name":"Humayun Road",
                              "value":"Humayun Road"
                           },
                           {
                              "id":847,
                              "postcode_id":412,
                              "name":"Jafrabad",
                              "value":"Jafrabad"
                           },
                           {
                              "id":848,
                              "postcode_id":412,
                              "name":"Jakir Hussain Road",
                              "value":"Jakir Hussain Road"
                           },
                           {
                              "id":849,
                              "postcode_id":412,
                              "name":"Kaderabad Housing",
                              "value":"Kaderabad Housing"
                           },
                           {
                              "id":850,
                              "postcode_id":412,
                              "name":"Katasur",
                              "value":"Katasur"
                           },
                           {
                              "id":851,
                              "postcode_id":412,
                              "name":"Mohammadia Housing Limited",
                              "value":"Mohammadia Housing Limited"
                           },
                           {
                              "id":852,
                              "postcode_id":412,
                              "name":"Mohammadpur Thana (New)",
                              "value":"Mohammadpur Thana (New)"
                           },
                           {
                              "id":853,
                              "postcode_id":412,
                              "name":"Shekhertek",
                              "value":"Shekhertek"
                           },
                           {
                              "id":854,
                              "postcode_id":412,
                              "name":"Sher Shah Suri Road",
                              "value":"Sher Shah Suri Road"
                           },
                           {
                              "id":855,
                              "postcode_id":412,
                              "name":"Sur Soyad Road",
                              "value":"Sur Soyad Road"
                           },
                           {
                              "id":856,
                              "postcode_id":413,
                              "name":"Asad Gate",
                              "value":"Asad Gate"
                           },
                           {
                              "id":857,
                              "postcode_id":413,
                              "name":"Shonargoan",
                              "value":"Shonargoan"
                           },
                           {
                              "id":858,
                              "postcode_id":413,
                              "name":"Tejturi Bazar",
                              "value":"Tejturi Bazar"
                           },
                           {
                              "id":859,
                              "postcode_id":414,
                              "name":"Abul Hotel",
                              "value":"Abul Hotel"
                           },
                           {
                              "id":860,
                              "postcode_id":414,
                              "name":"Aftab Nagar",
                              "value":"Aftab Nagar"
                           },
                           {
                              "id":861,
                              "postcode_id":414,
                              "name":"Aftab nagor Block A to G",
                              "value":"Aftab nagor Block A to G"
                           },
                           {
                              "id":862,
                              "postcode_id":414,
                              "name":"Baganbari",
                              "value":"Baganbari"
                           },
                           {
                              "id":863,
                              "postcode_id":414,
                              "name":"Banasree",
                              "value":"Banasree"
                           },
                           {
                              "id":864,
                              "postcode_id":414,
                              "name":"Bepari gali",
                              "value":"Bepari gali"
                           },
                           {
                              "id":865,
                              "postcode_id":414,
                              "name":"DIT Project",
                              "value":"DIT Project"
                           },
                           {
                              "id":866,
                              "postcode_id":414,
                              "name":"East Goran",
                              "value":"East Goran"
                           },
                           {
                              "id":867,
                              "postcode_id":414,
                              "name":"East Rumpura",
                              "value":"East Rumpura"
                           },
                           {
                              "id":868,
                              "postcode_id":414,
                              "name":"Gulbag",
                              "value":"Gulbag"
                           },
                           {
                              "id":869,
                              "postcode_id":414,
                              "name":"Hazipara",
                              "value":"Hazipara"
                           },
                           {
                              "id":870,
                              "postcode_id":414,
                              "name":"Khilgaon Block A",
                              "value":"Khilgaon Block A"
                           },
                           {
                              "id":871,
                              "postcode_id":414,
                              "name":"Khilgaon Block B",
                              "value":"Khilgaon Block B"
                           },
                           {
                              "id":872,
                              "postcode_id":414,
                              "name":"Khilgaon Block C",
                              "value":"Khilgaon Block C"
                           },
                           {
                              "id":873,
                              "postcode_id":414,
                              "name":"Khilgaon Taltola",
                              "value":"Khilgaon Taltola"
                           },
                           {
                              "id":874,
                              "postcode_id":414,
                              "name":"Meradia",
                              "value":"Meradia"
                           },
                           {
                              "id":875,
                              "postcode_id":414,
                              "name":"Mohanagor Project",
                              "value":"Mohanagor Project"
                           },
                           {
                              "id":876,
                              "postcode_id":414,
                              "name":"Mohanogor Project",
                              "value":"Mohanogor Project"
                           },
                           {
                              "id":877,
                              "postcode_id":414,
                              "name":"Nobin Bag",
                              "value":"Nobin Bag"
                           },
                           {
                              "id":878,
                              "postcode_id":414,
                              "name":"North Goran",
                              "value":"North Goran"
                           },
                           {
                              "id":879,
                              "postcode_id":414,
                              "name":"Peyarabag",
                              "value":"Peyarabag"
                           },
                           {
                              "id":880,
                              "postcode_id":414,
                              "name":"Pollima",
                              "value":"Pollima"
                           },
                           {
                              "id":881,
                              "postcode_id":414,
                              "name":"Provati bag",
                              "value":"Provati bag"
                           },
                           {
                              "id":882,
                              "postcode_id":414,
                              "name":"Rampura",
                              "value":"Rampura"
                           },
                           {
                              "id":883,
                              "postcode_id":414,
                              "name":"Rampura Banassre",
                              "value":"Rampura Banassre"
                           },
                           {
                              "id":884,
                              "postcode_id":414,
                              "name":"Rampura Bazar",
                              "value":"Rampura Bazar"
                           },
                           {
                              "id":885,
                              "postcode_id":414,
                              "name":"Rampura Hazipara",
                              "value":"Rampura Hazipara"
                           },
                           {
                              "id":886,
                              "postcode_id":414,
                              "name":"Shipahibag",
                              "value":"Shipahibag"
                           },
                           {
                              "id":887,
                              "postcode_id":414,
                              "name":"Sipahi bag",
                              "value":"Sipahi bag"
                           },
                           {
                              "id":888,
                              "postcode_id":414,
                              "name":"South Banassre",
                              "value":"South Banassre"
                           },
                           {
                              "id":889,
                              "postcode_id":414,
                              "name":"South Goran",
                              "value":"South Goran"
                           },
                           {
                              "id":890,
                              "postcode_id":414,
                              "name":"Tilpa Para",
                              "value":"Tilpa Para"
                           },
                           {
                              "id":891,
                              "postcode_id":414,
                              "name":"Uttorpara",
                              "value":"Uttorpara"
                           },
                           {
                              "id":892,
                              "postcode_id":414,
                              "name":"West mailbag",
                              "value":"West mailbag"
                           },
                           {
                              "id":893,
                              "postcode_id":414,
                              "name":"West Rampura",
                              "value":"West Rampura"
                           },
                           {
                              "id":894,
                              "postcode_id":414,
                              "name":"West Rumpura",
                              "value":"West Rumpura"
                           },
                           {
                              "id":895,
                              "postcode_id":415,
                              "name":"Banani",
                              "value":"Banani"
                           },
                           {
                              "id":896,
                              "postcode_id":415,
                              "name":"Banani (Chairman Bari)",
                              "value":"Banani (Chairman Bari)"
                           },
                           {
                              "id":897,
                              "postcode_id":415,
                              "name":"Banani 1",
                              "value":"Banani 1"
                           },
                           {
                              "id":898,
                              "postcode_id":415,
                              "name":"Banani 11",
                              "value":"Banani 11"
                           },
                           {
                              "id":899,
                              "postcode_id":415,
                              "name":"Banani 17",
                              "value":"Banani 17"
                           },
                           {
                              "id":900,
                              "postcode_id":415,
                              "name":"Banani 2",
                              "value":"Banani 2"
                           },
                           {
                              "id":901,
                              "postcode_id":415,
                              "name":"Banani 21",
                              "value":"Banani 21"
                           },
                           {
                              "id":902,
                              "postcode_id":415,
                              "name":"Banani 23",
                              "value":"Banani 23"
                           },
                           {
                              "id":903,
                              "postcode_id":415,
                              "name":"Banani 27",
                              "value":"Banani 27"
                           },
                           {
                              "id":904,
                              "postcode_id":415,
                              "name":"Banani 8",
                              "value":"Banani 8"
                           },
                           {
                              "id":905,
                              "postcode_id":415,
                              "name":"Banani chairman Bari",
                              "value":"Banani chairman Bari"
                           },
                           {
                              "id":906,
                              "postcode_id":415,
                              "name":"Dokkhin para",
                              "value":"Dokkhin para"
                           },
                           {
                              "id":907,
                              "postcode_id":415,
                              "name":"Graveyard road",
                              "value":"Graveyard road"
                           },
                           {
                              "id":908,
                              "postcode_id":415,
                              "name":"Kemal Ataturk avenue",
                              "value":"Kemal Ataturk avenue"
                           },
                           {
                              "id":909,
                              "postcode_id":415,
                              "name":"Korail Bosti",
                              "value":"Korail Bosti"
                           },
                           {
                              "id":910,
                              "postcode_id":415,
                              "name":"Maasranga television",
                              "value":"Maasranga television"
                           },
                           {
                              "id":911,
                              "postcode_id":415,
                              "name":"Navy headquarters",
                              "value":"Navy headquarters"
                           },
                           {
                              "id":912,
                              "postcode_id":415,
                              "name":"Radisson water Blu Hotel",
                              "value":"Radisson water Blu Hotel"
                           },
                           {
                              "id":913,
                              "postcode_id":415,
                              "name":"Shanti Niketon",
                              "value":"Shanti Niketon"
                           },
                           {
                              "id":914,
                              "postcode_id":415,
                              "name":"Shoinik Club",
                              "value":"Shoinik Club"
                           },
                           {
                              "id":915,
                              "postcode_id":415,
                              "name":"Soinik club",
                              "value":"Soinik club"
                           },
                           {
                              "id":916,
                              "postcode_id":415,
                              "name":"T&T colony",
                              "value":"T&T colony"
                           },
                           {
                              "id":917,
                              "postcode_id":416,
                              "name":"Abujar bafari gali",
                              "value":"Abujar bafari gali"
                           },
                           {
                              "id":918,
                              "postcode_id":416,
                              "name":"Ansar Camp(Moghbazar)",
                              "value":"Ansar Camp(Moghbazar)"
                           },
                           {
                              "id":919,
                              "postcode_id":416,
                              "name":"Baily Road",
                              "value":"Baily Road"
                           },
                           {
                              "id":920,
                              "postcode_id":416,
                              "name":"Bata gali",
                              "value":"Bata gali"
                           },
                           {
                              "id":921,
                              "postcode_id":416,
                              "name":"BG Press",
                              "value":"BG Press"
                           },
                           {
                              "id":922,
                              "postcode_id":416,
                              "name":"Biam Auditorium",
                              "value":"Biam Auditorium"
                           },
                           {
                              "id":923,
                              "postcode_id":416,
                              "name":"Boro Moghbazar",
                              "value":"Boro Moghbazar"
                           },
                           {
                              "id":924,
                              "postcode_id":416,
                              "name":"Channel 24",
                              "value":"Channel 24"
                           },
                           {
                              "id":925,
                              "postcode_id":416,
                              "name":"Chowdhury Para",
                              "value":"Chowdhury Para"
                           },
                           {
                              "id":926,
                              "postcode_id":416,
                              "name":"Dillu road",
                              "value":"Dillu road"
                           },
                           {
                              "id":927,
                              "postcode_id":416,
                              "name":"Hazari bari",
                              "value":"Hazari bari"
                           },
                           {
                              "id":928,
                              "postcode_id":416,
                              "name":"Imam bag",
                              "value":"Imam bag"
                           },
                           {
                              "id":929,
                              "postcode_id":416,
                              "name":"Kamalapur",
                              "value":"Kamalapur"
                           },
                           {
                              "id":930,
                              "postcode_id":416,
                              "name":"Kazi office r gali",
                              "value":"Kazi office r gali"
                           },
                           {
                              "id":931,
                              "postcode_id":416,
                              "name":"Mailbag 1st line",
                              "value":"Mailbag 1st line"
                           },
                           {
                              "id":932,
                              "postcode_id":416,
                              "name":"Malibag Chowdhuripara",
                              "value":"Malibag Chowdhuripara"
                           },
                           {
                              "id":933,
                              "postcode_id":416,
                              "name":"Mintu Road",
                              "value":"Mintu Road"
                           },
                           {
                              "id":934,
                              "postcode_id":416,
                              "name":"Modhubag",
                              "value":"Modhubag"
                           },
                           {
                              "id":935,
                              "postcode_id":416,
                              "name":"Mogbazar",
                              "value":"Mogbazar"
                           },
                           {
                              "id":936,
                              "postcode_id":416,
                              "name":"Moghbazar",
                              "value":"Moghbazar"
                           },
                           {
                              "id":937,
                              "postcode_id":416,
                              "name":"Mouchak",
                              "value":"Mouchak"
                           },
                           {
                              "id":938,
                              "postcode_id":416,
                              "name":"Noyatola",
                              "value":"Noyatola"
                           },
                           {
                              "id":939,
                              "postcode_id":416,
                              "name":"Paglamajar gali",
                              "value":"Paglamajar gali"
                           },
                           {
                              "id":940,
                              "postcode_id":416,
                              "name":"Rajarbag",
                              "value":"Rajarbag"
                           },
                           {
                              "id":941,
                              "postcode_id":416,
                              "name":"Roma Century ",
                              "value":"Roma Century "
                           },
                           {
                              "id":942,
                              "postcode_id":416,
                              "name":"Santibag",
                              "value":"Santibag"
                           },
                           {
                              "id":943,
                              "postcode_id":416,
                              "name":"Shahidbag",
                              "value":"Shahidbag"
                           },
                           {
                              "id":944,
                              "postcode_id":416,
                              "name":"Shahjanpur",
                              "value":"Shahjanpur"
                           },
                           {
                              "id":945,
                              "postcode_id":416,
                              "name":"Shajahanpur",
                              "value":"Shajahanpur"
                           },
                           {
                              "id":946,
                              "postcode_id":416,
                              "name":"Shantinagar",
                              "value":"Shantinagar"
                           },
                           {
                              "id":947,
                              "postcode_id":416,
                              "name":"Sheron bag",
                              "value":"Sheron bag"
                           },
                           {
                              "id":948,
                              "postcode_id":416,
                              "name":"Shideshwari",
                              "value":"Shideshwari"
                           },
                           {
                              "id":949,
                              "postcode_id":416,
                              "name":"Siddiq master dhal",
                              "value":"Siddiq master dhal"
                           },
                           {
                              "id":950,
                              "postcode_id":416,
                              "name":"Sismohol",
                              "value":"Sismohol"
                           },
                           {
                              "id":951,
                              "postcode_id":416,
                              "name":"Wreless gate",
                              "value":"Wreless gate"
                           },
                           {
                              "id":952,
                              "postcode_id":417,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":953,
                              "postcode_id":417,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":954,
                              "postcode_id":417,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":955,
                              "postcode_id":417,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":956,
                              "postcode_id":417,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":957,
                              "postcode_id":417,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":958,
                              "postcode_id":417,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":959,
                              "postcode_id":417,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":960,
                              "postcode_id":417,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":961,
                              "postcode_id":417,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":962,
                              "postcode_id":417,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":963,
                              "postcode_id":417,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":964,
                              "postcode_id":417,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":965,
                              "postcode_id":417,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":966,
                              "postcode_id":417,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":967,
                              "postcode_id":417,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":968,
                              "postcode_id":417,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":969,
                              "postcode_id":417,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":970,
                              "postcode_id":417,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":971,
                              "postcode_id":417,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":972,
                              "postcode_id":417,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":973,
                              "postcode_id":417,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":974,
                              "postcode_id":417,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":975,
                              "postcode_id":417,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":976,
                              "postcode_id":417,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":977,
                              "postcode_id":417,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":978,
                              "postcode_id":417,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":979,
                              "postcode_id":417,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":980,
                              "postcode_id":417,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":981,
                              "postcode_id":417,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":982,
                              "postcode_id":417,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":983,
                              "postcode_id":417,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":984,
                              "postcode_id":417,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":985,
                              "postcode_id":417,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":986,
                              "postcode_id":417,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":987,
                              "postcode_id":417,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":988,
                              "postcode_id":417,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":989,
                              "postcode_id":417,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":990,
                              "postcode_id":417,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":991,
                              "postcode_id":417,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":992,
                              "postcode_id":417,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":993,
                              "postcode_id":417,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":994,
                              "postcode_id":417,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":995,
                              "postcode_id":417,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":996,
                              "postcode_id":417,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":997,
                              "postcode_id":417,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":998,
                              "postcode_id":417,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":999,
                              "postcode_id":417,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":1000,
                              "postcode_id":417,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":1001,
                              "postcode_id":417,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":1002,
                              "postcode_id":417,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":1003,
                              "postcode_id":417,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":1004,
                              "postcode_id":417,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":1005,
                              "postcode_id":417,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":1006,
                              "postcode_id":418,
                              "name":"Abdullah Bag",
                              "value":"Abdullah Bag"
                           },
                           {
                              "id":1007,
                              "postcode_id":418,
                              "name":"Adorsho Nagor",
                              "value":"Adorsho Nagor"
                           },
                           {
                              "id":1008,
                              "postcode_id":418,
                              "name":"Agora",
                              "value":"Agora"
                           },
                           {
                              "id":1009,
                              "postcode_id":418,
                              "name":"Apollo Hospital",
                              "value":"Apollo Hospital"
                           },
                           {
                              "id":1010,
                              "postcode_id":418,
                              "name":"Ashalota, Bonolota",
                              "value":"Ashalota, Bonolota"
                           },
                           {
                              "id":1011,
                              "postcode_id":418,
                              "name":"Aziz Sarani",
                              "value":"Aziz Sarani"
                           },
                           {
                              "id":1012,
                              "postcode_id":418,
                              "name":"Badda",
                              "value":"Badda"
                           },
                           {
                              "id":1013,
                              "postcode_id":418,
                              "name":"Baridhara",
                              "value":"Baridhara"
                           },
                           {
                              "id":1014,
                              "postcode_id":418,
                              "name":"Baridhara Block-J",
                              "value":"Baridhara Block-J"
                           },
                           {
                              "id":1015,
                              "postcode_id":418,
                              "name":"Baridhara DOHS",
                              "value":"Baridhara DOHS"
                           },
                           {
                              "id":1016,
                              "postcode_id":418,
                              "name":"Bashtola",
                              "value":"Bashtola"
                           },
                           {
                              "id":1017,
                              "postcode_id":418,
                              "name":"Bashundhara 300ft",
                              "value":"Bashundhara 300ft"
                           },
                           {
                              "id":1018,
                              "postcode_id":418,
                              "name":"Bashundhara Block  A to L",
                              "value":"Bashundhara Block  A to L"
                           },
                           {
                              "id":1019,
                              "postcode_id":418,
                              "name":"Bashundhara RA",
                              "value":"Bashundhara RA"
                           },
                           {
                              "id":1020,
                              "postcode_id":418,
                              "name":"Coca-cola",
                              "value":"Coca-cola"
                           },
                           {
                              "id":1021,
                              "postcode_id":418,
                              "name":"Comilla Para",
                              "value":"Comilla Para"
                           },
                           {
                              "id":1022,
                              "postcode_id":418,
                              "name":"Dalibari Kachabazar",
                              "value":"Dalibari Kachabazar"
                           },
                           {
                              "id":1023,
                              "postcode_id":418,
                              "name":"Diplomatic Zone",
                              "value":"Diplomatic Zone"
                           },
                           {
                              "id":1024,
                              "postcode_id":418,
                              "name":"Fasertake",
                              "value":"Fasertake"
                           },
                           {
                              "id":1025,
                              "postcode_id":418,
                              "name":"GM Bari",
                              "value":"GM Bari"
                           },
                           {
                              "id":1026,
                              "postcode_id":418,
                              "name":"Gopipara",
                              "value":"Gopipara"
                           },
                           {
                              "id":1027,
                              "postcode_id":418,
                              "name":"Gudara ghat",
                              "value":"Gudara ghat"
                           },
                           {
                              "id":1028,
                              "postcode_id":418,
                              "name":"Gulshan 1",
                              "value":"Gulshan 1"
                           },
                           {
                              "id":1029,
                              "postcode_id":418,
                              "name":"Gulshan 2",
                              "value":"Gulshan 2"
                           },
                           {
                              "id":1030,
                              "postcode_id":418,
                              "name":"Gulshan Arong",
                              "value":"Gulshan Arong"
                           },
                           {
                              "id":1031,
                              "postcode_id":418,
                              "name":"Gulshan Avenue",
                              "value":"Gulshan Avenue"
                           },
                           {
                              "id":1032,
                              "postcode_id":418,
                              "name":"Gulshan-1",
                              "value":"Gulshan-1"
                           },
                           {
                              "id":1033,
                              "postcode_id":418,
                              "name":"Gulshan-2",
                              "value":"Gulshan-2"
                           },
                           {
                              "id":1034,
                              "postcode_id":418,
                              "name":"Gupi para",
                              "value":"Gupi para"
                           },
                           {
                              "id":1035,
                              "postcode_id":418,
                              "name":"Jagonnath Pur",
                              "value":"Jagonnath Pur"
                           },
                           {
                              "id":1036,
                              "postcode_id":418,
                              "name":"Jamuna future Park",
                              "value":"Jamuna future Park"
                           },
                           {
                              "id":1037,
                              "postcode_id":418,
                              "name":"Jourshara and Lichu Bagan",
                              "value":"Jourshara and Lichu Bagan"
                           },
                           {
                              "id":1038,
                              "postcode_id":418,
                              "name":"Kalachad pur and Norda",
                              "value":"Kalachad pur and Norda"
                           },
                           {
                              "id":1039,
                              "postcode_id":418,
                              "name":"Kalachandpur",
                              "value":"Kalachandpur"
                           },
                           {
                              "id":1040,
                              "postcode_id":418,
                              "name":"Khilbarir take",
                              "value":"Khilbarir take"
                           },
                           {
                              "id":1041,
                              "postcode_id":418,
                              "name":"Kuril ",
                              "value":"Kuril "
                           },
                           {
                              "id":1042,
                              "postcode_id":418,
                              "name":"Kuril Bisso Road",
                              "value":"Kuril Bisso Road"
                           },
                           {
                              "id":1043,
                              "postcode_id":418,
                              "name":"Kuril Chaurasta",
                              "value":"Kuril Chaurasta"
                           },
                           {
                              "id":1044,
                              "postcode_id":418,
                              "name":"Kuril Ghatpar",
                              "value":"Kuril Ghatpar"
                           },
                           {
                              "id":1045,
                              "postcode_id":418,
                              "name":"Link Road",
                              "value":"Link Road"
                           },
                           {
                              "id":1046,
                              "postcode_id":418,
                              "name":"Marul Badda",
                              "value":"Marul Badda"
                           },
                           {
                              "id":1047,
                              "postcode_id":418,
                              "name":"Middle Badda",
                              "value":"Middle Badda"
                           },
                           {
                              "id":1048,
                              "postcode_id":418,
                              "name":"Moinar bag",
                              "value":"Moinar bag"
                           },
                           {
                              "id":1049,
                              "postcode_id":418,
                              "name":"Norda",
                              "value":"Norda"
                           },
                           {
                              "id":1050,
                              "postcode_id":418,
                              "name":"North Badda",
                              "value":"North Badda"
                           },
                           {
                              "id":1051,
                              "postcode_id":418,
                              "name":"Notun Bazar",
                              "value":"Notun Bazar"
                           },
                           {
                              "id":1052,
                              "postcode_id":418,
                              "name":"Nurerchala",
                              "value":"Nurerchala"
                           },
                           {
                              "id":1053,
                              "postcode_id":418,
                              "name":"Pakistan embassy",
                              "value":"Pakistan embassy"
                           },
                           {
                              "id":1054,
                              "postcode_id":418,
                              "name":"Police plaza",
                              "value":"Police plaza"
                           },
                           {
                              "id":1055,
                              "postcode_id":418,
                              "name":"Post office road",
                              "value":"Post office road"
                           },
                           {
                              "id":1056,
                              "postcode_id":418,
                              "name":"Purba Anchol Road",
                              "value":"Purba Anchol Road"
                           },
                           {
                              "id":1057,
                              "postcode_id":418,
                              "name":"Sayed nagor",
                              "value":"Sayed nagor"
                           },
                           {
                              "id":1058,
                              "postcode_id":418,
                              "name":"Shadhinota sharoni",
                              "value":"Shadhinota sharoni"
                           },
                           {
                              "id":1059,
                              "postcode_id":418,
                              "name":"Shahjadpur",
                              "value":"Shahjadpur"
                           },
                           {
                              "id":1060,
                              "postcode_id":418,
                              "name":"Shajadpur East",
                              "value":"Shajadpur East"
                           },
                           {
                              "id":1061,
                              "postcode_id":418,
                              "name":"Shatar Kul",
                              "value":"Shatar Kul"
                           },
                           {
                              "id":1062,
                              "postcode_id":418,
                              "name":"Shatarkul",
                              "value":"Shatarkul"
                           },
                           {
                              "id":1063,
                              "postcode_id":418,
                              "name":"Shubastu najor velly",
                              "value":"Shubastu najor velly"
                           },
                           {
                              "id":1064,
                              "postcode_id":418,
                              "name":"Soilmaid",
                              "value":"Soilmaid"
                           },
                           {
                              "id":1065,
                              "postcode_id":418,
                              "name":"South Badda",
                              "value":"South Badda"
                           },
                           {
                              "id":1066,
                              "postcode_id":418,
                              "name":"Ulon",
                              "value":"Ulon"
                           },
                           {
                              "id":1067,
                              "postcode_id":418,
                              "name":"United hospital ",
                              "value":"United hospital "
                           },
                           {
                              "id":1068,
                              "postcode_id":418,
                              "name":"Vatara",
                              "value":"Vatara"
                           },
                           {
                              "id":1069,
                              "postcode_id":419,
                              "name":"Abujar bafari gali",
                              "value":"Abujar bafari gali"
                           },
                           {
                              "id":1070,
                              "postcode_id":419,
                              "name":"Ansar Camp(Moghbazar)",
                              "value":"Ansar Camp(Moghbazar)"
                           },
                           {
                              "id":1071,
                              "postcode_id":419,
                              "name":"Baily Road",
                              "value":"Baily Road"
                           },
                           {
                              "id":1072,
                              "postcode_id":419,
                              "name":"Bata gali",
                              "value":"Bata gali"
                           },
                           {
                              "id":1073,
                              "postcode_id":419,
                              "name":"BG Press",
                              "value":"BG Press"
                           },
                           {
                              "id":1074,
                              "postcode_id":419,
                              "name":"Biam Auditorium",
                              "value":"Biam Auditorium"
                           },
                           {
                              "id":1075,
                              "postcode_id":419,
                              "name":"Boro Moghbazar",
                              "value":"Boro Moghbazar"
                           },
                           {
                              "id":1076,
                              "postcode_id":419,
                              "name":"Channel 24",
                              "value":"Channel 24"
                           },
                           {
                              "id":1077,
                              "postcode_id":419,
                              "name":"Chowdhury Para",
                              "value":"Chowdhury Para"
                           },
                           {
                              "id":1078,
                              "postcode_id":419,
                              "name":"Dillu road",
                              "value":"Dillu road"
                           },
                           {
                              "id":1079,
                              "postcode_id":419,
                              "name":"Hazari bari",
                              "value":"Hazari bari"
                           },
                           {
                              "id":1080,
                              "postcode_id":419,
                              "name":"Imam bag",
                              "value":"Imam bag"
                           },
                           {
                              "id":1081,
                              "postcode_id":419,
                              "name":"Kamalapur",
                              "value":"Kamalapur"
                           },
                           {
                              "id":1082,
                              "postcode_id":419,
                              "name":"Kazi office r gali",
                              "value":"Kazi office r gali"
                           },
                           {
                              "id":1083,
                              "postcode_id":419,
                              "name":"Mailbag 1st line",
                              "value":"Mailbag 1st line"
                           },
                           {
                              "id":1084,
                              "postcode_id":419,
                              "name":"Malibag Chowdhuripara",
                              "value":"Malibag Chowdhuripara"
                           },
                           {
                              "id":1085,
                              "postcode_id":419,
                              "name":"Mintu Road",
                              "value":"Mintu Road"
                           },
                           {
                              "id":1086,
                              "postcode_id":419,
                              "name":"Modhubag",
                              "value":"Modhubag"
                           },
                           {
                              "id":1087,
                              "postcode_id":419,
                              "name":"Mogbazar",
                              "value":"Mogbazar"
                           },
                           {
                              "id":1088,
                              "postcode_id":419,
                              "name":"Moghbazar",
                              "value":"Moghbazar"
                           },
                           {
                              "id":1089,
                              "postcode_id":419,
                              "name":"Mouchak",
                              "value":"Mouchak"
                           },
                           {
                              "id":1090,
                              "postcode_id":419,
                              "name":"Noyatola",
                              "value":"Noyatola"
                           },
                           {
                              "id":1091,
                              "postcode_id":419,
                              "name":"Paglamajar gali",
                              "value":"Paglamajar gali"
                           },
                           {
                              "id":1092,
                              "postcode_id":419,
                              "name":"Rajarbag",
                              "value":"Rajarbag"
                           },
                           {
                              "id":1093,
                              "postcode_id":419,
                              "name":"Roma Century ",
                              "value":"Roma Century "
                           },
                           {
                              "id":1094,
                              "postcode_id":419,
                              "name":"Santibag",
                              "value":"Santibag"
                           },
                           {
                              "id":1095,
                              "postcode_id":419,
                              "name":"Shahidbag",
                              "value":"Shahidbag"
                           },
                           {
                              "id":1096,
                              "postcode_id":419,
                              "name":"Shahjanpur",
                              "value":"Shahjanpur"
                           },
                           {
                              "id":1097,
                              "postcode_id":419,
                              "name":"Shajahanpur",
                              "value":"Shajahanpur"
                           },
                           {
                              "id":1098,
                              "postcode_id":419,
                              "name":"Shantinagar",
                              "value":"Shantinagar"
                           },
                           {
                              "id":1099,
                              "postcode_id":419,
                              "name":"Sheron bag",
                              "value":"Sheron bag"
                           },
                           {
                              "id":1100,
                              "postcode_id":419,
                              "name":"Shideshwari",
                              "value":"Shideshwari"
                           },
                           {
                              "id":1101,
                              "postcode_id":419,
                              "name":"Siddiq master dhal",
                              "value":"Siddiq master dhal"
                           },
                           {
                              "id":1102,
                              "postcode_id":419,
                              "name":"Sismohol",
                              "value":"Sismohol"
                           },
                           {
                              "id":1103,
                              "postcode_id":419,
                              "name":"Wreless gate",
                              "value":"Wreless gate"
                           },
                           {
                              "id":1104,
                              "postcode_id":420,
                              "name":"Abul Hotel",
                              "value":"Abul Hotel"
                           },
                           {
                              "id":1105,
                              "postcode_id":420,
                              "name":"Aftab Nagar",
                              "value":"Aftab Nagar"
                           },
                           {
                              "id":1106,
                              "postcode_id":420,
                              "name":"Aftab nagor Block A to G",
                              "value":"Aftab nagor Block A to G"
                           },
                           {
                              "id":1107,
                              "postcode_id":420,
                              "name":"Baganbari",
                              "value":"Baganbari"
                           },
                           {
                              "id":1108,
                              "postcode_id":420,
                              "name":"Banasree",
                              "value":"Banasree"
                           },
                           {
                              "id":1109,
                              "postcode_id":420,
                              "name":"Bepari gali",
                              "value":"Bepari gali"
                           },
                           {
                              "id":1110,
                              "postcode_id":420,
                              "name":"DIT Project",
                              "value":"DIT Project"
                           },
                           {
                              "id":1111,
                              "postcode_id":420,
                              "name":"East Goran",
                              "value":"East Goran"
                           },
                           {
                              "id":1112,
                              "postcode_id":420,
                              "name":"East Rumpura",
                              "value":"East Rumpura"
                           },
                           {
                              "id":1113,
                              "postcode_id":420,
                              "name":"Gulbag",
                              "value":"Gulbag"
                           },
                           {
                              "id":1114,
                              "postcode_id":420,
                              "name":"Hazipara",
                              "value":"Hazipara"
                           },
                           {
                              "id":1115,
                              "postcode_id":420,
                              "name":"Khilgaon Block A",
                              "value":"Khilgaon Block A"
                           },
                           {
                              "id":1116,
                              "postcode_id":420,
                              "name":"Khilgaon Block B",
                              "value":"Khilgaon Block B"
                           },
                           {
                              "id":1117,
                              "postcode_id":420,
                              "name":"Khilgaon Block C",
                              "value":"Khilgaon Block C"
                           },
                           {
                              "id":1118,
                              "postcode_id":420,
                              "name":"Khilgaon Taltola",
                              "value":"Khilgaon Taltola"
                           },
                           {
                              "id":1119,
                              "postcode_id":420,
                              "name":"Meradia",
                              "value":"Meradia"
                           },
                           {
                              "id":1120,
                              "postcode_id":420,
                              "name":"Mohanagor Project",
                              "value":"Mohanagor Project"
                           },
                           {
                              "id":1121,
                              "postcode_id":420,
                              "name":"Mohanogor Project",
                              "value":"Mohanogor Project"
                           },
                           {
                              "id":1122,
                              "postcode_id":420,
                              "name":"Nobin Bag",
                              "value":"Nobin Bag"
                           },
                           {
                              "id":1123,
                              "postcode_id":420,
                              "name":"North Goran",
                              "value":"North Goran"
                           },
                           {
                              "id":1124,
                              "postcode_id":420,
                              "name":"Peyarabag",
                              "value":"Peyarabag"
                           },
                           {
                              "id":1125,
                              "postcode_id":420,
                              "name":"Pollima",
                              "value":"Pollima"
                           },
                           {
                              "id":1126,
                              "postcode_id":420,
                              "name":"Provati bag",
                              "value":"Provati bag"
                           },
                           {
                              "id":1127,
                              "postcode_id":420,
                              "name":"Rampura",
                              "value":"Rampura"
                           },
                           {
                              "id":1128,
                              "postcode_id":420,
                              "name":"Rampura Banassre",
                              "value":"Rampura Banassre"
                           },
                           {
                              "id":1129,
                              "postcode_id":420,
                              "name":"Rampura Bazar",
                              "value":"Rampura Bazar"
                           },
                           {
                              "id":1130,
                              "postcode_id":420,
                              "name":"Rampura Hazipara",
                              "value":"Rampura Hazipara"
                           },
                           {
                              "id":1131,
                              "postcode_id":420,
                              "name":"Shipahibag",
                              "value":"Shipahibag"
                           },
                           {
                              "id":1132,
                              "postcode_id":420,
                              "name":"Sipahi bag",
                              "value":"Sipahi bag"
                           },
                           {
                              "id":1133,
                              "postcode_id":420,
                              "name":"South Banassre",
                              "value":"South Banassre"
                           },
                           {
                              "id":1134,
                              "postcode_id":420,
                              "name":"South Goran",
                              "value":"South Goran"
                           },
                           {
                              "id":1135,
                              "postcode_id":420,
                              "name":"Tilpa Para",
                              "value":"Tilpa Para"
                           },
                           {
                              "id":1136,
                              "postcode_id":420,
                              "name":"Uttorpara",
                              "value":"Uttorpara"
                           },
                           {
                              "id":1137,
                              "postcode_id":420,
                              "name":"West mailbag",
                              "value":"West mailbag"
                           },
                           {
                              "id":1138,
                              "postcode_id":420,
                              "name":"West Rampura",
                              "value":"West Rampura"
                           },
                           {
                              "id":1139,
                              "postcode_id":420,
                              "name":"West Rumpura",
                              "value":"West Rumpura"
                           },
                           {
                              "id":1140,
                              "postcode_id":421,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":1141,
                              "postcode_id":421,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":1142,
                              "postcode_id":421,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":1143,
                              "postcode_id":421,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":1144,
                              "postcode_id":421,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":1145,
                              "postcode_id":421,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":1146,
                              "postcode_id":421,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":1147,
                              "postcode_id":421,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":1148,
                              "postcode_id":421,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":1149,
                              "postcode_id":421,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":1150,
                              "postcode_id":421,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":1151,
                              "postcode_id":421,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":1152,
                              "postcode_id":421,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":1153,
                              "postcode_id":421,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":1154,
                              "postcode_id":421,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":1155,
                              "postcode_id":421,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":1156,
                              "postcode_id":421,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":1157,
                              "postcode_id":421,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":1158,
                              "postcode_id":421,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":1159,
                              "postcode_id":421,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":1160,
                              "postcode_id":421,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":1161,
                              "postcode_id":421,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":1162,
                              "postcode_id":421,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":1163,
                              "postcode_id":421,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":1164,
                              "postcode_id":421,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":1165,
                              "postcode_id":421,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":1166,
                              "postcode_id":421,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":1167,
                              "postcode_id":421,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":1168,
                              "postcode_id":421,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":1169,
                              "postcode_id":421,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":1170,
                              "postcode_id":421,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":1171,
                              "postcode_id":421,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":1172,
                              "postcode_id":421,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":1173,
                              "postcode_id":421,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":1174,
                              "postcode_id":421,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":1175,
                              "postcode_id":421,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":1176,
                              "postcode_id":421,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":1177,
                              "postcode_id":421,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":1178,
                              "postcode_id":421,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":1179,
                              "postcode_id":421,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":1180,
                              "postcode_id":421,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":1181,
                              "postcode_id":421,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":1182,
                              "postcode_id":421,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":1183,
                              "postcode_id":421,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":1184,
                              "postcode_id":421,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":1185,
                              "postcode_id":421,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":1186,
                              "postcode_id":421,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":1187,
                              "postcode_id":421,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":1188,
                              "postcode_id":421,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":1189,
                              "postcode_id":421,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":1190,
                              "postcode_id":421,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":1191,
                              "postcode_id":421,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":1192,
                              "postcode_id":421,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":1193,
                              "postcode_id":421,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":1194,
                              "postcode_id":422,
                              "name":"Abul Hotel",
                              "value":"Abul Hotel"
                           },
                           {
                              "id":1195,
                              "postcode_id":422,
                              "name":"Aftab Nagar",
                              "value":"Aftab Nagar"
                           },
                           {
                              "id":1196,
                              "postcode_id":422,
                              "name":"Aftab nagor Block A to G",
                              "value":"Aftab nagor Block A to G"
                           },
                           {
                              "id":1197,
                              "postcode_id":422,
                              "name":"Baganbari",
                              "value":"Baganbari"
                           },
                           {
                              "id":1198,
                              "postcode_id":422,
                              "name":"Banasree",
                              "value":"Banasree"
                           },
                           {
                              "id":1199,
                              "postcode_id":422,
                              "name":"Bepari gali",
                              "value":"Bepari gali"
                           },
                           {
                              "id":1200,
                              "postcode_id":422,
                              "name":"DIT Project",
                              "value":"DIT Project"
                           },
                           {
                              "id":1201,
                              "postcode_id":422,
                              "name":"East Goran",
                              "value":"East Goran"
                           },
                           {
                              "id":1202,
                              "postcode_id":422,
                              "name":"East Rumpura",
                              "value":"East Rumpura"
                           },
                           {
                              "id":1203,
                              "postcode_id":422,
                              "name":"Gulbag",
                              "value":"Gulbag"
                           },
                           {
                              "id":1204,
                              "postcode_id":422,
                              "name":"Hazipara",
                              "value":"Hazipara"
                           },
                           {
                              "id":1205,
                              "postcode_id":422,
                              "name":"Khilgaon Block A",
                              "value":"Khilgaon Block A"
                           },
                           {
                              "id":1206,
                              "postcode_id":422,
                              "name":"Khilgaon Block B",
                              "value":"Khilgaon Block B"
                           },
                           {
                              "id":1207,
                              "postcode_id":422,
                              "name":"Khilgaon Block C",
                              "value":"Khilgaon Block C"
                           },
                           {
                              "id":1208,
                              "postcode_id":422,
                              "name":"Khilgaon Taltola",
                              "value":"Khilgaon Taltola"
                           },
                           {
                              "id":1209,
                              "postcode_id":422,
                              "name":"Meradia",
                              "value":"Meradia"
                           },
                           {
                              "id":1210,
                              "postcode_id":422,
                              "name":"Mohanagor Project",
                              "value":"Mohanagor Project"
                           },
                           {
                              "id":1211,
                              "postcode_id":422,
                              "name":"Mohanogor Project",
                              "value":"Mohanogor Project"
                           },
                           {
                              "id":1212,
                              "postcode_id":422,
                              "name":"Nobin Bag",
                              "value":"Nobin Bag"
                           },
                           {
                              "id":1213,
                              "postcode_id":422,
                              "name":"North Goran",
                              "value":"North Goran"
                           },
                           {
                              "id":1214,
                              "postcode_id":422,
                              "name":"Peyarabag",
                              "value":"Peyarabag"
                           },
                           {
                              "id":1215,
                              "postcode_id":422,
                              "name":"Pollima",
                              "value":"Pollima"
                           },
                           {
                              "id":1216,
                              "postcode_id":422,
                              "name":"Provati bag",
                              "value":"Provati bag"
                           },
                           {
                              "id":1217,
                              "postcode_id":422,
                              "name":"Rampura",
                              "value":"Rampura"
                           },
                           {
                              "id":1218,
                              "postcode_id":422,
                              "name":"Rampura Banassre",
                              "value":"Rampura Banassre"
                           },
                           {
                              "id":1219,
                              "postcode_id":422,
                              "name":"Rampura Bazar",
                              "value":"Rampura Bazar"
                           },
                           {
                              "id":1220,
                              "postcode_id":422,
                              "name":"Rampura Hazipara",
                              "value":"Rampura Hazipara"
                           },
                           {
                              "id":1221,
                              "postcode_id":422,
                              "name":"Shipahibag",
                              "value":"Shipahibag"
                           },
                           {
                              "id":1222,
                              "postcode_id":422,
                              "name":"Sipahi bag",
                              "value":"Sipahi bag"
                           },
                           {
                              "id":1223,
                              "postcode_id":422,
                              "name":"South Banassre",
                              "value":"South Banassre"
                           },
                           {
                              "id":1224,
                              "postcode_id":422,
                              "name":"South Goran",
                              "value":"South Goran"
                           },
                           {
                              "id":1225,
                              "postcode_id":422,
                              "name":"Tilpa Para",
                              "value":"Tilpa Para"
                           },
                           {
                              "id":1226,
                              "postcode_id":422,
                              "name":"Uttorpara",
                              "value":"Uttorpara"
                           },
                           {
                              "id":1227,
                              "postcode_id":422,
                              "name":"West mailbag",
                              "value":"West mailbag"
                           },
                           {
                              "id":1228,
                              "postcode_id":422,
                              "name":"West Rampura",
                              "value":"West Rampura"
                           },
                           {
                              "id":1229,
                              "postcode_id":422,
                              "name":"West Rumpura",
                              "value":"West Rumpura"
                           },
                           {
                              "id":1230,
                              "postcode_id":423,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":1231,
                              "postcode_id":423,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":1232,
                              "postcode_id":423,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":1233,
                              "postcode_id":423,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":1234,
                              "postcode_id":423,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":1235,
                              "postcode_id":423,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":1236,
                              "postcode_id":423,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":1237,
                              "postcode_id":423,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":1238,
                              "postcode_id":423,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":1239,
                              "postcode_id":423,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":1240,
                              "postcode_id":423,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":1241,
                              "postcode_id":423,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":1242,
                              "postcode_id":423,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":1243,
                              "postcode_id":423,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":1244,
                              "postcode_id":423,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":1245,
                              "postcode_id":423,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":1246,
                              "postcode_id":423,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":1247,
                              "postcode_id":423,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":1248,
                              "postcode_id":423,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":1249,
                              "postcode_id":423,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":1250,
                              "postcode_id":423,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":1251,
                              "postcode_id":423,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":1252,
                              "postcode_id":423,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":1253,
                              "postcode_id":423,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":1254,
                              "postcode_id":423,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":1255,
                              "postcode_id":423,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":1256,
                              "postcode_id":423,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":1257,
                              "postcode_id":423,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":1258,
                              "postcode_id":423,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":1259,
                              "postcode_id":423,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":1260,
                              "postcode_id":423,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":1261,
                              "postcode_id":423,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":1262,
                              "postcode_id":423,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":1263,
                              "postcode_id":423,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":1264,
                              "postcode_id":423,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":1265,
                              "postcode_id":423,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":1266,
                              "postcode_id":423,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":1267,
                              "postcode_id":423,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":1268,
                              "postcode_id":423,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":1269,
                              "postcode_id":423,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":1270,
                              "postcode_id":423,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":1271,
                              "postcode_id":423,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":1272,
                              "postcode_id":423,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":1273,
                              "postcode_id":423,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":1274,
                              "postcode_id":423,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":1275,
                              "postcode_id":423,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":1276,
                              "postcode_id":423,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":1277,
                              "postcode_id":423,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":1278,
                              "postcode_id":423,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":1279,
                              "postcode_id":423,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":1280,
                              "postcode_id":423,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":1281,
                              "postcode_id":423,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":1282,
                              "postcode_id":423,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":1283,
                              "postcode_id":423,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":1284,
                              "postcode_id":424,
                              "name":"Abujar bafari gali",
                              "value":"Abujar bafari gali"
                           },
                           {
                              "id":1285,
                              "postcode_id":424,
                              "name":"Ansar Camp(Moghbazar)",
                              "value":"Ansar Camp(Moghbazar)"
                           },
                           {
                              "id":1286,
                              "postcode_id":424,
                              "name":"Baily Road",
                              "value":"Baily Road"
                           },
                           {
                              "id":1287,
                              "postcode_id":424,
                              "name":"Bata gali",
                              "value":"Bata gali"
                           },
                           {
                              "id":1288,
                              "postcode_id":424,
                              "name":"BG Press",
                              "value":"BG Press"
                           },
                           {
                              "id":1289,
                              "postcode_id":424,
                              "name":"Biam Auditorium",
                              "value":"Biam Auditorium"
                           },
                           {
                              "id":1290,
                              "postcode_id":424,
                              "name":"Boro Moghbazar",
                              "value":"Boro Moghbazar"
                           },
                           {
                              "id":1291,
                              "postcode_id":424,
                              "name":"Channel 24",
                              "value":"Channel 24"
                           },
                           {
                              "id":1292,
                              "postcode_id":424,
                              "name":"Chowdhury Para",
                              "value":"Chowdhury Para"
                           },
                           {
                              "id":1293,
                              "postcode_id":424,
                              "name":"Dillu road",
                              "value":"Dillu road"
                           },
                           {
                              "id":1294,
                              "postcode_id":424,
                              "name":"Hazari bari",
                              "value":"Hazari bari"
                           },
                           {
                              "id":1295,
                              "postcode_id":424,
                              "name":"Imam bag",
                              "value":"Imam bag"
                           },
                           {
                              "id":1296,
                              "postcode_id":424,
                              "name":"Kamalapur",
                              "value":"Kamalapur"
                           },
                           {
                              "id":1297,
                              "postcode_id":424,
                              "name":"Kazi office r gali",
                              "value":"Kazi office r gali"
                           },
                           {
                              "id":1298,
                              "postcode_id":424,
                              "name":"Mailbag 1st line",
                              "value":"Mailbag 1st line"
                           },
                           {
                              "id":1299,
                              "postcode_id":424,
                              "name":"Malibag Chowdhuripara",
                              "value":"Malibag Chowdhuripara"
                           },
                           {
                              "id":1300,
                              "postcode_id":424,
                              "name":"Mintu Road",
                              "value":"Mintu Road"
                           },
                           {
                              "id":1301,
                              "postcode_id":424,
                              "name":"Modhubag",
                              "value":"Modhubag"
                           },
                           {
                              "id":1302,
                              "postcode_id":424,
                              "name":"Mogbazar",
                              "value":"Mogbazar"
                           },
                           {
                              "id":1303,
                              "postcode_id":424,
                              "name":"Moghbazar",
                              "value":"Moghbazar"
                           },
                           {
                              "id":1304,
                              "postcode_id":424,
                              "name":"Mouchak",
                              "value":"Mouchak"
                           },
                           {
                              "id":1305,
                              "postcode_id":424,
                              "name":"Noyatola",
                              "value":"Noyatola"
                           },
                           {
                              "id":1306,
                              "postcode_id":424,
                              "name":"Paglamajar gali",
                              "value":"Paglamajar gali"
                           },
                           {
                              "id":1307,
                              "postcode_id":424,
                              "name":"Rajarbag",
                              "value":"Rajarbag"
                           },
                           {
                              "id":1308,
                              "postcode_id":424,
                              "name":"Roma Century ",
                              "value":"Roma Century "
                           },
                           {
                              "id":1309,
                              "postcode_id":424,
                              "name":"Santibag",
                              "value":"Santibag"
                           },
                           {
                              "id":1310,
                              "postcode_id":424,
                              "name":"Shahidbag",
                              "value":"Shahidbag"
                           },
                           {
                              "id":1311,
                              "postcode_id":424,
                              "name":"Shahjanpur",
                              "value":"Shahjanpur"
                           },
                           {
                              "id":1312,
                              "postcode_id":424,
                              "name":"Shajahanpur",
                              "value":"Shajahanpur"
                           },
                           {
                              "id":1313,
                              "postcode_id":424,
                              "name":"Shantinagar",
                              "value":"Shantinagar"
                           },
                           {
                              "id":1314,
                              "postcode_id":424,
                              "name":"Sheron bag",
                              "value":"Sheron bag"
                           },
                           {
                              "id":1315,
                              "postcode_id":424,
                              "name":"Shideshwari",
                              "value":"Shideshwari"
                           },
                           {
                              "id":1316,
                              "postcode_id":424,
                              "name":"Siddiq master dhal",
                              "value":"Siddiq master dhal"
                           },
                           {
                              "id":1317,
                              "postcode_id":424,
                              "name":"Sismohol",
                              "value":"Sismohol"
                           },
                           {
                              "id":1318,
                              "postcode_id":424,
                              "name":"Wreless gate",
                              "value":"Wreless gate"
                           },
                           {
                              "id":1319,
                              "postcode_id":425,
                              "name":"Abujar bafari gali",
                              "value":"Abujar bafari gali"
                           },
                           {
                              "id":1320,
                              "postcode_id":425,
                              "name":"Ansar Camp(Moghbazar)",
                              "value":"Ansar Camp(Moghbazar)"
                           },
                           {
                              "id":1321,
                              "postcode_id":425,
                              "name":"Baily Road",
                              "value":"Baily Road"
                           },
                           {
                              "id":1322,
                              "postcode_id":425,
                              "name":"Bata gali",
                              "value":"Bata gali"
                           },
                           {
                              "id":1323,
                              "postcode_id":425,
                              "name":"BG Press",
                              "value":"BG Press"
                           },
                           {
                              "id":1324,
                              "postcode_id":425,
                              "name":"Biam Auditorium",
                              "value":"Biam Auditorium"
                           },
                           {
                              "id":1325,
                              "postcode_id":425,
                              "name":"Boro Moghbazar",
                              "value":"Boro Moghbazar"
                           },
                           {
                              "id":1326,
                              "postcode_id":425,
                              "name":"Channel 24",
                              "value":"Channel 24"
                           },
                           {
                              "id":1327,
                              "postcode_id":425,
                              "name":"Chowdhury Para",
                              "value":"Chowdhury Para"
                           },
                           {
                              "id":1328,
                              "postcode_id":425,
                              "name":"Dillu road",
                              "value":"Dillu road"
                           },
                           {
                              "id":1329,
                              "postcode_id":425,
                              "name":"Hazari bari",
                              "value":"Hazari bari"
                           },
                           {
                              "id":1330,
                              "postcode_id":425,
                              "name":"Imam bag",
                              "value":"Imam bag"
                           },
                           {
                              "id":1331,
                              "postcode_id":425,
                              "name":"Kamalapur",
                              "value":"Kamalapur"
                           },
                           {
                              "id":1332,
                              "postcode_id":425,
                              "name":"Kazi office r gali",
                              "value":"Kazi office r gali"
                           },
                           {
                              "id":1333,
                              "postcode_id":425,
                              "name":"Mailbag 1st line",
                              "value":"Mailbag 1st line"
                           },
                           {
                              "id":1334,
                              "postcode_id":425,
                              "name":"Malibag Chowdhuripara",
                              "value":"Malibag Chowdhuripara"
                           },
                           {
                              "id":1335,
                              "postcode_id":425,
                              "name":"Mintu Road",
                              "value":"Mintu Road"
                           },
                           {
                              "id":1336,
                              "postcode_id":425,
                              "name":"Modhubag",
                              "value":"Modhubag"
                           },
                           {
                              "id":1337,
                              "postcode_id":425,
                              "name":"Mogbazar",
                              "value":"Mogbazar"
                           },
                           {
                              "id":1338,
                              "postcode_id":425,
                              "name":"Moghbazar",
                              "value":"Moghbazar"
                           },
                           {
                              "id":1339,
                              "postcode_id":425,
                              "name":"Mouchak",
                              "value":"Mouchak"
                           },
                           {
                              "id":1340,
                              "postcode_id":425,
                              "name":"Noyatola",
                              "value":"Noyatola"
                           },
                           {
                              "id":1341,
                              "postcode_id":425,
                              "name":"Paglamajar gali",
                              "value":"Paglamajar gali"
                           },
                           {
                              "id":1342,
                              "postcode_id":425,
                              "name":"Rajarbag",
                              "value":"Rajarbag"
                           },
                           {
                              "id":1343,
                              "postcode_id":425,
                              "name":"Roma Century ",
                              "value":"Roma Century "
                           },
                           {
                              "id":1344,
                              "postcode_id":425,
                              "name":"Santibag",
                              "value":"Santibag"
                           },
                           {
                              "id":1345,
                              "postcode_id":425,
                              "name":"Shahidbag",
                              "value":"Shahidbag"
                           },
                           {
                              "id":1346,
                              "postcode_id":425,
                              "name":"Shahjanpur",
                              "value":"Shahjanpur"
                           },
                           {
                              "id":1347,
                              "postcode_id":425,
                              "name":"Shajahanpur",
                              "value":"Shajahanpur"
                           },
                           {
                              "id":1348,
                              "postcode_id":425,
                              "name":"Shantinagar",
                              "value":"Shantinagar"
                           },
                           {
                              "id":1349,
                              "postcode_id":425,
                              "name":"Sheron bag",
                              "value":"Sheron bag"
                           },
                           {
                              "id":1350,
                              "postcode_id":425,
                              "name":"Shideshwari",
                              "value":"Shideshwari"
                           },
                           {
                              "id":1351,
                              "postcode_id":425,
                              "name":"Siddiq master dhal",
                              "value":"Siddiq master dhal"
                           },
                           {
                              "id":1352,
                              "postcode_id":425,
                              "name":"Sismohol",
                              "value":"Sismohol"
                           },
                           {
                              "id":1353,
                              "postcode_id":425,
                              "name":"Wreless gate",
                              "value":"Wreless gate"
                           },
                           {
                              "id":1354,
                              "postcode_id":426,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":1355,
                              "postcode_id":426,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":1356,
                              "postcode_id":426,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":1357,
                              "postcode_id":426,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":1358,
                              "postcode_id":426,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":1359,
                              "postcode_id":426,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":1360,
                              "postcode_id":426,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":1361,
                              "postcode_id":426,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":1362,
                              "postcode_id":426,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":1363,
                              "postcode_id":426,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":1364,
                              "postcode_id":426,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":1365,
                              "postcode_id":426,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":1366,
                              "postcode_id":426,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":1367,
                              "postcode_id":426,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":1368,
                              "postcode_id":426,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":1369,
                              "postcode_id":426,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":1370,
                              "postcode_id":426,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":1371,
                              "postcode_id":426,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":1372,
                              "postcode_id":426,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":1373,
                              "postcode_id":426,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":1374,
                              "postcode_id":426,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":1375,
                              "postcode_id":426,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":1376,
                              "postcode_id":426,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":1377,
                              "postcode_id":426,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":1378,
                              "postcode_id":426,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":1379,
                              "postcode_id":426,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":1380,
                              "postcode_id":426,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":1381,
                              "postcode_id":426,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":1382,
                              "postcode_id":426,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":1383,
                              "postcode_id":426,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":1384,
                              "postcode_id":426,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":1385,
                              "postcode_id":426,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":1386,
                              "postcode_id":426,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":1387,
                              "postcode_id":426,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":1388,
                              "postcode_id":426,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":1389,
                              "postcode_id":426,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":1390,
                              "postcode_id":426,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":1391,
                              "postcode_id":426,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":1392,
                              "postcode_id":426,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":1393,
                              "postcode_id":426,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":1394,
                              "postcode_id":426,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":1395,
                              "postcode_id":426,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":1396,
                              "postcode_id":426,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":1397,
                              "postcode_id":426,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":1398,
                              "postcode_id":426,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":1399,
                              "postcode_id":426,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":1400,
                              "postcode_id":426,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":1401,
                              "postcode_id":426,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":1402,
                              "postcode_id":426,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":1403,
                              "postcode_id":426,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":1404,
                              "postcode_id":426,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":1405,
                              "postcode_id":426,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":1406,
                              "postcode_id":426,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":1407,
                              "postcode_id":426,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":1408,
                              "postcode_id":427,
                              "name":"Abul Hotel",
                              "value":"Abul Hotel"
                           },
                           {
                              "id":1409,
                              "postcode_id":427,
                              "name":"Aftab Nagar",
                              "value":"Aftab Nagar"
                           },
                           {
                              "id":1410,
                              "postcode_id":427,
                              "name":"Aftab nagor Block A to G",
                              "value":"Aftab nagor Block A to G"
                           },
                           {
                              "id":1411,
                              "postcode_id":427,
                              "name":"Baganbari",
                              "value":"Baganbari"
                           },
                           {
                              "id":1412,
                              "postcode_id":427,
                              "name":"Banasree",
                              "value":"Banasree"
                           },
                           {
                              "id":1413,
                              "postcode_id":427,
                              "name":"Bepari gali",
                              "value":"Bepari gali"
                           },
                           {
                              "id":1414,
                              "postcode_id":427,
                              "name":"DIT Project",
                              "value":"DIT Project"
                           },
                           {
                              "id":1415,
                              "postcode_id":427,
                              "name":"East Goran",
                              "value":"East Goran"
                           },
                           {
                              "id":1416,
                              "postcode_id":427,
                              "name":"East Rumpura",
                              "value":"East Rumpura"
                           },
                           {
                              "id":1417,
                              "postcode_id":427,
                              "name":"Gulbag",
                              "value":"Gulbag"
                           },
                           {
                              "id":1418,
                              "postcode_id":427,
                              "name":"Hazipara",
                              "value":"Hazipara"
                           },
                           {
                              "id":1419,
                              "postcode_id":427,
                              "name":"Khilgaon Block A",
                              "value":"Khilgaon Block A"
                           },
                           {
                              "id":1420,
                              "postcode_id":427,
                              "name":"Khilgaon Block B",
                              "value":"Khilgaon Block B"
                           },
                           {
                              "id":1421,
                              "postcode_id":427,
                              "name":"Khilgaon Block C",
                              "value":"Khilgaon Block C"
                           },
                           {
                              "id":1422,
                              "postcode_id":427,
                              "name":"Khilgaon Taltola",
                              "value":"Khilgaon Taltola"
                           },
                           {
                              "id":1423,
                              "postcode_id":427,
                              "name":"Meradia",
                              "value":"Meradia"
                           },
                           {
                              "id":1424,
                              "postcode_id":427,
                              "name":"Mohanagor Project",
                              "value":"Mohanagor Project"
                           },
                           {
                              "id":1425,
                              "postcode_id":427,
                              "name":"Mohanogor Project",
                              "value":"Mohanogor Project"
                           },
                           {
                              "id":1426,
                              "postcode_id":427,
                              "name":"Nobin Bag",
                              "value":"Nobin Bag"
                           },
                           {
                              "id":1427,
                              "postcode_id":427,
                              "name":"North Goran",
                              "value":"North Goran"
                           },
                           {
                              "id":1428,
                              "postcode_id":427,
                              "name":"Peyarabag",
                              "value":"Peyarabag"
                           },
                           {
                              "id":1429,
                              "postcode_id":427,
                              "name":"Pollima",
                              "value":"Pollima"
                           },
                           {
                              "id":1430,
                              "postcode_id":427,
                              "name":"Provati bag",
                              "value":"Provati bag"
                           },
                           {
                              "id":1431,
                              "postcode_id":427,
                              "name":"Rampura",
                              "value":"Rampura"
                           },
                           {
                              "id":1432,
                              "postcode_id":427,
                              "name":"Rampura Banassre",
                              "value":"Rampura Banassre"
                           },
                           {
                              "id":1433,
                              "postcode_id":427,
                              "name":"Rampura Bazar",
                              "value":"Rampura Bazar"
                           },
                           {
                              "id":1434,
                              "postcode_id":427,
                              "name":"Rampura Hazipara",
                              "value":"Rampura Hazipara"
                           },
                           {
                              "id":1435,
                              "postcode_id":427,
                              "name":"Shipahibag",
                              "value":"Shipahibag"
                           },
                           {
                              "id":1436,
                              "postcode_id":427,
                              "name":"Sipahi bag",
                              "value":"Sipahi bag"
                           },
                           {
                              "id":1437,
                              "postcode_id":427,
                              "name":"South Banassre",
                              "value":"South Banassre"
                           },
                           {
                              "id":1438,
                              "postcode_id":427,
                              "name":"South Goran",
                              "value":"South Goran"
                           },
                           {
                              "id":1439,
                              "postcode_id":427,
                              "name":"Tilpa Para",
                              "value":"Tilpa Para"
                           },
                           {
                              "id":1440,
                              "postcode_id":427,
                              "name":"Uttorpara",
                              "value":"Uttorpara"
                           },
                           {
                              "id":1441,
                              "postcode_id":427,
                              "name":"West mailbag",
                              "value":"West mailbag"
                           },
                           {
                              "id":1442,
                              "postcode_id":427,
                              "name":"West Rampura",
                              "value":"West Rampura"
                           },
                           {
                              "id":1443,
                              "postcode_id":427,
                              "name":"West Rumpura",
                              "value":"West Rumpura"
                           },
                           {
                              "id":1444,
                              "postcode_id":428,
                              "name":"Abdullah Bag",
                              "value":"Abdullah Bag"
                           },
                           {
                              "id":1445,
                              "postcode_id":428,
                              "name":"Adorsho Nagor",
                              "value":"Adorsho Nagor"
                           },
                           {
                              "id":1446,
                              "postcode_id":428,
                              "name":"Agora",
                              "value":"Agora"
                           },
                           {
                              "id":1447,
                              "postcode_id":428,
                              "name":"Apollo Hospital",
                              "value":"Apollo Hospital"
                           },
                           {
                              "id":1448,
                              "postcode_id":428,
                              "name":"Ashalota, Bonolota",
                              "value":"Ashalota, Bonolota"
                           },
                           {
                              "id":1449,
                              "postcode_id":428,
                              "name":"Aziz Sarani",
                              "value":"Aziz Sarani"
                           },
                           {
                              "id":1450,
                              "postcode_id":428,
                              "name":"Badda",
                              "value":"Badda"
                           },
                           {
                              "id":1451,
                              "postcode_id":428,
                              "name":"Baridhara",
                              "value":"Baridhara"
                           },
                           {
                              "id":1452,
                              "postcode_id":428,
                              "name":"Baridhara Block-J",
                              "value":"Baridhara Block-J"
                           },
                           {
                              "id":1453,
                              "postcode_id":428,
                              "name":"Baridhara DOHS",
                              "value":"Baridhara DOHS"
                           },
                           {
                              "id":1454,
                              "postcode_id":428,
                              "name":"Bashtola",
                              "value":"Bashtola"
                           },
                           {
                              "id":1455,
                              "postcode_id":428,
                              "name":"Bashundhara 300ft",
                              "value":"Bashundhara 300ft"
                           },
                           {
                              "id":1456,
                              "postcode_id":428,
                              "name":"Bashundhara Block  A to L",
                              "value":"Bashundhara Block  A to L"
                           },
                           {
                              "id":1457,
                              "postcode_id":428,
                              "name":"Bashundhara RA",
                              "value":"Bashundhara RA"
                           },
                           {
                              "id":1458,
                              "postcode_id":428,
                              "name":"Coca-cola",
                              "value":"Coca-cola"
                           },
                           {
                              "id":1459,
                              "postcode_id":428,
                              "name":"Comilla Para",
                              "value":"Comilla Para"
                           },
                           {
                              "id":1460,
                              "postcode_id":428,
                              "name":"Dalibari Kachabazar",
                              "value":"Dalibari Kachabazar"
                           },
                           {
                              "id":1461,
                              "postcode_id":428,
                              "name":"Diplomatic Zone",
                              "value":"Diplomatic Zone"
                           },
                           {
                              "id":1462,
                              "postcode_id":428,
                              "name":"Fasertake",
                              "value":"Fasertake"
                           },
                           {
                              "id":1463,
                              "postcode_id":428,
                              "name":"GM Bari",
                              "value":"GM Bari"
                           },
                           {
                              "id":1464,
                              "postcode_id":428,
                              "name":"Gopipara",
                              "value":"Gopipara"
                           },
                           {
                              "id":1465,
                              "postcode_id":428,
                              "name":"Gudara ghat",
                              "value":"Gudara ghat"
                           },
                           {
                              "id":1466,
                              "postcode_id":428,
                              "name":"Gulshan 1",
                              "value":"Gulshan 1"
                           },
                           {
                              "id":1467,
                              "postcode_id":428,
                              "name":"Gulshan 2",
                              "value":"Gulshan 2"
                           },
                           {
                              "id":1468,
                              "postcode_id":428,
                              "name":"Gulshan Arong",
                              "value":"Gulshan Arong"
                           },
                           {
                              "id":1469,
                              "postcode_id":428,
                              "name":"Gulshan Avenue",
                              "value":"Gulshan Avenue"
                           },
                           {
                              "id":1470,
                              "postcode_id":428,
                              "name":"Gulshan-1",
                              "value":"Gulshan-1"
                           },
                           {
                              "id":1471,
                              "postcode_id":428,
                              "name":"Gulshan-2",
                              "value":"Gulshan-2"
                           },
                           {
                              "id":1472,
                              "postcode_id":428,
                              "name":"Gupi para",
                              "value":"Gupi para"
                           },
                           {
                              "id":1473,
                              "postcode_id":428,
                              "name":"Jagonnath Pur",
                              "value":"Jagonnath Pur"
                           },
                           {
                              "id":1474,
                              "postcode_id":428,
                              "name":"Jamuna future Park",
                              "value":"Jamuna future Park"
                           },
                           {
                              "id":1475,
                              "postcode_id":428,
                              "name":"Jourshara and Lichu Bagan",
                              "value":"Jourshara and Lichu Bagan"
                           },
                           {
                              "id":1476,
                              "postcode_id":428,
                              "name":"Kalachad pur and Norda",
                              "value":"Kalachad pur and Norda"
                           },
                           {
                              "id":1477,
                              "postcode_id":428,
                              "name":"Kalachandpur",
                              "value":"Kalachandpur"
                           },
                           {
                              "id":1478,
                              "postcode_id":428,
                              "name":"Khilbarir take",
                              "value":"Khilbarir take"
                           },
                           {
                              "id":1479,
                              "postcode_id":428,
                              "name":"Kuril ",
                              "value":"Kuril "
                           },
                           {
                              "id":1480,
                              "postcode_id":428,
                              "name":"Kuril Bisso Road",
                              "value":"Kuril Bisso Road"
                           },
                           {
                              "id":1481,
                              "postcode_id":428,
                              "name":"Kuril Chaurasta",
                              "value":"Kuril Chaurasta"
                           },
                           {
                              "id":1482,
                              "postcode_id":428,
                              "name":"Kuril Ghatpar",
                              "value":"Kuril Ghatpar"
                           },
                           {
                              "id":1483,
                              "postcode_id":428,
                              "name":"Link Road",
                              "value":"Link Road"
                           },
                           {
                              "id":1484,
                              "postcode_id":428,
                              "name":"Marul Badda",
                              "value":"Marul Badda"
                           },
                           {
                              "id":1485,
                              "postcode_id":428,
                              "name":"Middle Badda",
                              "value":"Middle Badda"
                           },
                           {
                              "id":1486,
                              "postcode_id":428,
                              "name":"Moinar bag",
                              "value":"Moinar bag"
                           },
                           {
                              "id":1487,
                              "postcode_id":428,
                              "name":"Norda",
                              "value":"Norda"
                           },
                           {
                              "id":1488,
                              "postcode_id":428,
                              "name":"North Badda",
                              "value":"North Badda"
                           },
                           {
                              "id":1489,
                              "postcode_id":428,
                              "name":"Notun Bazar",
                              "value":"Notun Bazar"
                           },
                           {
                              "id":1490,
                              "postcode_id":428,
                              "name":"Nurerchala",
                              "value":"Nurerchala"
                           },
                           {
                              "id":1491,
                              "postcode_id":428,
                              "name":"Pakistan embassy",
                              "value":"Pakistan embassy"
                           },
                           {
                              "id":1492,
                              "postcode_id":428,
                              "name":"Police plaza",
                              "value":"Police plaza"
                           },
                           {
                              "id":1493,
                              "postcode_id":428,
                              "name":"Post office road",
                              "value":"Post office road"
                           },
                           {
                              "id":1494,
                              "postcode_id":428,
                              "name":"Purba Anchol Road",
                              "value":"Purba Anchol Road"
                           },
                           {
                              "id":1495,
                              "postcode_id":428,
                              "name":"Sayed nagor",
                              "value":"Sayed nagor"
                           },
                           {
                              "id":1496,
                              "postcode_id":428,
                              "name":"Shadhinota sharoni",
                              "value":"Shadhinota sharoni"
                           },
                           {
                              "id":1497,
                              "postcode_id":428,
                              "name":"Shahjadpur",
                              "value":"Shahjadpur"
                           },
                           {
                              "id":1498,
                              "postcode_id":428,
                              "name":"Shajadpur East",
                              "value":"Shajadpur East"
                           },
                           {
                              "id":1499,
                              "postcode_id":428,
                              "name":"Shatar Kul",
                              "value":"Shatar Kul"
                           },
                           {
                              "id":1500,
                              "postcode_id":428,
                              "name":"Shatarkul",
                              "value":"Shatarkul"
                           },
                           {
                              "id":1501,
                              "postcode_id":428,
                              "name":"Shubastu najor velly",
                              "value":"Shubastu najor velly"
                           },
                           {
                              "id":1502,
                              "postcode_id":428,
                              "name":"Soilmaid",
                              "value":"Soilmaid"
                           },
                           {
                              "id":1503,
                              "postcode_id":428,
                              "name":"South Badda",
                              "value":"South Badda"
                           },
                           {
                              "id":1504,
                              "postcode_id":428,
                              "name":"Ulon",
                              "value":"Ulon"
                           },
                           {
                              "id":1505,
                              "postcode_id":428,
                              "name":"United hospital ",
                              "value":"United hospital "
                           },
                           {
                              "id":1506,
                              "postcode_id":428,
                              "name":"Vatara",
                              "value":"Vatara"
                           },
                           {
                              "id":1507,
                              "postcode_id":429,
                              "name":"Banani",
                              "value":"Banani"
                           },
                           {
                              "id":1508,
                              "postcode_id":429,
                              "name":"Banani (Chairman Bari)",
                              "value":"Banani (Chairman Bari)"
                           },
                           {
                              "id":1509,
                              "postcode_id":429,
                              "name":"Banani 1",
                              "value":"Banani 1"
                           },
                           {
                              "id":1510,
                              "postcode_id":429,
                              "name":"Banani 11",
                              "value":"Banani 11"
                           },
                           {
                              "id":1511,
                              "postcode_id":429,
                              "name":"Banani 17",
                              "value":"Banani 17"
                           },
                           {
                              "id":1512,
                              "postcode_id":429,
                              "name":"Banani 2",
                              "value":"Banani 2"
                           },
                           {
                              "id":1513,
                              "postcode_id":429,
                              "name":"Banani 21",
                              "value":"Banani 21"
                           },
                           {
                              "id":1514,
                              "postcode_id":429,
                              "name":"Banani 23",
                              "value":"Banani 23"
                           },
                           {
                              "id":1515,
                              "postcode_id":429,
                              "name":"Banani 27",
                              "value":"Banani 27"
                           },
                           {
                              "id":1516,
                              "postcode_id":429,
                              "name":"Banani 8",
                              "value":"Banani 8"
                           },
                           {
                              "id":1517,
                              "postcode_id":429,
                              "name":"Banani chairman Bari",
                              "value":"Banani chairman Bari"
                           },
                           {
                              "id":1518,
                              "postcode_id":429,
                              "name":"Dokkhin para",
                              "value":"Dokkhin para"
                           },
                           {
                              "id":1519,
                              "postcode_id":429,
                              "name":"Graveyard road",
                              "value":"Graveyard road"
                           },
                           {
                              "id":1520,
                              "postcode_id":429,
                              "name":"Kemal Ataturk avenue",
                              "value":"Kemal Ataturk avenue"
                           },
                           {
                              "id":1521,
                              "postcode_id":429,
                              "name":"Korail Bosti",
                              "value":"Korail Bosti"
                           },
                           {
                              "id":1522,
                              "postcode_id":429,
                              "name":"Maasranga television",
                              "value":"Maasranga television"
                           },
                           {
                              "id":1523,
                              "postcode_id":429,
                              "name":"Navy headquarters",
                              "value":"Navy headquarters"
                           },
                           {
                              "id":1524,
                              "postcode_id":429,
                              "name":"Radisson water Blu Hotel",
                              "value":"Radisson water Blu Hotel"
                           },
                           {
                              "id":1525,
                              "postcode_id":429,
                              "name":"Shanti Niketon",
                              "value":"Shanti Niketon"
                           },
                           {
                              "id":1526,
                              "postcode_id":429,
                              "name":"Shoinik Club",
                              "value":"Shoinik Club"
                           },
                           {
                              "id":1527,
                              "postcode_id":429,
                              "name":"Soinik club",
                              "value":"Soinik club"
                           },
                           {
                              "id":1528,
                              "postcode_id":429,
                              "name":"T&T colony",
                              "value":"T&T colony"
                           },
                           {
                              "id":1529,
                              "postcode_id":430,
                              "name":"Abul Hotel",
                              "value":"Abul Hotel"
                           },
                           {
                              "id":1530,
                              "postcode_id":430,
                              "name":"Aftab Nagar",
                              "value":"Aftab Nagar"
                           },
                           {
                              "id":1531,
                              "postcode_id":430,
                              "name":"Aftab nagor Block A to G",
                              "value":"Aftab nagor Block A to G"
                           },
                           {
                              "id":1532,
                              "postcode_id":430,
                              "name":"Baganbari",
                              "value":"Baganbari"
                           },
                           {
                              "id":1533,
                              "postcode_id":430,
                              "name":"Banasree",
                              "value":"Banasree"
                           },
                           {
                              "id":1534,
                              "postcode_id":430,
                              "name":"Bepari gali",
                              "value":"Bepari gali"
                           },
                           {
                              "id":1535,
                              "postcode_id":430,
                              "name":"DIT Project",
                              "value":"DIT Project"
                           },
                           {
                              "id":1536,
                              "postcode_id":430,
                              "name":"East Goran",
                              "value":"East Goran"
                           },
                           {
                              "id":1537,
                              "postcode_id":430,
                              "name":"East Rumpura",
                              "value":"East Rumpura"
                           },
                           {
                              "id":1538,
                              "postcode_id":430,
                              "name":"Gulbag",
                              "value":"Gulbag"
                           },
                           {
                              "id":1539,
                              "postcode_id":430,
                              "name":"Hazipara",
                              "value":"Hazipara"
                           },
                           {
                              "id":1540,
                              "postcode_id":430,
                              "name":"Khilgaon Block A",
                              "value":"Khilgaon Block A"
                           },
                           {
                              "id":1541,
                              "postcode_id":430,
                              "name":"Khilgaon Block B",
                              "value":"Khilgaon Block B"
                           },
                           {
                              "id":1542,
                              "postcode_id":430,
                              "name":"Khilgaon Block C",
                              "value":"Khilgaon Block C"
                           },
                           {
                              "id":1543,
                              "postcode_id":430,
                              "name":"Khilgaon Taltola",
                              "value":"Khilgaon Taltola"
                           },
                           {
                              "id":1544,
                              "postcode_id":430,
                              "name":"Meradia",
                              "value":"Meradia"
                           },
                           {
                              "id":1545,
                              "postcode_id":430,
                              "name":"Mohanagor Project",
                              "value":"Mohanagor Project"
                           },
                           {
                              "id":1546,
                              "postcode_id":430,
                              "name":"Mohanogor Project",
                              "value":"Mohanogor Project"
                           },
                           {
                              "id":1547,
                              "postcode_id":430,
                              "name":"Nobin Bag",
                              "value":"Nobin Bag"
                           },
                           {
                              "id":1548,
                              "postcode_id":430,
                              "name":"North Goran",
                              "value":"North Goran"
                           },
                           {
                              "id":1549,
                              "postcode_id":430,
                              "name":"Peyarabag",
                              "value":"Peyarabag"
                           },
                           {
                              "id":1550,
                              "postcode_id":430,
                              "name":"Pollima",
                              "value":"Pollima"
                           },
                           {
                              "id":1551,
                              "postcode_id":430,
                              "name":"Provati bag",
                              "value":"Provati bag"
                           },
                           {
                              "id":1552,
                              "postcode_id":430,
                              "name":"Rampura",
                              "value":"Rampura"
                           },
                           {
                              "id":1553,
                              "postcode_id":430,
                              "name":"Rampura Banassre",
                              "value":"Rampura Banassre"
                           },
                           {
                              "id":1554,
                              "postcode_id":430,
                              "name":"Rampura Bazar",
                              "value":"Rampura Bazar"
                           },
                           {
                              "id":1555,
                              "postcode_id":430,
                              "name":"Rampura Hazipara",
                              "value":"Rampura Hazipara"
                           },
                           {
                              "id":1556,
                              "postcode_id":430,
                              "name":"Shipahibag",
                              "value":"Shipahibag"
                           },
                           {
                              "id":1557,
                              "postcode_id":430,
                              "name":"Sipahi bag",
                              "value":"Sipahi bag"
                           },
                           {
                              "id":1558,
                              "postcode_id":430,
                              "name":"South Banassre",
                              "value":"South Banassre"
                           },
                           {
                              "id":1559,
                              "postcode_id":430,
                              "name":"South Goran",
                              "value":"South Goran"
                           },
                           {
                              "id":1560,
                              "postcode_id":430,
                              "name":"Tilpa Para",
                              "value":"Tilpa Para"
                           },
                           {
                              "id":1561,
                              "postcode_id":430,
                              "name":"Uttorpara",
                              "value":"Uttorpara"
                           },
                           {
                              "id":1562,
                              "postcode_id":430,
                              "name":"West mailbag",
                              "value":"West mailbag"
                           },
                           {
                              "id":1563,
                              "postcode_id":430,
                              "name":"West Rampura",
                              "value":"West Rampura"
                           },
                           {
                              "id":1564,
                              "postcode_id":430,
                              "name":"West Rumpura",
                              "value":"West Rumpura"
                           },
                           {
                              "id":1565,
                              "postcode_id":431,
                              "name":"Foridabad",
                              "value":"Foridabad"
                           },
                           {
                              "id":1566,
                              "postcode_id":431,
                              "name":"Gendaria",
                              "value":"Gendaria"
                           },
                           {
                              "id":1567,
                              "postcode_id":431,
                              "name":"Lakshmibazar",
                              "value":"Lakshmibazar"
                           },
                           {
                              "id":1568,
                              "postcode_id":431,
                              "name":"Shutrapur",
                              "value":"Shutrapur"
                           },
                           {
                              "id":1569,
                              "postcode_id":432,
                              "name":"Bais Teki",
                              "value":"Bais Teki"
                           },
                           {
                              "id":1570,
                              "postcode_id":432,
                              "name":"Balughat",
                              "value":"Balughat"
                           },
                           {
                              "id":1571,
                              "postcode_id":432,
                              "name":"Ibrahimpur",
                              "value":"Ibrahimpur"
                           },
                           {
                              "id":1572,
                              "postcode_id":432,
                              "name":"Kafrul",
                              "value":"Kafrul"
                           },
                           {
                              "id":1573,
                              "postcode_id":432,
                              "name":"Kazipara",
                              "value":"Kazipara"
                           },
                           {
                              "id":1574,
                              "postcode_id":432,
                              "name":"Kochukhet",
                              "value":"Kochukhet"
                           },
                           {
                              "id":1575,
                              "postcode_id":432,
                              "name":"Mirpur 13",
                              "value":"Mirpur 13"
                           },
                           {
                              "id":1576,
                              "postcode_id":432,
                              "name":"Mirpur 14",
                              "value":"Mirpur 14"
                           },
                           {
                              "id":1577,
                              "postcode_id":432,
                              "name":"Mirpur Cantonment",
                              "value":"Mirpur Cantonment"
                           },
                           {
                              "id":1578,
                              "postcode_id":432,
                              "name":"Mirpur DOHS",
                              "value":"Mirpur DOHS"
                           },
                           {
                              "id":1579,
                              "postcode_id":432,
                              "name":"Senpara",
                              "value":"Senpara"
                           },
                           {
                              "id":1580,
                              "postcode_id":432,
                              "name":"Shewrapara",
                              "value":"Shewrapara"
                           },
                           {
                              "id":1581,
                              "postcode_id":433,
                              "name":"Agargaon",
                              "value":"Agargaon"
                           },
                           {
                              "id":1582,
                              "postcode_id":433,
                              "name":"Ahamedbag",
                              "value":"Ahamedbag"
                           },
                           {
                              "id":1583,
                              "postcode_id":433,
                              "name":"Ansar Camp",
                              "value":"Ansar Camp"
                           },
                           {
                              "id":1584,
                              "postcode_id":433,
                              "name":"Bangla College",
                              "value":"Bangla College"
                           },
                           {
                              "id":1585,
                              "postcode_id":433,
                              "name":"Bangladesh Betar",
                              "value":"Bangladesh Betar"
                           },
                           {
                              "id":1586,
                              "postcode_id":433,
                              "name":"Bordhon Bari",
                              "value":"Bordhon Bari"
                           },
                           {
                              "id":1587,
                              "postcode_id":433,
                              "name":"Darus Salam",
                              "value":"Darus Salam"
                           },
                           {
                              "id":1588,
                              "postcode_id":433,
                              "name":"Eastern Housing",
                              "value":"Eastern Housing"
                           },
                           {
                              "id":1589,
                              "postcode_id":433,
                              "name":"Golarteak",
                              "value":"Golarteak"
                           },
                           {
                              "id":1590,
                              "postcode_id":433,
                              "name":"Janata Housing",
                              "value":"Janata Housing"
                           },
                           {
                              "id":1591,
                              "postcode_id":433,
                              "name":"Kallaynnpur",
                              "value":"Kallaynnpur"
                           },
                           {
                              "id":1592,
                              "postcode_id":433,
                              "name":"Kalshi",
                              "value":"Kalshi"
                           },
                           {
                              "id":1593,
                              "postcode_id":433,
                              "name":"Matikata",
                              "value":"Matikata"
                           },
                           {
                              "id":1594,
                              "postcode_id":433,
                              "name":"Mazar road",
                              "value":"Mazar road"
                           },
                           {
                              "id":1595,
                              "postcode_id":433,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":1596,
                              "postcode_id":433,
                              "name":"Mirpur 1",
                              "value":"Mirpur 1"
                           },
                           {
                              "id":1597,
                              "postcode_id":433,
                              "name":"Mirpur 10",
                              "value":"Mirpur 10"
                           },
                           {
                              "id":1598,
                              "postcode_id":433,
                              "name":"Mirpur 11",
                              "value":"Mirpur 11"
                           },
                           {
                              "id":1599,
                              "postcode_id":433,
                              "name":"Mirpur 12",
                              "value":"Mirpur 12"
                           },
                           {
                              "id":1600,
                              "postcode_id":433,
                              "name":"Mirpur 2",
                              "value":"Mirpur 2"
                           },
                           {
                              "id":1601,
                              "postcode_id":433,
                              "name":"Mirpur 6",
                              "value":"Mirpur 6"
                           },
                           {
                              "id":1602,
                              "postcode_id":433,
                              "name":"Mirpur 7",
                              "value":"Mirpur 7"
                           },
                           {
                              "id":1603,
                              "postcode_id":433,
                              "name":"Paikpara",
                              "value":"Paikpara"
                           },
                           {
                              "id":1604,
                              "postcode_id":433,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":1605,
                              "postcode_id":433,
                              "name":"Pirerbag",
                              "value":"Pirerbag"
                           },
                           {
                              "id":1606,
                              "postcode_id":433,
                              "name":"Rupnagor",
                              "value":"Rupnagor"
                           },
                           {
                              "id":1607,
                              "postcode_id":433,
                              "name":"SONY Cienema Hall",
                              "value":"SONY Cienema Hall"
                           },
                           {
                              "id":1608,
                              "postcode_id":433,
                              "name":"South Bishil",
                              "value":"South Bishil"
                           },
                           {
                              "id":1609,
                              "postcode_id":433,
                              "name":"Tolarbag",
                              "value":"Tolarbag"
                           },
                           {
                              "id":1610,
                              "postcode_id":433,
                              "name":"Vasan Tek",
                              "value":"Vasan Tek"
                           },
                           {
                              "id":1611,
                              "postcode_id":434,
                              "name":"Agargaon",
                              "value":"Agargaon"
                           },
                           {
                              "id":1612,
                              "postcode_id":434,
                              "name":"Ahamedbag",
                              "value":"Ahamedbag"
                           },
                           {
                              "id":1613,
                              "postcode_id":434,
                              "name":"Ansar Camp",
                              "value":"Ansar Camp"
                           },
                           {
                              "id":1614,
                              "postcode_id":434,
                              "name":"Bangla College",
                              "value":"Bangla College"
                           },
                           {
                              "id":1615,
                              "postcode_id":434,
                              "name":"Bangladesh Betar",
                              "value":"Bangladesh Betar"
                           },
                           {
                              "id":1616,
                              "postcode_id":434,
                              "name":"Bordhon Bari",
                              "value":"Bordhon Bari"
                           },
                           {
                              "id":1617,
                              "postcode_id":434,
                              "name":"Darus Salam",
                              "value":"Darus Salam"
                           },
                           {
                              "id":1618,
                              "postcode_id":434,
                              "name":"Eastern Housing",
                              "value":"Eastern Housing"
                           },
                           {
                              "id":1619,
                              "postcode_id":434,
                              "name":"Golarteak",
                              "value":"Golarteak"
                           },
                           {
                              "id":1620,
                              "postcode_id":434,
                              "name":"Janata Housing",
                              "value":"Janata Housing"
                           },
                           {
                              "id":1621,
                              "postcode_id":434,
                              "name":"Kallaynnpur",
                              "value":"Kallaynnpur"
                           },
                           {
                              "id":1622,
                              "postcode_id":434,
                              "name":"Kalshi",
                              "value":"Kalshi"
                           },
                           {
                              "id":1623,
                              "postcode_id":434,
                              "name":"Matikata",
                              "value":"Matikata"
                           },
                           {
                              "id":1624,
                              "postcode_id":434,
                              "name":"Mazar road",
                              "value":"Mazar road"
                           },
                           {
                              "id":1625,
                              "postcode_id":434,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":1626,
                              "postcode_id":434,
                              "name":"Mirpur 1",
                              "value":"Mirpur 1"
                           },
                           {
                              "id":1627,
                              "postcode_id":434,
                              "name":"Mirpur 10",
                              "value":"Mirpur 10"
                           },
                           {
                              "id":1628,
                              "postcode_id":434,
                              "name":"Mirpur 11",
                              "value":"Mirpur 11"
                           },
                           {
                              "id":1629,
                              "postcode_id":434,
                              "name":"Mirpur 12",
                              "value":"Mirpur 12"
                           },
                           {
                              "id":1630,
                              "postcode_id":434,
                              "name":"Mirpur 2",
                              "value":"Mirpur 2"
                           },
                           {
                              "id":1631,
                              "postcode_id":434,
                              "name":"Mirpur 6",
                              "value":"Mirpur 6"
                           },
                           {
                              "id":1632,
                              "postcode_id":434,
                              "name":"Mirpur 7",
                              "value":"Mirpur 7"
                           },
                           {
                              "id":1633,
                              "postcode_id":434,
                              "name":"Paikpara",
                              "value":"Paikpara"
                           },
                           {
                              "id":1634,
                              "postcode_id":434,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":1635,
                              "postcode_id":434,
                              "name":"Pirerbag",
                              "value":"Pirerbag"
                           },
                           {
                              "id":1636,
                              "postcode_id":434,
                              "name":"Rupnagor",
                              "value":"Rupnagor"
                           },
                           {
                              "id":1637,
                              "postcode_id":434,
                              "name":"SONY Cienema Hall",
                              "value":"SONY Cienema Hall"
                           },
                           {
                              "id":1638,
                              "postcode_id":434,
                              "name":"South Bishil",
                              "value":"South Bishil"
                           },
                           {
                              "id":1639,
                              "postcode_id":434,
                              "name":"Tolarbag",
                              "value":"Tolarbag"
                           },
                           {
                              "id":1640,
                              "postcode_id":434,
                              "name":"Vasan Tek",
                              "value":"Vasan Tek"
                           },
                           {
                              "id":1641,
                              "postcode_id":435,
                              "name":"Agargaon",
                              "value":"Agargaon"
                           },
                           {
                              "id":1642,
                              "postcode_id":435,
                              "name":"Ahamedbag",
                              "value":"Ahamedbag"
                           },
                           {
                              "id":1643,
                              "postcode_id":435,
                              "name":"Ansar Camp",
                              "value":"Ansar Camp"
                           },
                           {
                              "id":1644,
                              "postcode_id":435,
                              "name":"Bangla College",
                              "value":"Bangla College"
                           },
                           {
                              "id":1645,
                              "postcode_id":435,
                              "name":"Bangladesh Betar",
                              "value":"Bangladesh Betar"
                           },
                           {
                              "id":1646,
                              "postcode_id":435,
                              "name":"Bordhon Bari",
                              "value":"Bordhon Bari"
                           },
                           {
                              "id":1647,
                              "postcode_id":435,
                              "name":"Darus Salam",
                              "value":"Darus Salam"
                           },
                           {
                              "id":1648,
                              "postcode_id":435,
                              "name":"Eastern Housing",
                              "value":"Eastern Housing"
                           },
                           {
                              "id":1649,
                              "postcode_id":435,
                              "name":"Golarteak",
                              "value":"Golarteak"
                           },
                           {
                              "id":1650,
                              "postcode_id":435,
                              "name":"Janata Housing",
                              "value":"Janata Housing"
                           },
                           {
                              "id":1651,
                              "postcode_id":435,
                              "name":"Kallaynnpur",
                              "value":"Kallaynnpur"
                           },
                           {
                              "id":1652,
                              "postcode_id":435,
                              "name":"Kalshi",
                              "value":"Kalshi"
                           },
                           {
                              "id":1653,
                              "postcode_id":435,
                              "name":"Matikata",
                              "value":"Matikata"
                           },
                           {
                              "id":1654,
                              "postcode_id":435,
                              "name":"Mazar road",
                              "value":"Mazar road"
                           },
                           {
                              "id":1655,
                              "postcode_id":435,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":1656,
                              "postcode_id":435,
                              "name":"Mirpur 1",
                              "value":"Mirpur 1"
                           },
                           {
                              "id":1657,
                              "postcode_id":435,
                              "name":"Mirpur 10",
                              "value":"Mirpur 10"
                           },
                           {
                              "id":1658,
                              "postcode_id":435,
                              "name":"Mirpur 11",
                              "value":"Mirpur 11"
                           },
                           {
                              "id":1659,
                              "postcode_id":435,
                              "name":"Mirpur 12",
                              "value":"Mirpur 12"
                           },
                           {
                              "id":1660,
                              "postcode_id":435,
                              "name":"Mirpur 2",
                              "value":"Mirpur 2"
                           },
                           {
                              "id":1661,
                              "postcode_id":435,
                              "name":"Mirpur 6",
                              "value":"Mirpur 6"
                           },
                           {
                              "id":1662,
                              "postcode_id":435,
                              "name":"Mirpur 7",
                              "value":"Mirpur 7"
                           },
                           {
                              "id":1663,
                              "postcode_id":435,
                              "name":"Paikpara",
                              "value":"Paikpara"
                           },
                           {
                              "id":1664,
                              "postcode_id":435,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":1665,
                              "postcode_id":435,
                              "name":"Pirerbag",
                              "value":"Pirerbag"
                           },
                           {
                              "id":1666,
                              "postcode_id":435,
                              "name":"Rupnagor",
                              "value":"Rupnagor"
                           },
                           {
                              "id":1667,
                              "postcode_id":435,
                              "name":"SONY Cienema Hall",
                              "value":"SONY Cienema Hall"
                           },
                           {
                              "id":1668,
                              "postcode_id":435,
                              "name":"South Bishil",
                              "value":"South Bishil"
                           },
                           {
                              "id":1669,
                              "postcode_id":435,
                              "name":"Tolarbag",
                              "value":"Tolarbag"
                           },
                           {
                              "id":1670,
                              "postcode_id":435,
                              "name":"Vasan Tek",
                              "value":"Vasan Tek"
                           },
                           {
                              "id":1671,
                              "postcode_id":436,
                              "name":"Bais Teki",
                              "value":"Bais Teki"
                           },
                           {
                              "id":1672,
                              "postcode_id":436,
                              "name":"Balughat",
                              "value":"Balughat"
                           },
                           {
                              "id":1673,
                              "postcode_id":436,
                              "name":"Ibrahimpur",
                              "value":"Ibrahimpur"
                           },
                           {
                              "id":1674,
                              "postcode_id":436,
                              "name":"Kafrul",
                              "value":"Kafrul"
                           },
                           {
                              "id":1675,
                              "postcode_id":436,
                              "name":"Kazipara",
                              "value":"Kazipara"
                           },
                           {
                              "id":1676,
                              "postcode_id":436,
                              "name":"Kochukhet",
                              "value":"Kochukhet"
                           },
                           {
                              "id":1677,
                              "postcode_id":436,
                              "name":"Mirpur 13",
                              "value":"Mirpur 13"
                           },
                           {
                              "id":1678,
                              "postcode_id":436,
                              "name":"Mirpur 14",
                              "value":"Mirpur 14"
                           },
                           {
                              "id":1679,
                              "postcode_id":436,
                              "name":"Mirpur Cantonment",
                              "value":"Mirpur Cantonment"
                           },
                           {
                              "id":1680,
                              "postcode_id":436,
                              "name":"Mirpur DOHS",
                              "value":"Mirpur DOHS"
                           },
                           {
                              "id":1681,
                              "postcode_id":436,
                              "name":"Senpara",
                              "value":"Senpara"
                           },
                           {
                              "id":1682,
                              "postcode_id":436,
                              "name":"Shewrapara",
                              "value":"Shewrapara"
                           },
                           {
                              "id":1683,
                              "postcode_id":437,
                              "name":"Agargaon",
                              "value":"Agargaon"
                           },
                           {
                              "id":1684,
                              "postcode_id":437,
                              "name":"Ahamedbag",
                              "value":"Ahamedbag"
                           },
                           {
                              "id":1685,
                              "postcode_id":437,
                              "name":"Ansar Camp",
                              "value":"Ansar Camp"
                           },
                           {
                              "id":1686,
                              "postcode_id":437,
                              "name":"Bangla College",
                              "value":"Bangla College"
                           },
                           {
                              "id":1687,
                              "postcode_id":437,
                              "name":"Bangladesh Betar",
                              "value":"Bangladesh Betar"
                           },
                           {
                              "id":1688,
                              "postcode_id":437,
                              "name":"Bordhon Bari",
                              "value":"Bordhon Bari"
                           },
                           {
                              "id":1689,
                              "postcode_id":437,
                              "name":"Darus Salam",
                              "value":"Darus Salam"
                           },
                           {
                              "id":1690,
                              "postcode_id":437,
                              "name":"Eastern Housing",
                              "value":"Eastern Housing"
                           },
                           {
                              "id":1691,
                              "postcode_id":437,
                              "name":"Golarteak",
                              "value":"Golarteak"
                           },
                           {
                              "id":1692,
                              "postcode_id":437,
                              "name":"Janata Housing",
                              "value":"Janata Housing"
                           },
                           {
                              "id":1693,
                              "postcode_id":437,
                              "name":"Kallaynnpur",
                              "value":"Kallaynnpur"
                           },
                           {
                              "id":1694,
                              "postcode_id":437,
                              "name":"Kalshi",
                              "value":"Kalshi"
                           },
                           {
                              "id":1695,
                              "postcode_id":437,
                              "name":"Matikata",
                              "value":"Matikata"
                           },
                           {
                              "id":1696,
                              "postcode_id":437,
                              "name":"Mazar road",
                              "value":"Mazar road"
                           },
                           {
                              "id":1697,
                              "postcode_id":437,
                              "name":"Mirpur",
                              "value":"Mirpur"
                           },
                           {
                              "id":1698,
                              "postcode_id":437,
                              "name":"Mirpur 1",
                              "value":"Mirpur 1"
                           },
                           {
                              "id":1699,
                              "postcode_id":437,
                              "name":"Mirpur 10",
                              "value":"Mirpur 10"
                           },
                           {
                              "id":1700,
                              "postcode_id":437,
                              "name":"Mirpur 11",
                              "value":"Mirpur 11"
                           },
                           {
                              "id":1701,
                              "postcode_id":437,
                              "name":"Mirpur 12",
                              "value":"Mirpur 12"
                           },
                           {
                              "id":1702,
                              "postcode_id":437,
                              "name":"Mirpur 2",
                              "value":"Mirpur 2"
                           },
                           {
                              "id":1703,
                              "postcode_id":437,
                              "name":"Mirpur 6",
                              "value":"Mirpur 6"
                           },
                           {
                              "id":1704,
                              "postcode_id":437,
                              "name":"Mirpur 7",
                              "value":"Mirpur 7"
                           },
                           {
                              "id":1705,
                              "postcode_id":437,
                              "name":"Paikpara",
                              "value":"Paikpara"
                           },
                           {
                              "id":1706,
                              "postcode_id":437,
                              "name":"Pallabi",
                              "value":"Pallabi"
                           },
                           {
                              "id":1707,
                              "postcode_id":437,
                              "name":"Pirerbag",
                              "value":"Pirerbag"
                           },
                           {
                              "id":1708,
                              "postcode_id":437,
                              "name":"Rupnagor",
                              "value":"Rupnagor"
                           },
                           {
                              "id":1709,
                              "postcode_id":437,
                              "name":"SONY Cienema Hall",
                              "value":"SONY Cienema Hall"
                           },
                           {
                              "id":1710,
                              "postcode_id":437,
                              "name":"South Bishil",
                              "value":"South Bishil"
                           },
                           {
                              "id":1711,
                              "postcode_id":437,
                              "name":"Tolarbag",
                              "value":"Tolarbag"
                           },
                           {
                              "id":1712,
                              "postcode_id":437,
                              "name":"Vasan Tek",
                              "value":"Vasan Tek"
                           },
                           {
                              "id":1713,
                              "postcode_id":438,
                              "name":"Abujar bafari gali",
                              "value":"Abujar bafari gali"
                           },
                           {
                              "id":1714,
                              "postcode_id":438,
                              "name":"Ansar Camp(Moghbazar)",
                              "value":"Ansar Camp(Moghbazar)"
                           },
                           {
                              "id":1715,
                              "postcode_id":438,
                              "name":"Baily Road",
                              "value":"Baily Road"
                           },
                           {
                              "id":1716,
                              "postcode_id":438,
                              "name":"Bata gali",
                              "value":"Bata gali"
                           },
                           {
                              "id":1717,
                              "postcode_id":438,
                              "name":"BG Press",
                              "value":"BG Press"
                           },
                           {
                              "id":1718,
                              "postcode_id":438,
                              "name":"Biam Auditorium",
                              "value":"Biam Auditorium"
                           },
                           {
                              "id":1719,
                              "postcode_id":438,
                              "name":"Boro Moghbazar",
                              "value":"Boro Moghbazar"
                           },
                           {
                              "id":1720,
                              "postcode_id":438,
                              "name":"Channel 24",
                              "value":"Channel 24"
                           },
                           {
                              "id":1721,
                              "postcode_id":438,
                              "name":"Chowdhury Para",
                              "value":"Chowdhury Para"
                           },
                           {
                              "id":1722,
                              "postcode_id":438,
                              "name":"Dillu road",
                              "value":"Dillu road"
                           },
                           {
                              "id":1723,
                              "postcode_id":438,
                              "name":"Hazari bari",
                              "value":"Hazari bari"
                           },
                           {
                              "id":1724,
                              "postcode_id":438,
                              "name":"Imam bag",
                              "value":"Imam bag"
                           },
                           {
                              "id":1725,
                              "postcode_id":438,
                              "name":"Kamalapur",
                              "value":"Kamalapur"
                           },
                           {
                              "id":1726,
                              "postcode_id":438,
                              "name":"Kazi office r gali",
                              "value":"Kazi office r gali"
                           },
                           {
                              "id":1727,
                              "postcode_id":438,
                              "name":"Mailbag 1st line",
                              "value":"Mailbag 1st line"
                           },
                           {
                              "id":1728,
                              "postcode_id":438,
                              "name":"Malibag Chowdhuripara",
                              "value":"Malibag Chowdhuripara"
                           },
                           {
                              "id":1729,
                              "postcode_id":438,
                              "name":"Mintu Road",
                              "value":"Mintu Road"
                           },
                           {
                              "id":1730,
                              "postcode_id":438,
                              "name":"Modhubag",
                              "value":"Modhubag"
                           },
                           {
                              "id":1731,
                              "postcode_id":438,
                              "name":"Mogbazar",
                              "value":"Mogbazar"
                           },
                           {
                              "id":1732,
                              "postcode_id":438,
                              "name":"Moghbazar",
                              "value":"Moghbazar"
                           },
                           {
                              "id":1733,
                              "postcode_id":438,
                              "name":"Mouchak",
                              "value":"Mouchak"
                           },
                           {
                              "id":1734,
                              "postcode_id":438,
                              "name":"Noyatola",
                              "value":"Noyatola"
                           },
                           {
                              "id":1735,
                              "postcode_id":438,
                              "name":"Paglamajar gali",
                              "value":"Paglamajar gali"
                           },
                           {
                              "id":1736,
                              "postcode_id":438,
                              "name":"Rajarbag",
                              "value":"Rajarbag"
                           },
                           {
                              "id":1737,
                              "postcode_id":438,
                              "name":"Roma Century ",
                              "value":"Roma Century "
                           },
                           {
                              "id":1738,
                              "postcode_id":438,
                              "name":"Santibag",
                              "value":"Santibag"
                           },
                           {
                              "id":1739,
                              "postcode_id":438,
                              "name":"Shahidbag",
                              "value":"Shahidbag"
                           },
                           {
                              "id":1740,
                              "postcode_id":438,
                              "name":"Shahjanpur",
                              "value":"Shahjanpur"
                           },
                           {
                              "id":1741,
                              "postcode_id":438,
                              "name":"Shajahanpur",
                              "value":"Shajahanpur"
                           },
                           {
                              "id":1742,
                              "postcode_id":438,
                              "name":"Shantinagar",
                              "value":"Shantinagar"
                           },
                           {
                              "id":1743,
                              "postcode_id":438,
                              "name":"Sheron bag",
                              "value":"Sheron bag"
                           },
                           {
                              "id":1744,
                              "postcode_id":438,
                              "name":"Shideshwari",
                              "value":"Shideshwari"
                           },
                           {
                              "id":1745,
                              "postcode_id":438,
                              "name":"Siddiq master dhal",
                              "value":"Siddiq master dhal"
                           },
                           {
                              "id":1746,
                              "postcode_id":438,
                              "name":"Sismohol",
                              "value":"Sismohol"
                           },
                           {
                              "id":1747,
                              "postcode_id":438,
                              "name":"Wreless gate",
                              "value":"Wreless gate"
                           },
                           {
                              "id":1748,
                              "postcode_id":439,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":1749,
                              "postcode_id":439,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":1750,
                              "postcode_id":439,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":1751,
                              "postcode_id":439,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":1752,
                              "postcode_id":439,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":1753,
                              "postcode_id":439,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":1754,
                              "postcode_id":439,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":1755,
                              "postcode_id":439,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":1756,
                              "postcode_id":439,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":1757,
                              "postcode_id":439,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":1758,
                              "postcode_id":439,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":1759,
                              "postcode_id":439,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":1760,
                              "postcode_id":439,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":1761,
                              "postcode_id":439,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":1762,
                              "postcode_id":439,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":1763,
                              "postcode_id":439,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":1764,
                              "postcode_id":439,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":1765,
                              "postcode_id":439,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":1766,
                              "postcode_id":439,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":1767,
                              "postcode_id":439,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":1768,
                              "postcode_id":439,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":1769,
                              "postcode_id":439,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":1770,
                              "postcode_id":439,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":1771,
                              "postcode_id":439,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":1772,
                              "postcode_id":439,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":1773,
                              "postcode_id":439,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":1774,
                              "postcode_id":439,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":1775,
                              "postcode_id":439,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":1776,
                              "postcode_id":439,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":1777,
                              "postcode_id":439,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":1778,
                              "postcode_id":439,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":1779,
                              "postcode_id":439,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":1780,
                              "postcode_id":439,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":1781,
                              "postcode_id":439,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":1782,
                              "postcode_id":439,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":1783,
                              "postcode_id":439,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":1784,
                              "postcode_id":439,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":1785,
                              "postcode_id":439,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":1786,
                              "postcode_id":439,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":1787,
                              "postcode_id":439,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":1788,
                              "postcode_id":439,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":1789,
                              "postcode_id":439,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":1790,
                              "postcode_id":439,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":1791,
                              "postcode_id":439,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":1792,
                              "postcode_id":439,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":1793,
                              "postcode_id":439,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":1794,
                              "postcode_id":439,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":1795,
                              "postcode_id":439,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":1796,
                              "postcode_id":439,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":1797,
                              "postcode_id":439,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":1798,
                              "postcode_id":439,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":1799,
                              "postcode_id":439,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":1800,
                              "postcode_id":439,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":1801,
                              "postcode_id":439,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":1802,
                              "postcode_id":440,
                              "name":"Ati Bazar",
                              "value":"Ati Bazar"
                           },
                           {
                              "id":1803,
                              "postcode_id":440,
                              "name":"Kamrangirchor",
                              "value":"Kamrangirchor"
                           },
                           {
                              "id":1804,
                              "postcode_id":441,
                              "name":"Adabar",
                              "value":"Adabar"
                           },
                           {
                              "id":1805,
                              "postcode_id":441,
                              "name":"Asad Avenue",
                              "value":"Asad Avenue"
                           },
                           {
                              "id":1806,
                              "postcode_id":441,
                              "name":"Aziz Mohollah",
                              "value":"Aziz Mohollah"
                           },
                           {
                              "id":1807,
                              "postcode_id":441,
                              "name":"Baitul Aman Housing",
                              "value":"Baitul Aman Housing"
                           },
                           {
                              "id":1808,
                              "postcode_id":441,
                              "name":"Bashbari",
                              "value":"Bashbari"
                           },
                           {
                              "id":1809,
                              "postcode_id":441,
                              "name":"Chan Mia Housing",
                              "value":"Chan Mia Housing"
                           },
                           {
                              "id":1810,
                              "postcode_id":441,
                              "name":"Chand Uddan",
                              "value":"Chand Uddan"
                           },
                           {
                              "id":1811,
                              "postcode_id":441,
                              "name":"Dhaka Housing",
                              "value":"Dhaka Housing"
                           },
                           {
                              "id":1812,
                              "postcode_id":441,
                              "name":"Geneva Camp",
                              "value":"Geneva Camp"
                           },
                           {
                              "id":1813,
                              "postcode_id":441,
                              "name":"Humayun Road",
                              "value":"Humayun Road"
                           },
                           {
                              "id":1814,
                              "postcode_id":441,
                              "name":"Jafrabad",
                              "value":"Jafrabad"
                           },
                           {
                              "id":1815,
                              "postcode_id":441,
                              "name":"Jakir Hussain Road",
                              "value":"Jakir Hussain Road"
                           },
                           {
                              "id":1816,
                              "postcode_id":441,
                              "name":"Kaderabad Housing",
                              "value":"Kaderabad Housing"
                           },
                           {
                              "id":1817,
                              "postcode_id":441,
                              "name":"Katasur",
                              "value":"Katasur"
                           },
                           {
                              "id":1818,
                              "postcode_id":441,
                              "name":"Mohammadia Housing Limited",
                              "value":"Mohammadia Housing Limited"
                           },
                           {
                              "id":1819,
                              "postcode_id":441,
                              "name":"Mohammadpur Thana (New)",
                              "value":"Mohammadpur Thana (New)"
                           },
                           {
                              "id":1820,
                              "postcode_id":441,
                              "name":"Shekhertek",
                              "value":"Shekhertek"
                           },
                           {
                              "id":1821,
                              "postcode_id":441,
                              "name":"Sher Shah Suri Road",
                              "value":"Sher Shah Suri Road"
                           },
                           {
                              "id":1822,
                              "postcode_id":441,
                              "name":"Sur Soyad Road",
                              "value":"Sur Soyad Road"
                           },
                           {
                              "id":1823,
                              "postcode_id":442,
                              "name":"Dhanmondi 10A",
                              "value":"Dhanmondi 10A"
                           },
                           {
                              "id":1824,
                              "postcode_id":442,
                              "name":"Dhanmondi 11",
                              "value":"Dhanmondi 11"
                           },
                           {
                              "id":1825,
                              "postcode_id":442,
                              "name":"Dhanmondi 11A",
                              "value":"Dhanmondi 11A"
                           },
                           {
                              "id":1826,
                              "postcode_id":442,
                              "name":"Dhanmondi 12A",
                              "value":"Dhanmondi 12A"
                           },
                           {
                              "id":1827,
                              "postcode_id":442,
                              "name":"Dhanmondi 15",
                              "value":"Dhanmondi 15"
                           },
                           {
                              "id":1828,
                              "postcode_id":442,
                              "name":"Dhanmondi 27",
                              "value":"Dhanmondi 27"
                           },
                           {
                              "id":1829,
                              "postcode_id":442,
                              "name":"Dhanmondi 28",
                              "value":"Dhanmondi 28"
                           },
                           {
                              "id":1830,
                              "postcode_id":442,
                              "name":"Dhanmondi 3",
                              "value":"Dhanmondi 3"
                           },
                           {
                              "id":1831,
                              "postcode_id":442,
                              "name":"Dhanmondi 32",
                              "value":"Dhanmondi 32"
                           },
                           {
                              "id":1832,
                              "postcode_id":442,
                              "name":"Dhanmondi 3A",
                              "value":"Dhanmondi 3A"
                           },
                           {
                              "id":1833,
                              "postcode_id":442,
                              "name":"Dhanmondi 4",
                              "value":"Dhanmondi 4"
                           },
                           {
                              "id":1834,
                              "postcode_id":442,
                              "name":"Dhanmondi 4A",
                              "value":"Dhanmondi 4A"
                           },
                           {
                              "id":1835,
                              "postcode_id":442,
                              "name":"Dhanmondi 5",
                              "value":"Dhanmondi 5"
                           },
                           {
                              "id":1836,
                              "postcode_id":442,
                              "name":"Dhanmondi 5A",
                              "value":"Dhanmondi 5A"
                           },
                           {
                              "id":1837,
                              "postcode_id":442,
                              "name":"Dhanmondi 6",
                              "value":"Dhanmondi 6"
                           },
                           {
                              "id":1838,
                              "postcode_id":442,
                              "name":"Dhanmondi 6A",
                              "value":"Dhanmondi 6A"
                           },
                           {
                              "id":1839,
                              "postcode_id":442,
                              "name":"Dhanmondi 7",
                              "value":"Dhanmondi 7"
                           },
                           {
                              "id":1840,
                              "postcode_id":442,
                              "name":"Dhanmondi 7A",
                              "value":"Dhanmondi 7A"
                           },
                           {
                              "id":1841,
                              "postcode_id":442,
                              "name":"Dhanmondi 8",
                              "value":"Dhanmondi 8"
                           },
                           {
                              "id":1842,
                              "postcode_id":442,
                              "name":"Dhanmondi 8A",
                              "value":"Dhanmondi 8A"
                           },
                           {
                              "id":1843,
                              "postcode_id":442,
                              "name":"Dhanmondi 9",
                              "value":"Dhanmondi 9"
                           },
                           {
                              "id":1844,
                              "postcode_id":442,
                              "name":"Dhanmondi 9A",
                              "value":"Dhanmondi 9A"
                           },
                           {
                              "id":1845,
                              "postcode_id":442,
                              "name":"Green Road",
                              "value":"Green Road"
                           },
                           {
                              "id":1846,
                              "postcode_id":442,
                              "name":"Hazaribag",
                              "value":"Hazaribag"
                           },
                           {
                              "id":1847,
                              "postcode_id":442,
                              "name":"Kalabagan",
                              "value":"Kalabagan"
                           },
                           {
                              "id":1848,
                              "postcode_id":442,
                              "name":"Shankar",
                              "value":"Shankar"
                           },
                           {
                              "id":1849,
                              "postcode_id":443,
                              "name":"Azimpur",
                              "value":"Azimpur"
                           },
                           {
                              "id":1850,
                              "postcode_id":443,
                              "name":"Dhaka University",
                              "value":"Dhaka University"
                           },
                           {
                              "id":1851,
                              "postcode_id":443,
                              "name":"Dhanmondi 1",
                              "value":"Dhanmondi 1"
                           },
                           {
                              "id":1852,
                              "postcode_id":443,
                              "name":"Dhanmondi 14",
                              "value":"Dhanmondi 14"
                           },
                           {
                              "id":1853,
                              "postcode_id":443,
                              "name":"Dhanmondi 1A",
                              "value":"Dhanmondi 1A"
                           },
                           {
                              "id":1854,
                              "postcode_id":443,
                              "name":"Dhanmondi 2",
                              "value":"Dhanmondi 2"
                           },
                           {
                              "id":1855,
                              "postcode_id":443,
                              "name":"Dhanmondi 2A",
                              "value":"Dhanmondi 2A"
                           },
                           {
                              "id":1856,
                              "postcode_id":443,
                              "name":"Elephant Road",
                              "value":"Elephant Road"
                           },
                           {
                              "id":1857,
                              "postcode_id":444,
                              "name":"Dhanmondi 10A",
                              "value":"Dhanmondi 10A"
                           },
                           {
                              "id":1858,
                              "postcode_id":444,
                              "name":"Dhanmondi 11",
                              "value":"Dhanmondi 11"
                           },
                           {
                              "id":1859,
                              "postcode_id":444,
                              "name":"Dhanmondi 11A",
                              "value":"Dhanmondi 11A"
                           },
                           {
                              "id":1860,
                              "postcode_id":444,
                              "name":"Dhanmondi 12A",
                              "value":"Dhanmondi 12A"
                           },
                           {
                              "id":1861,
                              "postcode_id":444,
                              "name":"Dhanmondi 15",
                              "value":"Dhanmondi 15"
                           },
                           {
                              "id":1862,
                              "postcode_id":444,
                              "name":"Dhanmondi 27",
                              "value":"Dhanmondi 27"
                           },
                           {
                              "id":1863,
                              "postcode_id":444,
                              "name":"Dhanmondi 28",
                              "value":"Dhanmondi 28"
                           },
                           {
                              "id":1864,
                              "postcode_id":444,
                              "name":"Dhanmondi 3",
                              "value":"Dhanmondi 3"
                           },
                           {
                              "id":1865,
                              "postcode_id":444,
                              "name":"Dhanmondi 32",
                              "value":"Dhanmondi 32"
                           },
                           {
                              "id":1866,
                              "postcode_id":444,
                              "name":"Dhanmondi 3A",
                              "value":"Dhanmondi 3A"
                           },
                           {
                              "id":1867,
                              "postcode_id":444,
                              "name":"Dhanmondi 4",
                              "value":"Dhanmondi 4"
                           },
                           {
                              "id":1868,
                              "postcode_id":444,
                              "name":"Dhanmondi 4A",
                              "value":"Dhanmondi 4A"
                           },
                           {
                              "id":1869,
                              "postcode_id":444,
                              "name":"Dhanmondi 5",
                              "value":"Dhanmondi 5"
                           },
                           {
                              "id":1870,
                              "postcode_id":444,
                              "name":"Dhanmondi 5A",
                              "value":"Dhanmondi 5A"
                           },
                           {
                              "id":1871,
                              "postcode_id":444,
                              "name":"Dhanmondi 6",
                              "value":"Dhanmondi 6"
                           },
                           {
                              "id":1872,
                              "postcode_id":444,
                              "name":"Dhanmondi 6A",
                              "value":"Dhanmondi 6A"
                           },
                           {
                              "id":1873,
                              "postcode_id":444,
                              "name":"Dhanmondi 7",
                              "value":"Dhanmondi 7"
                           },
                           {
                              "id":1874,
                              "postcode_id":444,
                              "name":"Dhanmondi 7A",
                              "value":"Dhanmondi 7A"
                           },
                           {
                              "id":1875,
                              "postcode_id":444,
                              "name":"Dhanmondi 8",
                              "value":"Dhanmondi 8"
                           },
                           {
                              "id":1876,
                              "postcode_id":444,
                              "name":"Dhanmondi 8A",
                              "value":"Dhanmondi 8A"
                           },
                           {
                              "id":1877,
                              "postcode_id":444,
                              "name":"Dhanmondi 9",
                              "value":"Dhanmondi 9"
                           },
                           {
                              "id":1878,
                              "postcode_id":444,
                              "name":"Dhanmondi 9A",
                              "value":"Dhanmondi 9A"
                           },
                           {
                              "id":1879,
                              "postcode_id":444,
                              "name":"Green Road",
                              "value":"Green Road"
                           },
                           {
                              "id":1880,
                              "postcode_id":444,
                              "name":"Hazaribag",
                              "value":"Hazaribag"
                           },
                           {
                              "id":1881,
                              "postcode_id":444,
                              "name":"Kalabagan",
                              "value":"Kalabagan"
                           },
                           {
                              "id":1882,
                              "postcode_id":444,
                              "name":"Shankar",
                              "value":"Shankar"
                           },
                           {
                              "id":1883,
                              "postcode_id":445,
                              "name":"Azimpur",
                              "value":"Azimpur"
                           },
                           {
                              "id":1884,
                              "postcode_id":445,
                              "name":"Dhaka University",
                              "value":"Dhaka University"
                           },
                           {
                              "id":1885,
                              "postcode_id":445,
                              "name":"Dhanmondi 1",
                              "value":"Dhanmondi 1"
                           },
                           {
                              "id":1886,
                              "postcode_id":445,
                              "name":"Dhanmondi 14",
                              "value":"Dhanmondi 14"
                           },
                           {
                              "id":1887,
                              "postcode_id":445,
                              "name":"Dhanmondi 1A",
                              "value":"Dhanmondi 1A"
                           },
                           {
                              "id":1888,
                              "postcode_id":445,
                              "name":"Dhanmondi 2",
                              "value":"Dhanmondi 2"
                           },
                           {
                              "id":1889,
                              "postcode_id":445,
                              "name":"Dhanmondi 2A",
                              "value":"Dhanmondi 2A"
                           },
                           {
                              "id":1890,
                              "postcode_id":445,
                              "name":"Elephant Road",
                              "value":"Elephant Road"
                           },
                           {
                              "id":1891,
                              "postcode_id":446,
                              "name":"Dhanmondi 10A",
                              "value":"Dhanmondi 10A"
                           },
                           {
                              "id":1892,
                              "postcode_id":446,
                              "name":"Dhanmondi 11",
                              "value":"Dhanmondi 11"
                           },
                           {
                              "id":1893,
                              "postcode_id":446,
                              "name":"Dhanmondi 11A",
                              "value":"Dhanmondi 11A"
                           },
                           {
                              "id":1894,
                              "postcode_id":446,
                              "name":"Dhanmondi 12A",
                              "value":"Dhanmondi 12A"
                           },
                           {
                              "id":1895,
                              "postcode_id":446,
                              "name":"Dhanmondi 15",
                              "value":"Dhanmondi 15"
                           },
                           {
                              "id":1896,
                              "postcode_id":446,
                              "name":"Dhanmondi 27",
                              "value":"Dhanmondi 27"
                           },
                           {
                              "id":1897,
                              "postcode_id":446,
                              "name":"Dhanmondi 28",
                              "value":"Dhanmondi 28"
                           },
                           {
                              "id":1898,
                              "postcode_id":446,
                              "name":"Dhanmondi 3",
                              "value":"Dhanmondi 3"
                           },
                           {
                              "id":1899,
                              "postcode_id":446,
                              "name":"Dhanmondi 32",
                              "value":"Dhanmondi 32"
                           },
                           {
                              "id":1900,
                              "postcode_id":446,
                              "name":"Dhanmondi 3A",
                              "value":"Dhanmondi 3A"
                           },
                           {
                              "id":1901,
                              "postcode_id":446,
                              "name":"Dhanmondi 4",
                              "value":"Dhanmondi 4"
                           },
                           {
                              "id":1902,
                              "postcode_id":446,
                              "name":"Dhanmondi 4A",
                              "value":"Dhanmondi 4A"
                           },
                           {
                              "id":1903,
                              "postcode_id":446,
                              "name":"Dhanmondi 5",
                              "value":"Dhanmondi 5"
                           },
                           {
                              "id":1904,
                              "postcode_id":446,
                              "name":"Dhanmondi 5A",
                              "value":"Dhanmondi 5A"
                           },
                           {
                              "id":1905,
                              "postcode_id":446,
                              "name":"Dhanmondi 6",
                              "value":"Dhanmondi 6"
                           },
                           {
                              "id":1906,
                              "postcode_id":446,
                              "name":"Dhanmondi 6A",
                              "value":"Dhanmondi 6A"
                           },
                           {
                              "id":1907,
                              "postcode_id":446,
                              "name":"Dhanmondi 7",
                              "value":"Dhanmondi 7"
                           },
                           {
                              "id":1908,
                              "postcode_id":446,
                              "name":"Dhanmondi 7A",
                              "value":"Dhanmondi 7A"
                           },
                           {
                              "id":1909,
                              "postcode_id":446,
                              "name":"Dhanmondi 8",
                              "value":"Dhanmondi 8"
                           },
                           {
                              "id":1910,
                              "postcode_id":446,
                              "name":"Dhanmondi 8A",
                              "value":"Dhanmondi 8A"
                           },
                           {
                              "id":1911,
                              "postcode_id":446,
                              "name":"Dhanmondi 9",
                              "value":"Dhanmondi 9"
                           },
                           {
                              "id":1912,
                              "postcode_id":446,
                              "name":"Dhanmondi 9A",
                              "value":"Dhanmondi 9A"
                           },
                           {
                              "id":1913,
                              "postcode_id":446,
                              "name":"Green Road",
                              "value":"Green Road"
                           },
                           {
                              "id":1914,
                              "postcode_id":446,
                              "name":"Hazaribag",
                              "value":"Hazaribag"
                           },
                           {
                              "id":1915,
                              "postcode_id":446,
                              "name":"Kalabagan",
                              "value":"Kalabagan"
                           },
                           {
                              "id":1916,
                              "postcode_id":446,
                              "name":"Shankar",
                              "value":"Shankar"
                           },
                           {
                              "id":1917,
                              "postcode_id":447,
                              "name":"Azimpur",
                              "value":"Azimpur"
                           },
                           {
                              "id":1918,
                              "postcode_id":447,
                              "name":"Dhaka University",
                              "value":"Dhaka University"
                           },
                           {
                              "id":1919,
                              "postcode_id":447,
                              "name":"Dhanmondi 1",
                              "value":"Dhanmondi 1"
                           },
                           {
                              "id":1920,
                              "postcode_id":447,
                              "name":"Dhanmondi 14",
                              "value":"Dhanmondi 14"
                           },
                           {
                              "id":1921,
                              "postcode_id":447,
                              "name":"Dhanmondi 1A",
                              "value":"Dhanmondi 1A"
                           },
                           {
                              "id":1922,
                              "postcode_id":447,
                              "name":"Dhanmondi 2",
                              "value":"Dhanmondi 2"
                           },
                           {
                              "id":1923,
                              "postcode_id":447,
                              "name":"Dhanmondi 2A",
                              "value":"Dhanmondi 2A"
                           },
                           {
                              "id":1924,
                              "postcode_id":447,
                              "name":"Elephant Road",
                              "value":"Elephant Road"
                           },
                           {
                              "id":1925,
                              "postcode_id":448,
                              "name":"Aam bagan",
                              "value":"Aam bagan"
                           },
                           {
                              "id":1926,
                              "postcode_id":448,
                              "name":"Addin hospital",
                              "value":"Addin hospital"
                           },
                           {
                              "id":1927,
                              "postcode_id":448,
                              "name":"Alen bari",
                              "value":"Alen bari"
                           },
                           {
                              "id":1928,
                              "postcode_id":448,
                              "name":"Amtoli",
                              "value":"Amtoli"
                           },
                           {
                              "id":1929,
                              "postcode_id":448,
                              "name":"Arjatpara",
                              "value":"Arjatpara"
                           },
                           {
                              "id":1930,
                              "postcode_id":448,
                              "name":"Arjot para",
                              "value":"Arjot para"
                           },
                           {
                              "id":1931,
                              "postcode_id":448,
                              "name":"BAF Shaheen College",
                              "value":"BAF Shaheen College"
                           },
                           {
                              "id":1932,
                              "postcode_id":448,
                              "name":"Begun Bari ",
                              "value":"Begun Bari "
                           },
                           {
                              "id":1933,
                              "postcode_id":448,
                              "name":"BFDC mor",
                              "value":"BFDC mor"
                           },
                           {
                              "id":1934,
                              "postcode_id":448,
                              "name":"Bhauya para",
                              "value":"Bhauya para"
                           },
                           {
                              "id":1935,
                              "postcode_id":448,
                              "name":"Bijoy Sharanani",
                              "value":"Bijoy Sharanani"
                           },
                           {
                              "id":1936,
                              "postcode_id":448,
                              "name":"Center point",
                              "value":"Center point"
                           },
                           {
                              "id":1937,
                              "postcode_id":448,
                              "name":"Chairman gali",
                              "value":"Chairman gali"
                           },
                           {
                              "id":1938,
                              "postcode_id":448,
                              "name":"Christian para",
                              "value":"Christian para"
                           },
                           {
                              "id":1939,
                              "postcode_id":448,
                              "name":"CID office",
                              "value":"CID office"
                           },
                           {
                              "id":1940,
                              "postcode_id":448,
                              "name":"dnc staff quarter",
                              "value":"dnc staff quarter"
                           },
                           {
                              "id":1941,
                              "postcode_id":448,
                              "name":"Doctor goli",
                              "value":"Doctor goli"
                           },
                           {
                              "id":1942,
                              "postcode_id":448,
                              "name":"East Nakhal para",
                              "value":"East Nakhal para"
                           },
                           {
                              "id":1943,
                              "postcode_id":448,
                              "name":"East noyatola",
                              "value":"East noyatola"
                           },
                           {
                              "id":1944,
                              "postcode_id":448,
                              "name":"Elenbari",
                              "value":"Elenbari"
                           },
                           {
                              "id":1945,
                              "postcode_id":448,
                              "name":"Farmgate",
                              "value":"Farmgate"
                           },
                           {
                              "id":1946,
                              "postcode_id":448,
                              "name":"FDC",
                              "value":"FDC"
                           },
                           {
                              "id":1947,
                              "postcode_id":448,
                              "name":"Green way",
                              "value":"Green way"
                           },
                           {
                              "id":1948,
                              "postcode_id":448,
                              "name":"Kuni para",
                              "value":"Kuni para"
                           },
                           {
                              "id":1949,
                              "postcode_id":448,
                              "name":"Kunipara",
                              "value":"Kunipara"
                           },
                           {
                              "id":1950,
                              "postcode_id":448,
                              "name":"lukaser mor",
                              "value":"lukaser mor"
                           },
                           {
                              "id":1951,
                              "postcode_id":448,
                              "name":"Mohakhali",
                              "value":"Mohakhali"
                           },
                           {
                              "id":1952,
                              "postcode_id":448,
                              "name":"Mohakhali bus terminal",
                              "value":"Mohakhali bus terminal"
                           },
                           {
                              "id":1953,
                              "postcode_id":448,
                              "name":"Mohakhali DOHS",
                              "value":"Mohakhali DOHS"
                           },
                           {
                              "id":1954,
                              "postcode_id":448,
                              "name":"Mohakhali Wireless",
                              "value":"Mohakhali Wireless"
                           },
                           {
                              "id":1955,
                              "postcode_id":448,
                              "name":"Nakhalpara",
                              "value":"Nakhalpara"
                           },
                           {
                              "id":1956,
                              "postcode_id":448,
                              "name":"Nijhum officers Quarters",
                              "value":"Nijhum officers Quarters"
                           },
                           {
                              "id":1957,
                              "postcode_id":448,
                              "name":"Notun Bag",
                              "value":"Notun Bag"
                           },
                           {
                              "id":1958,
                              "postcode_id":448,
                              "name":"Old airport road",
                              "value":"Old airport road"
                           },
                           {
                              "id":1959,
                              "postcode_id":448,
                              "name":"prime minister office",
                              "value":"prime minister office"
                           },
                           {
                              "id":1960,
                              "postcode_id":448,
                              "name":"Prodan muntri karjaloy",
                              "value":"Prodan muntri karjaloy"
                           },
                           {
                              "id":1961,
                              "postcode_id":448,
                              "name":"Rangs Vaban",
                              "value":"Rangs Vaban"
                           },
                           {
                              "id":1962,
                              "postcode_id":448,
                              "name":"Riaz bag",
                              "value":"Riaz bag"
                           },
                           {
                              "id":1963,
                              "postcode_id":448,
                              "name":"Rosulbag",
                              "value":"Rosulbag"
                           },
                           {
                              "id":1964,
                              "postcode_id":448,
                              "name":"Sadhinata tower",
                              "value":"Sadhinata tower"
                           },
                           {
                              "id":1965,
                              "postcode_id":448,
                              "name":"Satrasta",
                              "value":"Satrasta"
                           },
                           {
                              "id":1966,
                              "postcode_id":448,
                              "name":"Satta gali",
                              "value":"Satta gali"
                           },
                           {
                              "id":1967,
                              "postcode_id":448,
                              "name":"Shaheenbag",
                              "value":"Shaheenbag"
                           },
                           {
                              "id":1968,
                              "postcode_id":448,
                              "name":"T&T gali",
                              "value":"T&T gali"
                           },
                           {
                              "id":1969,
                              "postcode_id":448,
                              "name":"Taltola",
                              "value":"Taltola"
                           },
                           {
                              "id":1970,
                              "postcode_id":448,
                              "name":"TB Gate",
                              "value":"TB Gate"
                           },
                           {
                              "id":1971,
                              "postcode_id":448,
                              "name":"Tejgaon",
                              "value":"Tejgaon"
                           },
                           {
                              "id":1972,
                              "postcode_id":448,
                              "name":"Tejgaon Industrial Area",
                              "value":"Tejgaon Industrial Area"
                           },
                           {
                              "id":1973,
                              "postcode_id":448,
                              "name":"Tejgaon link road",
                              "value":"Tejgaon link road"
                           },
                           {
                              "id":1974,
                              "postcode_id":448,
                              "name":"Tejgaon Truck Stand",
                              "value":"Tejgaon Truck Stand"
                           },
                           {
                              "id":1975,
                              "postcode_id":448,
                              "name":"Tibet",
                              "value":"Tibet"
                           },
                           {
                              "id":1976,
                              "postcode_id":448,
                              "name":"Truck stand",
                              "value":"Truck stand"
                           },
                           {
                              "id":1977,
                              "postcode_id":448,
                              "name":"Vodro gali",
                              "value":"Vodro gali"
                           },
                           {
                              "id":1978,
                              "postcode_id":448,
                              "name":"West nakhal para",
                              "value":"West nakhal para"
                           },
                           {
                              "id":1979,
                              "postcode_id":449,
                              "name":"Janjira",
                              "value":"Janjira"
                           },
                           {
                              "id":1980,
                              "postcode_id":450,
                              "name":"Naria",
                              "value":"Naria"
                           },
                           {
                              "id":1981,
                              "postcode_id":451,
                              "name":"Goshairhat",
                              "value":"Goshairhat"
                           },
                           {
                              "id":1982,
                              "postcode_id":452,
                              "name":"Damuddya",
                              "value":"Damuddya"
                           },
                           {
                              "id":1983,
                              "postcode_id":453,
                              "name":"Bhedarganj",
                              "value":"Bhedarganj"
                           },
                           {
                              "id":1984,
                              "postcode_id":454,
                              "name":"Shariatpur Sadar",
                              "value":"Shariatpur Sadar"
                           },
                           {
                              "id":1985,
                              "postcode_id":455,
                              "name":"Nailtabari",
                              "value":"Nailtabari"
                           },
                           {
                              "id":1986,
                              "postcode_id":456,
                              "name":"Sreebordi",
                              "value":"Sreebordi"
                           },
                           {
                              "id":1987,
                              "postcode_id":457,
                              "name":"Jhenaigati",
                              "value":"Jhenaigati"
                           },
                           {
                              "id":1988,
                              "postcode_id":458,
                              "name":"Nakla",
                              "value":"Nakla"
                           },
                           {
                              "id":1989,
                              "postcode_id":459,
                              "name":"Sherpur Sadar",
                              "value":"Sherpur Sadar"
                           },
                           {
                              "id":1990,
                              "postcode_id":460,
                              "name":"Sirajganj Sadar",
                              "value":"Sirajganj Sadar"
                           },
                           {
                              "id":1991,
                              "postcode_id":461,
                              "name":"Tahirpur",
                              "value":"Tahirpur"
                           },
                           {
                              "id":1992,
                              "postcode_id":462,
                              "name":"Sulla",
                              "value":"Sulla"
                           },
                           {
                              "id":1993,
                              "postcode_id":463,
                              "name":"Dakhin sunamganj",
                              "value":"Dakhin sunamganj"
                           },
                           {
                              "id":1994,
                              "postcode_id":463,
                              "name":"Jamalganj",
                              "value":"Jamalganj"
                           },
                           {
                              "id":1995,
                              "postcode_id":464,
                              "name":"Dharmapasha",
                              "value":"Dharmapasha"
                           },
                           {
                              "id":1996,
                              "postcode_id":464,
                              "name":"Sunamganj Sadar",
                              "value":"Sunamganj Sadar"
                           },
                           {
                              "id":1997,
                              "postcode_id":465,
                              "name":"Biswamvarpur",
                              "value":"Biswamvarpur"
                           },
                           {
                              "id":1998,
                              "postcode_id":466,
                              "name":"Chatak",
                              "value":"Chatak"
                           },
                           {
                              "id":1999,
                              "postcode_id":466,
                              "name":"Doarabazar",
                              "value":"Doarabazar"
                           },
                           {
                              "id":2000,
                              "postcode_id":467,
                              "name":"Jagannathpur",
                              "value":"Jagannathpur"
                           },
                           {
                              "id":2001,
                              "postcode_id":468,
                              "name":"Dakhin sunamganj",
                              "value":"Dakhin sunamganj"
                           },
                           {
                              "id":2002,
                              "postcode_id":468,
                              "name":"Jamalganj",
                              "value":"Jamalganj"
                           },
                           {
                              "id":2003,
                              "postcode_id":469,
                              "name":"Derai",
                              "value":"Derai"
                           },
                           {
                              "id":2004,
                              "postcode_id":470,
                              "name":"Chatak",
                              "value":"Chatak"
                           },
                           {
                              "id":2005,
                              "postcode_id":470,
                              "name":"Doarabazar",
                              "value":"Doarabazar"
                           },
                           {
                              "id":2006,
                              "postcode_id":471,
                              "name":"Biswamvarpur",
                              "value":"Biswamvarpur"
                           },
                           {
                              "id":2007,
                              "postcode_id":472,
                              "name":"Sylhet Shahjalal University",
                              "value":"Sylhet Shahjalal University"
                           },
                           {
                              "id":2008,
                              "postcode_id":473,
                              "name":"Jalalabad",
                              "value":"Jalalabad"
                           },
                           {
                              "id":2009,
                              "postcode_id":474,
                              "name":"Muglabazar",
                              "value":"Muglabazar"
                           },
                           {
                              "id":2010,
                              "postcode_id":474,
                              "name":"Shahporan",
                              "value":"Shahporan"
                           },
                           {
                              "id":2011,
                              "postcode_id":474,
                              "name":"Sylhet City Corporation",
                              "value":"Sylhet City Corporation"
                           },
                           {
                              "id":2012,
                              "postcode_id":481,
                              "name":"Sakhipur",
                              "value":"Sakhipur"
                           },
                           {
                              "id":2013,
                              "postcode_id":482,
                              "name":"Madhupur",
                              "value":"Madhupur"
                           },
                           {
                              "id":2014,
                              "postcode_id":483,
                              "name":"Delduar",
                              "value":"Delduar"
                           },
                           {
                              "id":2015,
                              "postcode_id":484,
                              "name":"Dhanbari",
                              "value":"Dhanbari"
                           },
                           {
                              "id":2016,
                              "postcode_id":485,
                              "name":"Basail",
                              "value":"Basail"
                           },
                           {
                              "id":2017,
                              "postcode_id":486,
                              "name":"Bhuapur",
                              "value":"Bhuapur"
                           },
                           {
                              "id":2018,
                              "postcode_id":487,
                              "name":"Nagarpur",
                              "value":"Nagarpur"
                           },
                           {
                              "id":2019,
                              "postcode_id":488,
                              "name":"Gopalpur",
                              "value":"Gopalpur"
                           },
                           {
                              "id":2020,
                              "postcode_id":489,
                              "name":"Kalihati",
                              "value":"Kalihati"
                           },
                           {
                              "id":2021,
                              "postcode_id":490,
                              "name":"Mirzapur",
                              "value":"Mirzapur"
                           },
                           {
                              "id":2022,
                              "postcode_id":491,
                              "name":"Ghatail",
                              "value":"Ghatail"
                           },
                           {
                              "id":2023,
                              "postcode_id":492,
                              "name":"Tangail Sadar",
                              "value":"Tangail Sadar"
                           },
                           {
                              "id":2024,
                              "postcode_id":493,
                              "name":"Thakurgaon Sadar",
                              "value":"Thakurgaon Sadar"
                           }
                        ],
                        "stores":[
                           {
                              "name":"test store",
                              "value":"k5u8owcq7k0wo8s4gw44"
                           },
                           {
                              "name":"test rubab store outside",
                              "value":"df1rf6mgdrwckcwwc08w"
                           },
                           {
                              "name":"test outside shadar",
                              "value":"tdx4j7l8ei8s00g4w08s"
                           },
                           {
                              "name":"Rama Williams",
                              "value":"fzjm985ucbkggckgkgg8"
                           },
                           {
                              "name":"Rama Williams",
                              "value":"b6i49rxy3xkoock8gcg4"
                           },
                           {
                              "name":"Kirk Browning",
                              "value":"plcht608y0gowc8k8scc"
                           },
                           {
                              "name":"Katelyn Hubbard",
                              "value":"o8gqmyxgoxco44044s40"
                           },
                           {
                              "name":"Katelyn Hubbard",
                              "value":"l3vgm67won44g8wwo48g"
                           }
                        ],
                        "ecourier_branches":[
                           {
                              "name":"Dhanmondi Hub",
                              "value":"18488"
                           },
                           {
                              "name":"Motijheel Hub",
                              "value":"18489"
                           },
                           {
                              "name":"Badda Hub",
                              "value":"18490"
                           },
                           {
                              "name":"Mirpur Hub",
                              "value":"18491"
                           },
                           {
                              "name":"Uttara Hub",
                              "value":"18492"
                           },
                           {
                              "name":"Chittagong City",
                              "value":"18493"
                           },
                           {
                              "name":"Narayangonj Hub",
                              "value":"18496"
                           },
                           {
                              "name":"Gazipur HUB",
                              "value":"18497"
                           },
                           {
                              "name":"Khulna Hub",
                              "value":"18498"
                           },
                           {
                              "name":"Comilla Hub",
                              "value":"18499"
                           },
                           {
                              "name":"Sylhet Hub",
                              "value":"18500"
                           },
                           {
                              "name":"Savar Hub",
                              "value":"18502"
                           },
                           {
                              "name":"Bogra Hub",
                              "value":"18503"
                           },
                           {
                              "name":"Rangpur Hub",
                              "value":"18504"
                           },
                           {
                              "name":"SAP",
                              "value":"18505"
                           },
                           {
                              "name":"Comilla (SUB)",
                              "value":"18506"
                           },
                           {
                              "name":"Narsingdi Hub",
                              "value":"18507"
                           },
                           {
                              "name":"Feni Hub",
                              "value":"18509"
                           },
                           {
                              "name":"Habiganj Hub",
                              "value":"18511"
                           },
                           {
                              "name":"Nilphamari Hub",
                              "value":"18515"
                           },
                           {
                              "name":"Keraniganj Hub",
                              "value":"18523"
                           },
                           {
                              "name":"Uttara Hub2",
                              "value":"18533"
                           },
                           {
                              "name":"Dhanmondi2",
                              "value":"18534"
                           },
                           {
                              "name":"Mirpur2",
                              "value":"18535"
                           },
                           {
                              "name":"PO (GEP)",
                              "value":"18536"
                           },
                           {
                              "name":"SBN (Sundarban)",
                              "value":"18537"
                           },
                           {
                              "name":"Agent Training",
                              "value":"18538"
                           },
                           {
                              "name":"Khagrachari Hub",
                              "value":"18539"
                           },
                           {
                              "name":"Lakshmipur Hub",
                              "value":"18544"
                           },
                           {
                              "name":"Gauripur Hub",
                              "value":"18549"
                           },
                           {
                              "name":"Maghbazar Hub",
                              "value":"18550"
                           },
                           {
                              "name":"Bulk Hub",
                              "value":"18553"
                           },
                           {
                              "name":"FulfillMent",
                              "value":"18556"
                           },
                           {
                              "name":"Test HUB",
                              "value":"18557"
                           },
                           {
                              "name":"Jhalakati",
                              "value":"18562"
                           },
                           {
                              "name":"Mymensnigh(RIYAD)",
                              "value":"18565"
                           },
                           {
                              "name":"USB",
                              "value":"18570"
                           },
                           {
                              "name":"AJR",
                              "value":"18571"
                           },
                           {
                              "name":"Gazipur Sub-Area",
                              "value":"18572"
                           },
                           {
                              "name":"Savar Sub-Area",
                              "value":"18573"
                           },
                           {
                              "name":"Laxmipur(M\/s. Rubel Enterprise)",
                              "value":"18574"
                           },
                           {
                              "name":"Noakhali(M\/s. H B Trading)",
                              "value":"18575"
                           },
                           {
                              "name":"Rangpur(M\/s. Progati Enterprise)",
                              "value":"18576"
                           },
                           {
                              "name":"Sylhet(M\/s. Bushra Constraction)",
                              "value":"18577"
                           },
                           {
                              "name":"Narsinghdi (M\/s. Sujan Enterprise)",
                              "value":"18578"
                           },
                           {
                              "name":"Comilla(M\/s. Parvez Enterprise)",
                              "value":"18579"
                           },
                           {
                              "name":"Saidur Rahman",
                              "value":"18580"
                           },
                           {
                              "name":"Narayanganj Branch",
                              "value":"18581"
                           },
                           {
                              "name":"Nilphamari(M\/s. Chowrongi Cyber Network)",
                              "value":"18582"
                           },
                           {
                              "name":"Feni (M\/s. S. R. Enterprise)",
                              "value":"18583"
                           },
                           {
                              "name":"Narayanganj(N J Enterprise)",
                              "value":"18585"
                           },
                           {
                              "name":"Barishal(M\/s. A K Enterprise)",
                              "value":"18586"
                           },
                           {
                              "name":"Netrokona (M\/s. Shashi Mohon Roy)",
                              "value":"18587"
                           },
                           {
                              "name":"Khulna(S.M.Kamal Mahamud)",
                              "value":"18591"
                           },
                           {
                              "name":"Moulvibazar(Bengal Express)",
                              "value":"18592"
                           },
                           {
                              "name":"Delivery T",
                              "value":"18593"
                           },
                           {
                              "name":"Chandpur(M\/s. Bondhon Enterprise)",
                              "value":"18594"
                           },
                           {
                              "name":"Panchgar(MCO Traders)",
                              "value":"18595"
                           },
                           {
                              "name":"Delivery_E",
                              "value":"18596"
                           },
                           {
                              "name":"Natore(Door Gallery)",
                              "value":"18597"
                           },
                           {
                              "name":"Magura(Tabassum Enterprise)",
                              "value":"18598"
                           },
                           {
                              "name":"Bogura(Talha Traders)",
                              "value":"18599"
                           },
                           {
                              "name":"Noakhali(Oli Ullah Enterprise)",
                              "value":"18600"
                           },
                           {
                              "name":"Barishal(AlokeShikha)",
                              "value":"18601"
                           },
                           {
                              "name":"Bagerhat(Dactarachen.com)",
                              "value":"18602"
                           },
                           {
                              "name":"Jessore(Dipok & Brothers)",
                              "value":"18603"
                           },
                           {
                              "name":"Narail(Dipok & Brothers)",
                              "value":"18604"
                           },
                           {
                              "name":"Keraniganj(Speed Net Internet Service)",
                              "value":"18605"
                           },
                           {
                              "name":"Munshiganj(Speed Net Internet Service)",
                              "value":"18606"
                           },
                           {
                              "name":"Khagrachari(SA Traders)",
                              "value":"18607"
                           },
                           {
                              "name":"Rajshahi Branch",
                              "value":"18608"
                           },
                           {
                              "name":"Moulvibazar(M\/s. Salam Enterprise)",
                              "value":"18609"
                           },
                           {
                              "name":"Lalmonirhat(Toushi Enterprise)",
                              "value":"18610"
                           },
                           {
                              "name":"Tangail(Bismillah Service)",
                              "value":"18611"
                           },
                           {
                              "name":"Chittagong(S A Traders)",
                              "value":"18612"
                           },
                           {
                              "name":"bm1",
                              "value":"19363"
                           },
                           {
                              "name":"Manager Branch 2",
                              "value":"19364"
                           }
                        ]
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }

        setDistricts(orderLocations.district_list || []);
        setIsLoading(false);
    };

    const refreshLocations = (current, next, value) => {
        if (current === 'district' && next === 'thana') {
            let filteredThanas = (orderLocations?.thana_list || []).filter(item => item.district_id === value.id);
            setThanas(filteredThanas);
            setPostCodes([]);
            setAreas([]);
        }
        else if (current === 'thana' && next === 'postcode') {
            let filteredPCs = (orderLocations?.postcode_list || []).filter(item => item.thana_id === value.id);
            setPostCodes(filteredPCs);
            setAreas([]);
        }
        else if (current === 'postcode' && next === 'area') {
            let filteredAreas = (orderLocations?.area_list || []).filter(item => item.postcode_id === value.id);
            setAreas(filteredAreas);
        }
    };

    const districtList = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={districts} 
                columnDefinition={orderLocationColumns('district', 'thana', refreshLocations)}
                defaultPageSize={10} 
                serverSide={false}
                disableSearch={false}
                searchGrid={12}
                showPageJump={false}
                showPageSizeOptions={false}
                // columnOnClickTrigger={processColumnOnClick}
            />
        </React.Fragment>
    };

    const thanaList = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={thanas} 
                columnDefinition={orderLocationColumns('thana', 'postcode', refreshLocations)}
                defaultPageSize={10} 
                serverSide={false}
                disableSearch={false}
                searchGrid={12}
                showPageJump={false}
                showPageSizeOptions={false}
            />
        </React.Fragment>
    };

    const postcodeList = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={postCodes} 
                columnDefinition={orderLocationColumns('postcode', 'area', refreshLocations)}
                defaultPageSize={10} 
                serverSide={false}
                disableSearch={false}
                searchGrid={12}
                showPageJump={false}
                showPageSizeOptions={false}
            />
        </React.Fragment>
    };

    const areaList = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={areas} 
                columnDefinition={orderLocationColumns('area', 'area', refreshLocations)}
                defaultPageSize={10} 
                serverSide={false}
                disableSearch={false}
                searchGrid={12}
                showPageJump={false}
                showPageSizeOptions={false}
            />
        </React.Fragment>
    };

    // const processColumnOnClick = (columnId, row) => {
    //     if (columnId === "name") {
    //         alert('clicked');
    //     }
    // };

    return (
        <div className="row">
            <div className="col-md-6">
                <CardWrapper
                    headerTitle="District List"
                    toggleOn={true}
                    isOpen={true}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={isLoading}
                    bodyContent={districtList}
                />
            </div>
            <div className="col-md-6">
                <CardWrapper
                    headerTitle="Thana List"
                    toggleOn={true}
                    isOpen={true}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={isLoading}
                    bodyContent={thanaList}
                />
            </div>
            <div className="col-md-6">
                <CardWrapper
                    headerTitle="Postcode List"
                    toggleOn={true}
                    isOpen={true}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={isLoading}
                    bodyContent={postcodeList}
                />
            </div>
            <div className="col-md-6">
                <CardWrapper
                    headerTitle="Area List"
                    toggleOn={true}
                    isOpen={true}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={isLoading}
                    bodyContent={areaList}
                />
            </div>
        </div>
    );
}
 
export default OrderLocation;
