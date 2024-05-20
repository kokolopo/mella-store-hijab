# API Docs BahanaLink

---

- `**[POST]` Send Message Via WA (WATI.io)\*\*
  | Description   | API ini digunakan untuk keperluan mengirim pesan ke WA investor, pengirim pesan melibatkan pihak ke tiga (WATI.io). Dokumentasi API WATI pada tautan https://app.wati.io/api-docs |
  | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | URL           | https://app-server.wati.io/api/v1/sendTemplateMessage?whatsappNumber=62881752799412312312                                                                                         |
  | Auth Required | Ya (Bearer {token})                                                                                                                                                               |
  | Paramater      | Type   | Required | Place | Description                                                             |
  | -------------- | ------ | -------- | ----- | ----------------------------------------------------------------------- |
  | body params    |        |          |       |                                                                         |
  | template_name  | string | true     | body  | nama template message yang digunakan untuk mengirim pesan               |
  | broadcast_name | string | false    | body  | nama broadcast pesan                                                    |
  | name           | string | false    | body  | nama key dari paramer yang ada di template message yang digunakan       |
  | value          | string | false    | body  | value dari key dari paramer yang ada di template message yang digunakan |
  | query params   |        |          |       |                                                                         |
  | whatsappNumber | string | true     | url   | nomor Whatsaap penerima                                                 |
  - **✅ Request Body**
    ```json
    {
      "template_name": "welcome_wati_v1",
      "broadcast_name": "welcome_wati_v1",
      "parameters": [
        {
          "name": "name",
          "value": "Arda"
        }
      ]
    }
    ```
  - **✅ Response 200**
    ```json
    {
      "result": true,
      "phone_number": "628817527994",
      "template_name": "welcome_wati_v1",
      "parameteres": [
        {
          "name": "name",
          "value": "Arda"
        }
      ],
      "contact": {
        "id": "664300afcb326f1388e50697",
        "wAid": "628817527994",
        "firstName": "Koko Lopo",
        "fullName": "Koko Lopo",
        "phone": "628817527994",
        "source": null,
        "contactStatus": "VALID",
        "photo": null,
        "created": "May-14-2024",
        "customParams": [
          {
            "name": "language",
            "value": "en"
          },
          {
            "name": "name",
            "value": "Koko Lopo"
          },
          {
            "name": "phone",
            "value": "628817527994"
          },
          {
            "name": "test",
            "value": "asd"
          }
        ],
        "optedIn": false,
        "isDeleted": false,
        "lastUpdated": "2024-05-16T08:23:24.703Z",
        "allowBroadcast": true,
        "allowSMS": true,
        "teamIds": ["664300aecb326f1388e50680"],
        "isInFlow": false,
        "lastFlowId": "653ba5725d56cbbe025cee40",
        "currentFlowNodeId": "main_message-oDsYr",
        "selectedHubspotId": null
      },
      "model": {
        "ids": ["664300afcb326f1388e50697"]
      },
      "validWhatsAppNumber": true
    }
    ```

---

- `**[POST]` Check Number Availability\*\*
  | Description   | API ini digunakan untuk memeriksan apakah nomor telpon yang dimasukan sudah terdaftar atau belum |
  | ------------- | ------------------------------------------------------------------------------------------------ |
  | URL           | {IP:PORT}/bahana-link/api/v1/phone-check                                                         |
  | Auth Required | -                                                                                                |
  | Table Ref     | web_tbl_user                                                                                     |
  | Paramater   | Type   | Required | Place | Description                                    |
  | ----------- | ------ | -------- | ----- | ---------------------------------------------- |
  | body params |        |          |       |                                                |
  | PhoneNumber | string | true     | body  | nomor telpon yang user masukan pada saat login |
  | url params  |        |          |       |                                                |
  |             |        |          |       |                                                |
  - **✅ Request Body**
    ```jsx
    {
        "PhoneNumber": "62881111"
    }
    ```
  - **✅ Response 200**
    ```jsx
    {
    	"RC": 200,
      "RCM": "phone number is available",
      "Data": {
            "PhoneNumber": "62881111",
            "IsRegistered": true
        }
    }
    ```
  - **✅ Response 404**
    ```jsx
    {
    	"RC": 404,
      "RCM": "phone number is unavailable",
      "Data": {
            "PhoneNumber": "62881111",
            "IsRegistered": true
        }
    }
    ```

---

- `**[GET]` List FAQ\*\*
  | Description   | API ini digunakan untuk mendapatkan data FAQ |
  | ------------- | -------------------------------------------- |
  | URL           | {IP:PORT}/bahana-link/api/v1/faq             |
  | Auth Required | Ya                                           |
  | Table Ref     | db_aperd_compro_bl → faq                     |
  | Paramater   | Type | Required | Place | Description |
  | ----------- | ---- | -------- | ----- | ----------- |
  | body params |      |          |       |             |
  |             |      |          |       |             |
  | url params  |      |          |       |             |
  |             |      |          |       |             |
  - **✅ Response 200**
    ```json
    {
      "RC": 200,
      "RCM": "success get data FAQ",
      "Data": [
        {
          "ID": 1,
          "NamaHeadlineINA": "Bagaimana cara membeli reksadana",
          "NamaHeadlineENG": "How to buy mutualfunds",
          "DataKontenINA": "lorem ipsum",
          "DataKontenENG": "lorem ipsum",
          "Status": 1 // 1 => active, 0 => blocked
        },
        {
          "ID": 2,
          "NamaHeadlineINA": "Bagaimana cara membeli reksadana",
          "NamaHeadlineENG": "How to buy mutualfunds",
          "DataKontenINA": "lorem ipsum",
          "DataKontenENG": "lorem ipsum",
          "Status": 1
        }
      ]
    }
    ```
  - **✅ Response 404**
    ```jsx
    {
    }
    ```

---

- `**[POST]` Callback PIM to BO\*\*
  | Description   | API ini digunakan untuk pihak PIM mengirimkan data kembalian dari proses approval transaction |
  | ------------- | --------------------------------------------------------------------------------------------- |
  | URL           | {IP:PORT}/bahana-link/api/v1/approval-transactions/callback                                   |
  | Auth Required | Ya                                                                                            |
  | Paramater             | Type      | Required | Place | Description |
  | --------------------- | --------- | -------- | ----- | ----------- |
  | body params           |           |          |       |             |
  | TrxID                 | int       | true     | body  |             |
  | TrxReff               | string    | true     | body  |             |
  | TrxTypeID             | int       | true     | body  |             |
  | ClientID              | int       | true     | body  |             |
  | PortfolioID           | int       | true     | body  |             |
  | TrxAmount             | decimal   | true     | body  |             |
  | AdminApprovalStatusID | int       | true     | body  |             |
  | Timestamp             | timestamp | true     | body  |             |
  |                       |           |          |       |             |
  | url params            |           |          |       |             |
  |                       |           |          |       |             |
  - **✅ Request Body**
    ```json
    {
      "TrxID": 11231,
      "TrxReff": "20200200875",
      "TrxTypeID": 2,
      "ClientID": 12,
      "PortfolioID": 123,
      "TrxAmount": 20000000,
      "AdminApprovalStatusID": 3, // 3 => success, 4 => reject
      "Timestamp": "2024-04-30T12:00:00Z"
    }
    ```
  - **✅ Response 200**
    ```jsx
    {
    }
    ```
  - **✅ Response 400**
    ```jsx
    {
    }
    ```

---

- `**[POST]` Approval Transaction To PIM\*\*
  | Description   | API ini digunakan untuk mengirim data transaksi ke sistem PIM pada proses approvment transaksi terjadi |
  | ------------- | ------------------------------------------------------------------------------------------------------ |
  | URL           | {IP:PORT}/bahana-link/api/v1/approval-transactions                                                     |
  | Auth Required | Ya                                                                                                     |
  | Table Ref     | web_tbl_transaction                                                                                    |
  | Paramater        | Type      | Required | Place | Description                                                                   |
  | ---------------- | --------- | -------- | ----- | ----------------------------------------------------------------------------- |
  | body params      |           |          |       |                                                                               |
  | TrxID            | int       | true     | body  | identitas unique milik data transaksi                                         |
  | TrxReff          | string    | true     | body  | identitas unique milik data transaksi untuk mereferensikan pada integrasi PIM |
  | TrxDate          | timestamp | true     | body  | tanggal data transaksi dibuat                                                 |
  | TrxTypeID        | int       | true     | body  | jenis transaksi yang dibuat                                                   |
  | TrxStatusID      | int       | true     | body  | status transaksi                                                              |
  | ClientID         | int       | true     | body  | unique identitas yang mereference kepada investor                             |
  | PortfolioID      | int       | true     | body  | unique identitas yang mereference kepada produk reksa dana                    |
  | TrxAmount        | decimal   | true     | body  | jumlah nominal transaksi yang dibuat investor                                 |
  | UploadedDocument | string    | true     | body  | bukti transferan milik investor                                               |
  | GoodFund         | boolean   | true     | body  | apakah jumlah yang ditranfer investor sudah sesuai. 1 ⇒ true, 0 ⇒ false       |
  |                  |           |          |       |                                                                               |
  | url params       |           |          |       |                                                                               |
  |                  |           |          |       |                                                                               |
  - **✅ Request Body**
    ```json
    {
      "TrxID": 11231,
      "TrxReff": "20200200875",
      "TrxDate": "2020-02-27 12:43:38",
      "TrxTypeID": 2,
      "TrxStatusID": 1,
      "ClientID": 12,
      "PortfolioID": 123,
      "TrxAmount": 20000000,
      "UploadedDocument": "3964_20200227125221.jpg",
      "GoodFund": 1
    }
    ```
  - **✅ Response 200**
    ```jsx
    {
      "RC": 200,
      "RCM": "success post data to pim",
    }
    ```
  - **✅ Response 404**
    ```jsx
    {
    }
    ```

---

- PRODUCT
  ***
  - `**[GET]` List Product\*\*
    | Description                                                                            | API ini digunakan untuk mendapatkan list product di BahanaLink |
    | -------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
    | URL                                                                                    | {IP:PORT}/bahana-link/api/v1/products                          |
    | {IP:PORT}/bahana-link/api/v1/products?perPage=3&page=1&fp=1&fs=1&fc=1,2,3,4&tranding=1 |
    | Auth Required                                                                          | -                                                              |
    | Tabel Ref                                                                              | sec_tbl_portfolio/                                             |
    | Paramater    | Type | Required | Place | Description                                                                                                  |
    | ------------ | ---- | -------- | ----- | ------------------------------------------------------------------------------------------------------------ |
    | body params  |      |          |       |                                                                                                              |
    |              |      |          |       |                                                                                                              |
    | url params   |      |          |       |                                                                                                              |
    |              |      |          |       |                                                                                                              |
    | query params |      |          |       |                                                                                                              |
    | perPage      | int  | false    | url   | untuk mengatur limit data per halaman, default = 10                                                          |
    | page         | int  | false    | url   | untuk merujuk pada halaman yang diinginkan, default 1                                                        |
    | fp           | int  | false    | url   | fp (fund profile) by default bernilai 0, jika diberi nilai 1 maka akan filter berdasarkan risk profile user  |
    | fs           | int  | false    | url   | fs (fund syariah) by default bernilai 0, jika diberikan nilai 1 maka akan filter berdasarkan product syariah |
    | fc           | int  | false    | url   | fc (fund category) by default bernilai 1,2,3,4.                                                              |
    parameter value :
    1: pasar uang
    2: pendapatan tetap
    3: campuran
    4: saham |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch data products",
        "Meta": {
          "TotalData": 10,
          "CurrentPage": 1,
          "PerPage": 3,
          "FP": 0,
          "FS": 1,
          "FC": [1, 2, 4],
          "Tranding": 1
        },
        "Data": [
          {
            "PortfolioID": 1,
            "Name": "Bahana Dana Likuid",
            "Type": "Pasar Uang",
            "Nav": 1796.18,
            "AUM": "6529.93 Milyar",
            "LastNavPeriode": "07-03-2024",
            "HistoricalPerformance": {
              "1M": "0.32",
              "1Y": "3.21"
            },
            "RiskProfile": 1,
            "Prospektus": "https://link......",
            "Factsheet": "https://link......"
          },
          {
            "PortfolioID": 2,
            "Name": "Bahana MES Syariah Fund Kelas G",
            "Type": "Pendapatan Tetap",
            "Nav": 1796.18,
            "AUM": "6529.93 Milyar",
            "LastNavPeriode": "07-03-2024",
            "HistoricalPerformance": {
              "M": "0.32",
              "Y": "3.21"
            },
            "RiskProfile": 2,
            "Prospektus": "https://link......",
            "Factsheet": "https://link......"
          }
        ]
      }

      ```
    - **✅ Response 400**
      ```jsx
      {
        "RC": 400,
        "RCM": "fail fetch data products",
        "Data": 0
      }

      ```
  ***
  - `**[GET]` Detail Product\*\*
    | Description   | API ini digunakan untuk mendapatkan detail product di BahanaLink |
    | ------------- | ---------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/products/{portfolio_id}             |
    | Auth Required | -                                                                |
    | Table Ref     | sec_tbl_portfolio/                                               |
    | Paramater    | Type | Required | Place | Description               |
    | ------------ | ---- | -------- | ----- | ------------------------- |
    | body params  |      |          |       |                           |
    |              |      |          |       |                           |
    | url params   |      |          |       |                           |
    | portfolio_id | int  | true     | url   | id dari product portfolio |
    - **✅ Response 200**
      ```json
      {
        "Rc": 200,
        "Rcm": "success fetch detail product id: {productID}",
        "Data": {
          "PortfolioID": 1,
          "Name": "Bahana Dana Likuid",
          "Description": "Bahana Dana Likuid (BDL) adalah Reksa Dana Pasar Uang (100% Pasar Uang/Kas) yang memberikan solusi manajemen likuiditas jangka pendek bagi para investor dengan tetap memberikan imbal hasil yang optimal melalui penempatan pada instrumen pasar uang seperti deposito. BDL cocok untuk profil nasabah konservatif.",
          "Type": "Pasar Uang",
          "NAV": 1796.18,
          "LastNavPeriode": "07-03-2024",
          "AUM": 32000000000,
          "AssetAllocation": {
            "Saham": 0,
            "Obligasi": 99,
            "Liquiditas": 1
          },
          "LaunchingDate": "16-04-2004",
          "Currency": "Rupiah",
          "BankCustodian": "Citibank",
          "BloombersTicker": "BTCWLKD IJ",
          "PurchaseCosts": 0.0,
          "ResaleFees": 0.0,
          "InvesmentManagerFees": 2.0,
          "CustodianServiceFees": 0.2,
          "SectorAllocation": "",
          "RiskProfile": "Risiko perubahan kondisi ekonomi dan politik, Risiko berkurangnya nilai investasi, Risiko likuiditas, Risiko kredit",
          "HistoricalPerformance": {
            "1M": "0.38",
            "3M": "1.10",
            "6M": "2.04",
            "YTD": "0.84",
            "1Y": "3.90",
            "3Y": "9.49",
            "5Y": "21.37"
          },
          "Prospektus": "https://link......",
          "Factsheet": "https://link......",
          "LineChartDatas": [
            {
              "Period": "1M",
              "Datasets": [
                {
                  "Data": [
                    "52275.13",
                    "52278.15",
                    "52308.85",
                    "52356.15",
                    "52402.64"
                  ]
                }
              ],
              "Labels": [
                "19 Feb 2024",
                "20 Feb 2024",
                "21 Feb 2024",
                "22 Feb 2024",
                "23 Feb 2024"
              ]
            },
            {
              "Period": "3M",
              "Datasets": [
                {
                  "Data": [
                    "51752.59",
                    "51786.18",
                    "51854.97",
                    "51881.96",
                    "51912.6"
                  ]
                }
              ],
              "Labels": [
                "19 Dec 2023",
                "20 Dec 2023",
                "21 Dec 2023",
                "22 Dec 2023",
                "27 Dec 2023"
              ]
            },
            {
              "Period": "6M",
              "Datasets": [
                {
                  "Data": [
                    "50997.51",
                    "50997.51",
                    "50880.47",
                    "50911.9",
                    "50979.55"
                  ]
                }
              ],
              "Labels": [
                "19 Sep 2023",
                "20 Sep 2023",
                "21 Sep 2023",
                "22 Sep 2023",
                "25 Sep 2023"
              ]
            },
            {
              "Period": "YTD",
              "Datasets": [
                {
                  "Data": [
                    "52027.31",
                    "52032.22",
                    "51957.74",
                    "51933.91",
                    "51911.93"
                  ]
                }
              ],
              "Labels": [
                "31 Dec 2023",
                "02 Jan 2024",
                "03 Jan 2024",
                "04 Jan 2024",
                "05 Jan 2024"
              ]
            },
            {
              "Period": "1Y",
              "Datasets": [
                {
                  "Data": [
                    "49077.6",
                    "49073.72",
                    "49254.7",
                    "49372.11",
                    "49383.11"
                  ]
                }
              ],
              "Labels": [
                "20 Mar 2023",
                "21 Mar 2023",
                "24 Mar 2023",
                "27 Mar 2023",
                "28 Mar 2023"
              ]
            }
          ]
        }
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` Summary Type Portofolio (ext Money Market, RDPT, dll)\*\*
    | Description   | API ini digunakan untuk mendapatkan data tipe produk reksa dana |
    | ------------- | --------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/products/type                      |
    | Auth Required | Ya                                                              |
    | Table Ref     | sec_tbl_parameter_portfolio_assettype                           |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```json
      {
        "Rc": 200,
        "Rcm": "success fetch fund type",
        "Dana": [
          {
            "PortfolioAssetTypeID": 1,
            "PortfolioAssetType": "EQ",
            "PortfolioAssetTypeDesc": "EQUITY FUND"
          },
          {
            "PortfolioAssetTypeID": 2,
            "PortfolioAssetType": "FI",
            "PortfolioAssetTypeDesc": "FIXED INCOME FUND"
          }
        ]
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` NAV/AUM By Priode\*\*
    | Description   | API ini digunakan untuk mendapatkan data NAV/AUM pedasarkan periode tertentu |
    | ------------- | ---------------------------------------------------------------------------- |
    | URL           |                                                                              |
    | Auth Required |                                                                              |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***

---

- PORTFOLIO
  ***
  - `**[GET]` User’s Portfolio\*\*
    | Description   | API ini digunakan untuk mendapatkan data portfolio yang investor miliki |
    | ------------- | ----------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/portfolios/{ClientID}?PlanID=11            |
    | Auth Required | Ya                                                                      |
    | Table Ref     | client_tbl_plan_portfolio                                               |
    | Paramater    | Type   | Required | Place | Description |
    | ------------ | ------ | -------- | ----- | ----------- |
    | url params   |        |          |       |             |
    | ClientID     | string | true     | url   |             |
    | query params |        |          |       |             |
    | PlanID       | int    | false    | url   |             |
    - **✅ Response 200**
      ```json
      {
        "RC": 201,
        "RCM": "success fetch data user's portfolio",
        "Plan": {
          "PlanID": 333,
          "ClientID": 222,
          "PlanType": 2,
          "PlanName": "Simpanan Masa Tua",
          "PlanTarget": 1231231.2312,
          "PlanTenor": 12.0,
          "TotalValueNilaiInvestasi": 1231231212.12,
          "TotalReturn": 1000000.0,
          "TotalPercentage": 0.2,
          "PlanDateStart": "2020-02-21 00:00:00",
          "PlanDateEnd": "2021-03-02 00:00:00",
          "PlanStatus": 1
        },
        "Data": [
          {
            "PlanPortfolioID": 2,
            "PlanID": 2,
            "Portfolio": {
              "PortfolioID": 3,
              "Name": "Bahana ICon Syariah kelas G",
              "Type": "Saham",
              "Nav": 1796.18,
              "LastNavPeriode": "07-03-2024",
              "RiskProfile": 3,
              "Prospektus": "https://link......",
              "Factsheet": "https://link......"
            }
          },
          {
            "PlanPortfolioID": 2,
            "PlanID": 2,
            "Portfolio": {
              "PortfolioID": 3,
              "Name": "Bahana ICon Syariah kelas J",
              "Type": "Saham",
              "Nav": 1796.18,
              "LastNavPeriode": "07-03-2024",
              "RiskProfile": 3,
              "Prospektus": "https://link......",
              "Factsheet": "https://link......"
            }
          }
        ]
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```

---

- USER / CLIENT
  ***
  - `**[POST]` Login\*\*
    | Description   | API ini digunakan untuk pengguna masuk ke dalam aplikasi BahanaLink |
    | ------------- | ------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/users/login                            |
    | Auth Required | -                                                                   |
    | Table Ref     | web_tbl_user                                                        |
    | Paramater   | Type   | Required | Place | Description |
    | ----------- | ------ | -------- | ----- | ----------- |
    | body params |        |          |       |             |
    | Phone       | string | true     | body  |             |
    | url params  |        |          |       |             |
    |             |        |          |       |             |
    - **✅ Body Request**
      ```json
      {
        "Phone": "6281111111",
        "Password": "verySecret"
      }
      ```
    - **✅ Response 200**
      ```json
      {
        "RC": 200,
        "RCM": "success",
        "Result": {
          "Phone": "6281111111",
          "AccessToken": "a99ebaf485e7e0d67a81ae8f8ee30d3b",
          "ExpiresIn ": 3600
        }
      }
      ```
  ***
  - `**[POST]` Login with Google and Apple\*\*
    | Description | API ini digunakan untuk handle proses login dengan Google atau Apple ID.
    Pada saat FE hit API ini BE akan melakukan pengecekan Type loginnya, lalu pengecekan Id yang dikirimkan (GoogleId/AppleId -> Pengecekan berdasarkan Type) dan Email (EmailGoogle/EmailApple -> Pengecekan berdasarkan Type) pada tabel web_tbl_user, jika Id & Emailnya match, langsung direct login (Response sama seperti login biasa). |
    | --- | --- |
    | URL | {IP:PORT}/bahana-link/api/v1/third-party/login |
    | Auth Required | - |
    | Table Ref | web_tbl_user |
    | Paramater   | Type   | Required | Place | Description                                                      |
    | ----------- | ------ | -------- | ----- | ---------------------------------------------------------------- |
    | body params |        |          |       |                                                                  |
    | Type        | int    | true     | body  | login melalui jalur mana, 1 ⇒ Google, 2 ⇒ Apple                  |
    | ID          | string | ture     | body  | id google/apple, pengecekan di BE berdasarkan type yg dikirim    |
    | Email       | string | true     | body  | email google/apple, pengecekan di BE berdasarkan type yg dikirim |
    |             |        |          |       |                                                                  |
    | url params  |        |          |       |                                                                  |
    |             |        |          |       |                                                                  |
    - **✅ Request Body**
      ```json
      {
        "Type": 1, // 1 => google, 2=> apple,
        "ID": "kasdhaowdajsda-2128danslsa",
        "Email": "jhon@gmail.com"
      }
      ```
    - **✅ Response 200**
      ```json
      {
        "RC": 200,
        "RCM": "success",
        "Result": {
          "Email": "jhon@gmail.com",
          "AccessToken": "a99ebaf485e7e0d67a81ae8f8ee30d3b",
          "ExpiresIn ": 3600
        }
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[POST]` Registration\*\*
    | Description   | API ini digunakan untuk mendaftarkan pengguna baru ke dalam system dan akses masuk ke aplikasi |
    | ------------- | ---------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/users/registration                                                |
    | Auth Required | -                                                                                              |
    | Table Ref     | web_tbl_user                                                                                   |
    | Paramater   | Type   | Required | Place | Description         |
    | ----------- | ------ | -------- | ----- | ------------------- |
    | body params |        |          |       |                     |
    | email       | string | true     | body  |                     |
    | phone       | string | true     | body  |                     |
    | password    | string | true     | body  | password BahanaLink |
    |             |        |          |       |                     |
    | url params  |        |          |       |                     |
    |             |        |          |       |                     |
    - **✅ Request Body**
      ```jsx
      {
        "Email": "",
        "Phone": "",
        "Password": "",
        "RegisterType": 1, // 1 => basic, 2 => Google, 3 => Apple
        "EmailGoogle": "",
        "GoogleID": "",
        "AppleEmail": "",
        "AppleID": "",
      }
      ```
    - **✅ Response 201**
      ```jsx
      {
        "rc": 201,
        "rcm": "success created"
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
    ***
  ***
  - `**[POST]` User KYC\*\*
    | Description   | API ini digunakan untuk mengidentifikasi dan memverifikasi identitas pengguna, proses KYC melibatkan pengumpulan informasi pribadi seperti nama lengkap, alamat, tanggal lahir, nomor identifikasi nasional, dan dokumen identifikasi lainnya. KYC merupakan prasyarat dalam melakukan transaksi atau investasi. |
    | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/users/kyc                                                                                                                                                                                                                                                                           |
    | Auth Required | Ya authString (MD5(email+sha256(password))                                                                                                                                                                                                                                                                       |
    | Table Ref     | client_tbl_kyc                                                                                                                                                                                                                                                                                                   |
    | Paramater                 | Type     | Required | Place | Description                                     |
    | ------------------------- | -------- | -------- | ----- | ----------------------------------------------- |
    | body params               |          |          |       |                                                 |
    | first_name                | string   | true     | body  | nama depan user                                 |
    | last_name                 | string   | false    | body  |                                                 |
    | first_title               | string   | false    | body  |                                                 |
    | last_title                | string   | false    | body  |                                                 |
    | education_level_id        | int      | true     | body  | level pendidikan formal                         |
    | sex                       | chart(1) | true     | body  | jenis kelamin                                   |
    | nationality_id            | int      | true     | body  |                                                 |
    | birth_place               | string   | true     | body  |                                                 |
    | birth_date                | datetime | true     | body  |                                                 |
    | identity_type_id          | int      | true     | body  | jenis kartu identitas (ktp, sim, passport, dll) |
    | identity_number           | string   | true     | body  |                                                 |
    | identity_expire           | datetime | false    | body  |                                                 |
    | npwp                      | string   | false    | body  |                                                 |
    | marital_status_id         | int      | true     | body  | status pernikahan                               |
    | spouse_name               | string   | false    | body  | nama pasangan                                   |
    | heirs_name                | string   | true     | body  | nama ahli waris                                 |
    | heir_relation             | string   | true     | body  | hubungan ahli waris                             |
    | religion_id               | int      | true     | body  |                                                 |
    | address                   | string   | true     | body  |                                                 |
    | city                      | string   | true     | body  |                                                 |
    | pos_code                  | int      | false    | body  |                                                 |
    | province                  | int      | true     | body  |                                                 |
    | country_id                | int      | true     | body  |                                                 |
    | phone                     | string   | false    | body  |                                                 |
    | fax                       | string   | false    | body  |                                                 |
    | correspondence_address    | string   | true     | body  |                                                 |
    | correspondence_city       | string   | true     | body  |                                                 |
    | correspondence_pos_code   | int      | false    | body  |                                                 |
    | correspondence_country_id | int      | true     | body  |                                                 |
    | correspondence_phone      | string   | false    | body  |                                                 |
    | correspondence_fax        | string   | false    | body  |                                                 |
    | occupation_id             | int      | true     | body  |                                                 |
    | company_name              | string   | false    | body  |                                                 |
    | company_address           | string   | false    | body  |                                                 |
    | position                  | string   | false    | body  |                                                 |
    | company_type_id           | int      | true     | body  |                                                 |
    | source_fund_id            | int      | true     | body  |                                                 |
    | annual_income_id          | int      | true     | body  |                                                 |
    | invesment_objective_id    | int      | true     | body  |                                                 |
    | doc_identity_selfie       | file     | true     | body  |                                                 |
    | doc_identity              | file     | true     | body  |                                                 |
    | doc_npwp                  | file     | true     | body  |                                                 |
    | bank_id                   | int      | true     | body  |                                                 |
    | no_rek                    | int      | true     | body  |                                                 |
    | bank_branch               | string   | true     | body  | nama cabang bank                                |
    | behalf_of                 | string   | true     | body  | atas nama pada rekening                         |
    | ccy_id                    | int      | true     | body  | mata uang                                       |
    | email                     | string   | true     | body  |                                                 |
    | mobile_phone              | string   | true     | body  |                                                 |
    | is_agree                  | bool     | true     | body  | menyetujui term & condition                     |
    |                           |          |          |       |                                                 |
    | url params                |          |          |       |                                                 |
    |                           |          |          |       |                                                 |
    - **✅ Body Request**
      ```jsx
      {
        "Biodata": {
          "FirstName": "john",
          "LastName": "acc",
          "FirstTitle": "",
          "LastTitle": "",
          "EducationLevelId": 1,
          "Sex": "",
          "NationalityId": 1,
          "BirthPlace": "",
          "BirthDate": "",
          "IdentityTypeId": 1,
          "IdentityNumber": "",
          "IdentityExpire": "",
          "Npwp": "",
          "MaritalStatusId": 1,
          "SpouseName": "",
          "HeirsName": "",
          "HeirRelation": "",
          "ReligionId": 1,
          "Address": "",
          "City": "",
          "PosCode": "",
          "Province": "",
          "CountryId": 1,
          "Phone": "",
          "Fax": "",
          "CorrespondenceAddress": "",
          "CorrespondenceCity": "",
          "CorrespondencePosCode": "",
          "CorrespondenceCountryId": 1,
          "CorrespondencePhone": "",
          "CorrespondenceFax": "",
          "OccupationId": 1,
          "CompanyName": "",
          "CompanyAddress": "",
          "Position": "",
          "CompanyTypeId": 1,
          "SourceFundId": 1,
          "AnnualIncomeId": 1,
          "InvestmentObjectiveId": 1
        },
        "Document": {
          "DocIdentitySelfie": "",
          "DocIdentity": "",
          "DocNpwp": ""
        },
        "Bank": [ // minimal 1, maksimal 3
          {
            "BankId": 1,
            "NoRek": "",
            "BankBranch": "",
            "BehalfOf": "",
            "CcyId": 1
          },
          {
            "BankId": 1,
            "NoRek": "",
            "BankBranch": "",
            "BehalfOf": "",
            "CcyId": 1
          }
        ],
        "Verification": {
          "Email": "",
          "MobilePhone": "",
          "IsAgree": true
        }
      }

      ```
    - **✅ Response 201**
      ```jsx
      {
      	"RC": 201,
        "RCM": "data submitted successfully",
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      	"rc": 404,
        "rcm": "data failed to submit",
      }
      ```
  ***
  - `**[PUT]` Change Email\*\*
    | Description   | Api ini digunakan untuk mengubah email pada profile pengguna, Setelah proses perubahan email berhasil, pengguna akan ter-log out secara otomatis dan wajib melakukan verifikasi ulang atas email baru menggunakan code verifikasi yang diberikan pihak BahanaLink via email terbaru. |
    | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/users/email                                                                                                                                                                                                                                             |
    | Auth Required | Ya authString (MD5(email+sha256(password))                                                                                                                                                                                                                                           |
    | Table Ref     | client_tbl_kyc                                                                                                                                                                                                                                                                       |
    | Paramater   | Type   | Required | Place | Description          |
    | ----------- | ------ | -------- | ----- | -------------------- |
    | body params |        |          |       |                      |
    | new_email   | string | true     | body  |                      |
    | passwrod    | string | true     | body  | password bahana link |
    |             |        |          |       |                      |
    | url params  |        |          |       |                      |
    |             |        |          |       |                      |
    - **✅ Request Body**
      ```json
      {
        "new_email": "newemail@mail.com",
        "password": "passwordBahanaLink"
      }
      ```
    - **✅ Response 200**
      ```json
      {
        "rc": 200,
        "rcm": "success updated email"
      }
      ```
    - **✅ Response 400**
      ```jsx
      {
      }
      ```
  ***
  - `**[PUT]` Change Phone\*\*
    | Description   | Api ini digunakan untuk mengubah nomer telepon pada profile pengguna, Setelah proses perubahan phone berhasil, pengguna wajib melakukan verifikasi ulang atas phone baru menggunakan code verifikasi yang diberikan pihak BahanaLink via phone terbaru. |
    | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/users/phone                                                                                                                                                                                                                |
    | Auth Required | Ya authString (MD5(email+sha256(password))                                                                                                                                                                                                              |
    | Table Ref     | client_tbl_kyc                                                                                                                                                                                                                                          |
    | Paramater   | Type   | Required | Place | Description          |
    | ----------- | ------ | -------- | ----- | -------------------- |
    | body params |        |          |       |                      |
    | new_phone   | string | true     | body  |                      |
    | passwrod    | string | true     | body  | password bahana link |
    |             |        |          |       |                      |
    | url params  |        |          |       |                      |
    |             |        |          |       |                      |
    - **✅ Request Body**
      ```json
      {
        "new_phone": "newemail@mail.com",
        "password": "passwordBahanaLink"
      }
      ```
    - **✅ Response 200**
      ```json
      {
        "rc": 200,
        "rcm": "success updated phone"
      }
      ```
    - **✅ Response 400**
      ```jsx
      {
      }
      ```
  ***
  - `**[PUT]` Change Password\*\*
    | Description   | Api ini digunakan untuk mengubah password pada profile pengguna, Setelah proses perubahan password berhasil, pengguna akan ter-log out secara otomatis lalu login dengan password terbaru. |
    | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/users/password                                                                                                                                                |
    | Auth Required | Ya authString (MD5(email+sha256(password))                                                                                                                                                 |
    | Table Ref     | web_tbl_user                                                                                                                                                                               |
    | Paramater    | Type   | Required | Place | Description          |
    | ------------ | ------ | -------- | ----- | -------------------- |
    | body params  |        |          |       |                      |
    | new_password | string | true     | body  |                      |
    | passwrod     | string | true     | body  | password bahana link |
    |              |        |          |       |                      |
    | url params   |        |          |       |                      |
    |              |        |          |       |                      |
    - **✅ Request Body**
      ```json
      {
        "new_password": "newemail@mail.com",
        "password": "passwordBahanaLink"
      }
      ```
    - **✅ Response 200**
      ```json
      {
        "rc": 200,
        "rcm": "success updated phone"
      }
      ```
    - **✅ Response 400**
      ```jsx
      {
      }
      ```
  ***
  - `**[POST]` Forgot Password\*\*
    | Description   | API ini digunakan untuk pengguna yang sudah memiliki akun namun lupa password, pengguna akan dikimkan tautang reset password vie email |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/forgot-password                                                                                           |
    | Auth Required | -                                                                                                                                      |
    | Table Ref     | Web_tbl_user                                                                                                                           |
    | Paramater   | Type   | Required | Place | Description |
    | ----------- | ------ | -------- | ----- | ----------- |
    | body params |        |          |       |             |
    | Email       | string | true     | body  |             |
    | url params  |        |          |       |             |
    |             |        |          |       |             |
    - **✅ Body Request**
      ```json
      {
        "Email ": "jhon@gmail.com"
      }
      ```
    - **✅ Response 200**
      ```json
      {
        "RC": 201,
        "RCM": "success",
        "Result": {
          "SendingStatus": 1
        }
      }
      ```
  ***
  - `**[GET]` Get Profile\*\*
    | Description   | API ini digunakan untuk mendapatkan data profile user/imvestor |
    | ------------- | -------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/users/profile/{UserID}            |
    | Auth Required | Ya                                                             |
    | Table Ref     | web_tbl_user, client_tbl_kyc                                   |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    | UserID      | int  | true     | body  |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```json
      {
        "RC": 200,
        "RCM": "success fetch user profile",
        "Data": {
          "FirstName": "Jhon",
          "Lastname": "Kenedy",
          "NationalityID": 1,
          "Sex": "L",
          "BirthPlace": "Bandung",
          "BirthDate": "2000-01-01",
          "DocumentTypeID": 1,
          "IdentityNo": "21412412412",
          "IdentityExpDate": "2024-03-18",
          "NPWP": "12391249342",
          "MaritalStatusID": 1,
          "SpouseName": "Nucky",
          "HeirName": "Dede",
          "HeirRelation": "keluarga",
          "EducationLevelID": "3",
          "ReligionID": 1,
          "Address": "Jln. Sukasenang No 22",
          "City": "Bandung",
          "GoogleConnection": true,
          "AppleConnection": true
        }
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` Log Activity Client\*\*
    | Description   | API ini digunakan untuk mendapatkan data aktifitas apa saja yang telah pengguna lakukan |
    | ------------- | --------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/log/activity/{ClientID}                                    |
    | Auth Required |                                                                                         |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```

---

- OTP
  ***
  - `**[POST]` Generate OTP\*\*
    | Description   | API ini digunakan untuk menghasilkan kode OTP (One-Time Password) untuk proses otentikasi dua faktor atau verifikasi |
    | ------------- | -------------------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/generate-otp                                                                            |
    | Auth Required | -                                                                                                                    |
    | Table Ref     | app_otp                                                                                                              |
    | Paramater   | Type   | Required | Place | Description                   |
    | ----------- | ------ | -------- | ----- | ----------------------------- |
    | body params |        |          |       |                               |
    | email       | string | true     | body  |                               |
    | phone       | string | true     | body  |                               |
    | otp_type    | int    | true     | body  | Tipe otp yang akan diberikan: |
    1: registration 2. transaction |
    | send_to | int | true | body | Opsi akan tujuan OTP dikirim:
    1: Email
    2: Phone(WA)
    |
    | url params | | | | |
    | | | | | |
    - **✅ Request Body**
      ```jsx
      {
        "email": "john@gmail.com",
        "phone": "0812376124712",
        "otp_type": 1,
        "send_to": 1
      }
      ```
    - **✅ Response 201**
      ```jsx
      {
        "RC": 201,
        "RCM": "success created",
        "Result": {
          "OtpCode": "123456",
          "OtpType": "registration",
          "RefNum": "mkasdoasd239eda",
          "ExpiresIn ": 300
        }
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[POST]` Validate OTP\*\*
    | Description   | Api ini dapat digunakan oleh SA untuk melakukan validasi OTP |
    | ------------- | ------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/validate-otp                    |
    | Auth Required | -                                                            |
    | Table Ref     | app_otp                                                      |
    | Paramater   | Type   | Required | Place | Description |
    | ----------- | ------ | -------- | ----- | ----------- |
    | body params |        |          |       |             |
    | ref_num     | string | true     | body  |             |
    | otp         | string | true     | body  |             |
    |             |        |          |       |             |
    | url params  |        |          |       |             |
    |             |        |          |       |             |
    - **✅ Request Body**
      ```json
      {
        "ref_num": "mkasdoasd239eda",
        "otp": "124712"
      }
      ```
    - **✅ Response 201**
      ```json
      {
        "rc": 201,
        "rcm": "success",
        "result": {
          "validate_status": 1
        }
      }
      ```
    - **✅ Response 400**
      ```jsx
      {
      }
      ```

---

- INVESTATION PLAN
  ***
  - `**[GET]` List Plan Investasi Client\*\*
    | Description   | API ini digunakan pengguna untuk mendapatkan daftar rencana investasi yang mereka miliki |
    | ------------- | ---------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/plans/{client_id}                                           |
    | Auth Required | Ya authString (MD5(email+sha256(password))                                               |
    | Table Ref     | client_tbl_plan                                                                          |
    | Paramater   | Type   | Required | Place | Description                                                      |
    | ----------- | ------ | -------- | ----- | ---------------------------------------------------------------- |
    | body params |        |          |       |                                                                  |
    |             |        |          |       |                                                                  |
    | url params  |        |          |       |                                                                  |
    | ClientID    | string | true     | url   | identify unique dari tabel client_tbl_kyc, merujuk pada pengguna |
    - **✅ Response 200**
      ```jsx
      {
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[POST]` Create Plan\*\*
    | Description   | API ini digunakan untuk membuat rencana investasi baru bagi penggunan/investor |
    | ------------- | ------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/planning                                          |
    | Auth Required | Ya                                                                             |
    | Table Ref     | client_tbl_plan, client_tbl_plan_portfolio                                     |
    | Paramater       | Type            | Required | Place | Description                                                                               |
    | --------------- | --------------- | -------- | ----- | ----------------------------------------------------------------------------------------- |
    | body params     |                 |          |       |                                                                                           |
    | ClientID        | string          | true     | body  | unique identity dari pengguna                                                             |
    | PlanName        | string          | true     | body  | Nama plan yang pengguna buat                                                              |
    | PlanTypeID      | int             | true     | body  | ID dari tipe yang dipilih                                                                 |
    | PlanTarget      | decimal         | true     | body  | Nominal target yang client inginkan                                                       |
    | PlanTenor       | decimal         | true     | body  | Jangka waktu yang diperkirakan guna mencapai target                                       |
    | PlanPortfolio   | array of object | true     | body  | array yang menampung object plan portfolio                                                |
    | PortfolioID     | int             | true     | body  | unique indentity dari record data portfolio, guna reference ke tabel portfolio            |
    | AutoDebetAmount | decimal         | true     | body  | Besar nominal uang guna auto debet tiap bulannya                                          |
    | OneOffAmount    | decimal         | true     | body  | Besar nominal uang guna sekali membeli reksadana                                          |
    | TNC             | tinyint         | true     | body  | Term & condition yang harus pengguna setujui untuk tahap selanjutnya. 1 ⇒ true, 0 ⇒ false |
    | url params      |                 |          |       |                                                                                           |
    |                 |                 |          |       |                                                                                           |
    - **✅ Request Body**
      ```json
      {
        "ClientID": "xxxxxxxx",
        "PlanName": "Sample Name",
        "PlanTypeID": 1,
        "PlanTarget": 10000000,
        "PlanTenor": 12.0,
        "PlanPortfolio": [
          {
            "PortfolioID": 1,
            "AutoDebetAmount": 1000.0,
            "OneOffAmount": 1000.0
          },
          {
            "PortfolioID": 2,
            "AutoDebetAmount": 1000.0,
            "OneOffAmount": 1000.0
          }
        ],
        "TNC": 1
      }
      ```
    - **✅ Response 201**
      ```json
      {
        "RC": 201,
        "RCM": "success create plan portfolio"
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` Detail Plan By ID\*\*
    | Description   | API iini digunakan untuk mendapatkan detail dari sebuah rencana investasi, berisikan informasi plan serta portfolio yang ada didalamnya |
    | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/plans/{ClientID}/PlanID                                                                                    |
    | Auth Required | Ya                                                                                                                                      |
    | Table Ref     |                                                                                                                                         |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```

---

- PARAMETER KYC
  ***
  - `**[GET]` List Parameter Education Level\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data master parameter tingkat pendidikan |
    | ------------- | ------------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/education-levels                                        |
    | Auth Required | Ya                                                                                   |
    | Tabel Ref     | master_tbl_parameter_educationlevel                                                  |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data educational level",
        "Data": [
          {
            "EducationLevelID": 1,
            "EducationLevelCode": "SD",
            "EducationLevelDescription": "Sekolah Dasar, Ibtidaiyah"
          },
          {
            "EducationLevelID": 2,
            "EducationLevelCode": "SMP",
            "EducationLevelDescription": "Sekolah Menengah Pertama, Tsanawiyah"
          },
          {
            "EducationLevelID": 3,
            "EducationLevelCode": "SMA",
            "EducationLevelDescription": "SMA Umum, SMK, STM, Aliyah, SMIP"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Nationality\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data master parameter kewarganegaraan |
    | ------------- | --------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/nationalities                                        |
    | Auth Required | Ya                                                                                |
    | Table Ref     | master_tbl_parameter_country                                                      |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data nationalities",
        "Data": [
          {
            "CountryID": 1,
            "CountryCode": "ID",
            "CountryName": "Indonesia",
            "PhoneCode": "62",
            "Ccy": "Rp",
            "CcyDescription": "Rupiah",
            "Nationality": "Indonesia"
          },
          {
            "CountryID": 2,
            "CountryCode": "US",
            "CountryName": "United States",
            "PhoneCode": "1",
            "Ccy": "US$",
            "CcyDescription": "Dollar",
            "Nationality": "American"
          },
          {
            "CountryID": 3,
            "CountryCode": "SG",
            "CountryName": "Singapura",
            "PhoneCode": "65",
            "Ccy": "SGD$",
            "CcyDescription": "Dollar Singapura",
            "Nationality": "Singapura"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Document Identity Type\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data jenis dokumen identitas |
    | ------------- | ------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/document-types                              |
    | Auth Required | Ya                                                                       |
    | Table Ref     | master_tbl_parameter_documenttype                                        |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data document identity type",
        "Data": [
          {
            "DocumentTypeID": 1,
            "DocumentType": "KTP"
          },
          {
            "DocumentTypeID": 2,
            "DocumentType": "SIM"
          },
          {
            "DocumentTypeID": 3,
            "DocumentType": "Paspor"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Marital Status\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data status pernikahan |
    | ------------- | ------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/marital-status                        |
    | Auth Required | Ya                                                                 |
    | Table Ref     | master_tbl_parameter_maritalstatus                                 |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data marital status",
        "Data": [
          {
            "MaritalStatusID": 1,
            "MaritalStatus": "Single"
          },
          {
            "MaritalStatusID": 2,
            "MaritalStatus": "Married"
          },
          {
            "MaritalStatusID": 3,
            "MaritalStatus": "Divorced/Widowed"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Religion\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data agama |
    | ------------- | ------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/religions                 |
    | Auth Required | Ya                                                     |
    | Table Ref     | master_tbl_parameter_religion                          |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data religions",
        "Data": [
          {
            "ReligionID": 1,
            "Religion": "Islam"
          },
          {
            "ReligionID": 2,
            "Religion": "Katolik"
          },
          {
            "ReligionID": 3,
            "Religion": "Hindu"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Occupation\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data jenis pekerjaan |
    | ------------- | ---------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/occupations                         |
    | Auth Required | Ya                                                               |
    | Table Ref     | master_tbl_parameter_occupation                                  |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data occupation",
        "Data": [
          {
            "OccupationID": 1,
            "Occupation": "PNS/BUMN"
          },
          {
            "OccupationID": 2,
            "Occupation": "Karyawan Swasta"
          },
          {
            "OccupationID": 3,
            "Occupation": "Profesional"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Company Type\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data bentuk usaha perusahaan tempat pengguna bekerja |
    | ------------- | ------------------------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/company-types                                                       |
    | Auth Required | Ya                                                                                               |
    | Table Ref     | master_tbl_parameter_businessactivity                                                            |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data company type",
        "Data": [
          {
            "BusinessActivityID": 1,
            "BusinessActivity": "Perusahaan"
          },
          {
            "BusinessActivityID": 2,
            "BusinessActivity": "Yayasan"
          },
          {
            "BusinessActivityID": 3,
            "BusinessActivity": "Asuransi"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Source Fund\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data jenis sumber pendapatan pengguna |
    | ------------- | --------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/source-fund                                          |
    | Auth Required | Ya                                                                                |
    | Table Ref     | master_tbl_parameter_sourcefundpersonal                                           |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data source fund",
        "Data": [
          {
            "SourceFundID": 1,
            "SourceFund": "Penghasilan"
          },
          {
            "SourceFundID": 2,
            "SourceFund": "Keuntungan Bisnis"
          },
          {
            "SourceFundID": 3,
            "SourceFund": "Warisan"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Annual Income\*\*
    | Description   | API ini Digunakan untuk mendapatkan seluruh data range pendapatan yang diperoleh per bulan |
    | ------------- | ------------------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/annual-incomes                                                |
    | Auth Required | Ya                                                                                         |
    | Table Ref     | master_tbl_parameter_annualincomepersonal                                                  |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data annual income personal",
        "Data": [
          {
            "AnnualIncomeID": 1,
            "AnnualIncome": "<10 Juta"
          },
          {
            "AnnualIncomeID": 2,
            "AnnualIncome": "10 - 50 juta"
          },
          {
            "AnnualIncomeID": 3,
            "AnnualIncome": "50 - 100 juta"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Investment Objective\*\*
    | Description   | API ini digunakan untuk mendapatkan seluruh data tujuan investasi |
    | ------------- | ----------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/investment-objective                 |
    | Auth Required | Ya                                                                |
    | Table Ref     | master_tbl_parameter_investmentobjective                          |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data investment objective",
        "Data": [
          {
            "InvestmentObjectiveID": 1,
            "InvestmentObjective": "Kenaikan Harga"
          },
          {
            "InvestmentObjectiveID": 2,
            "InvestmentObjective": "Investasi"
          },
          {
            "InvestmentObjectiveID": 3,
            "InvestmentObjective": "Lainnya"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Province\*\*
    | Description   | API ini digunakan untuk mendapatkan seluruh data Provinsi |
    | ------------- | --------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/provinces                    |
    | Auth Required | Ya                                                        |
    | Table Ref     | master_tbl_parameter_province                             |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data provinces",
        "Data": [
          {
            "ID": 1,
            "ProvinceID": 1,
            "ProvinceName": "Bali"
          },
          {
            "ID": 35,
            "ProvinceID": 999,
            "ProvinceName": "OTHERS"
          },
          {
            "ID": 36,
            "ProvinceID": 1000,
            "ProvinceName": "FOREIGN"
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` List Parameter Bank\*\*
    | Description   | API ini digunakan untuk mendapatkan seluruh data Bank |
    | ------------- | ----------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/banks                    |
    | Auth Required | Ya                                                    |
    | Table Ref     | mfrs_tbl_parameter_bank                               |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success fetch list data banks",
        "Data": [
          {
            "BankID": 1,
            "BankCode": "NIAGA",
            "BankName": "PT. BANK CIMB NIAGA, TBK"
          },
          {
            "BankID": 2,
            "BankCode": "BCA",
            "BankName": "BANK CENTRAL ASIA"
          },
          {
            "BankID": 3,
            "BankCode": "BRI",
            "BankName": "PT.BRI (PERSERO) TBK."
          }
        ]
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***

---

- TRANSACTION
  ***
  - `**[POST]` One Time - Subscribe\*\*
    | Description   | API ini dugunakan untuk melakukan pembelian produk reksa dana baik secara one time(sekali beli) atau berlangganan tiap bulan di BahanaLink mobile |
    | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/order                                                                                                                |
    | Auth Required | Ya                                                                                                                                                |
    | Table Ref     | web_tbl_transaction                                                                                                                               |
    | Paramater          | Type    | Required | Place | Description                                                         |
    | ------------------ | ------- | -------- | ----- | ------------------------------------------------------------------- |
    | body params        |         |          |       |                                                                     |
    | ClientID           | int     | true     | body  |                                                                     |
    | PlanPortfolioID    | int     | true     | body  |                                                                     |
    | PortfolioID        | int     | true     | body  |                                                                     |
    | TrxTypeID          | int     | true     | body  |                                                                     |
    | TrxAmount          | decimal | true     | body  |                                                                     |
    | ClientBankID       | int     | true     | body  |                                                                     |
    | PortfolioAccountID | int     | true     | body  |                                                                     |
    | AutoDebetDate      | int     | false    | body  | jika tipe pembelian adalah berlangganan makan wajib mengisikan data |
    | TNC                | bool    | true     | body  |                                                                     |
    |                    |         |          |       |                                                                     |
    | url params         |         |          |       |                                                                     |
    |                    |         |          |       |                                                                     |
    - **✅ Body Request**
      ```jsx
      {
        "ClientID": "xxxxx",
        "PlanPortfolioID": 123,
        "PortfolioID": 321,
        "TrxTypeID": 1,
        "TrxAmount": 100000,
        "ClientBankID": 12,
        "PortfolioAccountID": 22,
        "AutoDebetDate": 6, // only 6 || 26
        "TNC": true // term & condition
      }

      ```
    - **✅ Response 201**
      ```json
      {
        "RC": 200,
        "RCM": "success create transactions",
        "Data": {
          "ClientID": "xxxxx",
          "PlanPortfolioID": 123,
          "PortfolioID": 321,
          "TrxTypeID": 1,
          "TrxAmount": 100000,
          "ClientBankID": 12,
          "PortfolioAccountID": 22,
          "AutoDebetDate": 6
        }
      }
      ```
  ***
  - `**[POST]` Redeem\*\*
    | Description   | API ini dugunakan untuk melakukan pencairan reksa dana |
    | ------------- | ------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/redeem                    |
    | Auth Required | Ya                                                     |
    | Table Ref     | web_tbl_transaction                                    |
    | Paramater       | Type | Required | Place | Description |
    | --------------- | ---- | -------- | ----- | ----------- |
    | body params     |      |          |       |             |
    | ClientID        | int  | true     | body  |             |
    | TrxTypeID       | int  | true     | body  |             |
    | PlanPortfolioID | int  | true     | body  |             |
    | PortfolioID     | int  | true     | body  |             |
    | TrxUnit         | int  | true     | body  |             |
    | ClientBankID    | int  | false    | body  |             |
    | TNC             | bool | true     | body  |             |
    |                 |      |          |       |             |
    | url params      |      |          |       |             |
    |                 |      |          |       |             |
    - **✅ Body Request**
      ```jsx
      {
        "ClientID": "xxxxx",
        "TrxTypeID": 2,
        "PlanPortfolioID": 123,
        "PortfolioID": 321,
        "TrxUnit": 100,
        "ClientBankID": 12,
        "TNC": true // term & condition
      }

      ```
    - **✅ Response 201**
      ```json
      {
        "RC": 200,
        "RCM": "success create redeemtion",
        "Data": {
          "ClientID": "xxxxx",
          "TrxTypeID": 2,
          "PlanPortfolioID": 123,
          "PortfolioID": 321,
          "TrxUnit": 100,
          "ClientBankID": 12
        }
      }
      ```
  ***
  - `**[POST]` Save Transaction\*\*
    | Description   | API ini digunakan untuk menyimpan pembelian oleh pengguna |
    | ------------- | --------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/transactions                 |
    | Auth Required | Ya                                                        |
    | Table Ref     | web_tbl_transaction                                       |
    | Paramater            | Type            | Required | Place | Description |
    | -------------------- | --------------- | -------- | ----- | ----------- |
    | body params          |                 |          |       |             |
    | ClientID             | string          | true     | body  |             |
    | PlanPortfolioID      | int             | true     | body  |             |
    | ProductFundingDetail | array of object | true     | body  |             |
    | AutoDebetTypeID      | int             | true     | body  |             |
    | PortfolioID          | int             | true     | body  |             |
    | AmountOfFunds        | decimal         | true     | body  |             |
    | ClientBankID         | int             | true     | body  |             |
    | PortfolioAccountID   | int             | true     | body  |             |
    | AutoDebetDate        | int             | true     | body  |             |
    | url params           |                 |          |       |             |
    |                      |                 |          |       |             |
    - **✅ Body Request**
      ```json
      {
        "ClientID": "xxxxx",
        "PlanPortfolioID": 123,
        "ProductFundingDetail": [
          {
            "AutoDebetTypeID": 1, // 0 => Non Auto Debet, 1 => Auto Debet Regular, 2 => Auto Debet Perusahaan
            "PortfolioID": 1,
            "TrxTypeID": 7,
            "AmountOfFunds": 12000000,
            "ClientBankID": 11,
            "PortfolioAccountID": 12,
            "AutoDebetDate": 6
          },
          {
            "AutoDebetTypeID": 0,
            "PortfolioID": 1,
            "TrxTypeID": 6,
            "AmountOfFunds": 12000000,
            "ClientBankID": 11,
            "PortfolioAccountID": 12,
            "AutoDebetDate": 0
          }
        ]
      }
      ```
    - **✅ Response 201**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` Client’s Transactions List\*\*
    | Description   | API ini digunakan untuk mendapatkan list data transaksi milik investor                                                                                         |
    | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/transactions/{ClientID}?perPage=10&page=2&trxStatusID=1&trxTypeID=2&planPortfolioID=3&portfolioID=4&from=2024-01-24&to=2024-02-22 |
    | Auth Required | Ya                                                                                                                                                             |
    | Table Ref     | web_tbl_transaction                                                                                                                                            |
    | Paramater       | Type   | Required | Place | Description |
    | --------------- | ------ | -------- | ----- | ----------- |
    | url params      |        |          |       |             |
    | ClientID        | string | true     | url   |             |
    | query params    |        |          |       |             |
    | perPage         | int    | false    | url   |             |
    | page            | int    | false    | url   |             |
    | trxStatusID     | int    | false    | url   |             |
    | trxTypeID       | int    | false    | url   |             |
    | planPortfolioID | int    | false    | url   |             |
    | portfolioID     | int    | false    | url   |             |
    | from            | date   | false    | url   |             |
    | to              | date   | false    | url   |             |
    - **✅ Response 200**
      ```json
      {
        "RC": 200,
        "RCM": "success get data transactions",
        "Meta": {
          "ClientID": "9a593a43-ab6e-4a27-9522-ed35bd4ed8d6",
          "TotalData": 10,
          "CurrentPage": 1,
          "PerPage": 3,
          "TrxStatusID": 0,
          "TrxTypeID": 1,
          "PlanPortfolioID": 2,
          "PortfolioID": 5,
          "From": "2024-01-24",
          "To": "2024-02-24"
        },
        "Data": [
          {
            "TrxID": 1,
            "ClientID": "9a593a43-ab6e-4a27-9522-ed35bd4ed8d6",
            "TrxDate": "2020-03-02 12:21:40",
            "TrxReff": "20200200875",
            "TrxTypeID": 6,
            "PlanPortfolioID": 33,
            "PortfolioID": 21,
            "TrxAmount": 200000,
            "TrxStatusID": 1,
            "BuktiTransfer": "xxxxxxxx.png",
            "AutoDebetExpiryDate": "2020-03-02 12:21:40",
            "BankConfirmationDocument": "xxxxxxx.pdf"
          },
          {
            "TrxID": 1,
            "ClientID": "9a593a43-ab6e-4a27-9522-ed35bd4ed8d6",
            "TrxDate": "2020-03-02 12:21:40",
            "TrxReff": "20200200875",
            "TrxTypeID": 6,
            "PlanPortfolioID": 33,
            "PortfolioID": 21,
            "TrxAmount": 200000,
            "TrxStatusID": 1,
            "BuktiTransfer": "xxxxxxxx.png",
            "AutoDebetExpiryDate": "2020-03-02 12:21:40",
            "BankConfirmationDocument": "xxxxxxx.pdf"
          }
        ]
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***
  - `**[PUT]` Upload Transaction Document\*\*
    | Description   | API ini digunakan untuk investor mengunggah bukti transfer terhadap pembelian reksa dana yang dilakukan |
    | ------------- | ------------------------------------------------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/transfer-proof/{TrxID}                                                     |
    | Auth Required | Ya                                                                                                      |
    | Headers       | Content-Type: multipart/form-data                                                                       |
    | Table Ref     | web_tbl_transaction                                                                                     |
    | Paramater   | Type | Required | Place     | Description |
    | ----------- | ---- | -------- | --------- | ----------- |
    | form params |      |          |           |             |
    | file        | file | true     | form-data |             |
    | url params  |      |          |           |             |
    | TrxID       | int  | true     | url       |             |
    - **✅ Response 200**
      ```json
      {
        "RC": "200",
        "RCM": "success upload transfer proof",
        "Data": {
          "FileName": "transfer_proof.jpg",
          "FileUrl": "https://example.com/uploads/transfer_proof.jpg",
          "TrxID": 123
        }
      }
      ```
    - **✅ Response 400**
      ```json
      {
        "RC": "400",
        "RCM": "fail to upload transfer proof",
        "Errors": ["invalid file", "invalid trxID"]
      }
      ```
    ***
  ***
  - `**[GET]`\*\*
    | Description   | API ini digunakan untuk mendapatkan data riwayat transaksi yang dilakukan oleh pengguna/investor |
    | ------------- | ------------------------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/transfer-proof/{clientID}                                           |
    | Auth Required | Ya                                                                                               |
    | Table Ref     | web_tbl_transaction                                                                              |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    | clientID    | int  | true     | url   |             |
    - **✅ Response 200**
      ```jsx
      {
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```
  ***

---

- SUMMARY
  ***
  - `**[GET]` Portfolio Summary\*\*
    | Description   | API ini digunakan untuk mendapatkan ringkasan portfolio milik investor sendiri |
    | ------------- | ------------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/portfolio-summary                                 |
    | Auth Required | Ya                                                                             |
    | Table Ref     | client_tbl_plan                                                                |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```jsx
      {
        "RC": 200,
        "RCM": "success",
        "Result": {
          "TotalPortfolio": 123,
          "TotalInvesment": 123,
          "TotalProfit": 123,
          "PortfolioPlans": [
            {
              "PlanID": 1,
              "PlanName": "Simpanan Masa Tua",
              "InvestmentRealisation": 0.01,
              "PurchaseFunds": 123,
              "TargetInvesment": 123,
              "PortfolioPlans": 123
            },
            {
              "PlanID": 2,
              "PlanName": "Simpanan Anak",
              "InvestmentRealisation": 0.01,
              "PurchaseFunds": 123,
              "TargetInvesment": 123,
              "PortfolioPlans": 123
            }
          ]
        }
      }

      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```

---

- NOTIFICATION
  - `**[POST]` Push Notification\*\*
    | Description   | API ini digunakan untuk membuat nitifikasi kepada pelanggan |
    | ------------- | ----------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/notifications/{userId}         |
    | Auth Required | Ya                                                          |
    | Table Ref     | web_tbl_user                                                |
    | Paramater   | Type   | Required | Place | Description        |
    | ----------- | ------ | -------- | ----- | ------------------ |
    | body params |        |          |       |                    |
    | PushID      | string | Ya       | body  | token notification |
    | url params  |        |          |       |                    |
    |             |        |          |       |                    |
    - **✅ Body Request**
      ```json
      {
        "PushID": "uniqueToken"
      }
      ```
    - **✅ Response 201**
      ```jsx
      {
        "RC": 201,
        "RCM": "success push notification"
      }

      ```
  ***
  - `**[GET]` Fetch Notification\*\*
    | Description   | API ini digunakan untuk mendapatkan notifikasi user |
    | ------------- | --------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/notifications/{userId} |
    | Auth Required | Ya                                                  |
    | Table Ref     | app_notification                                    |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    |             |      |          |       |             |
    - **✅ Response 200**
      ```json
      {
        "RC": 200,
        "RCM": "success",
        "Notifications": [
          {
            "NotificationsID": 1,
            "UserID": 1,
            "Message": "Notification message 1",
            "Timestamp": "2024-04-03T12:00:00Z"
          },
          {
            "NotificationsID": 2,
            "UserID": 1,
            "Message": "Notification message 1",
            "Timestamp": "2024-04-03T12:00:00Z"
          }
        ]
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```

---

- ARTICLE
  - `**[POST]` List Article\*\*
    | Description   | API ini digunakan untuk mendaptkan daftar article                 |
    | ------------- | ----------------------------------------------------------------- |
    | URL           | {IP:PORT}/bahana-link/api/v1/articles?perPage=5&page=1&category=1 |
    | Auth Required | Ya                                                                |
    | Table Ref     | db_aperd_compro_bl → informasi                                    |
    | Paramater    | Type | Required | Place | Description        |
    | ------------ | ---- | -------- | ----- | ------------------ |
    | body params  |      |          |       |                    |
    |              |      |          |       | token notification |
    | url params   |      |          |       |                    |
    |              |      |          |       |                    |
    | query params |      |          |       |                    |
    | perPage      | int  | false    | url   |                    |
    | page         | int  | false    | url   |                    |
    | category     | int  | false    | url   |                    |
    - **✅ Response 200**
      ```json
      {
        "RC": 200,
        "RCM": "success get data articles",
        "Meta": {
          "TotalData": 10,
          "CurrentPage": 1,
          "PerPage": 3,
          "CategoryID": 1
        },
        "Data": [
          {
            "ID": 1,
            "JudulKonten": "Judul Artikel",
            "JudulKontenENG": "Content's Title",
            "InformasiKategoriID": 1,
            "DataKontentINA": "lorem ipsum alert",
            "DataKontentENG": "lorem ipsum alert",
            "Photo": "asdkahsdkasd.jpg",
            "CreatedAt": "2024-02-02 14:37:12.000000",
            "CreatedBy": "Admin Bahana"
          },
          {
            "ID": 2,
            "JudulKonten": "Judul Artikel",
            "JudulKontenENG": "Content's Title",
            "InformasiKategoriID": 1,
            "DataKontentINA": "lorem ipsum alert",
            "DataKontentENG": "lorem ipsum alert",
            "Photo": "asdkahsdkasd.jpg",
            "CreatedAt": "2024-02-02 14:37:12.000000",
            "CreatedBy": "Admin Bahana"
          }
        ]
      }
      ```
    - **✅ Response 400**
      ```jsx
      {
      }
      ```
  ***
  - `**[GET]` Detail Article\*\*
    | Description   | API ini digunakan untuk mendapatkan data keseluruhan dari sebuah article |
    | ------------- | ------------------------------------------------------------------------ |
    | URL           | {IP:PORT}/bahana-link/api/v1/articles/{articleId}                        |
    | Auth Required | Ya                                                                       |
    | Table Ref     | db_aperd_compro_bl → informasi                                           |
    | Paramater   | Type | Required | Place | Description |
    | ----------- | ---- | -------- | ----- | ----------- |
    | body params |      |          |       |             |
    |             |      |          |       |             |
    | url params  |      |          |       |             |
    | articleId   | int  | true     | url   |             |
    - **✅ Response 200**
      ```json
      {
        "RC": 200,
        "RCM": "success get data article with id {articleID}",
        "Data": {
          "ID": 1,
          "JudulKonten": "Judul Artikel",
          "JudulKontenENG": "Content's Title",
          "InformasiKategoriID": 1,
          "DataKontentINA": "lorem ipsum alert",
          "DataKontentENG": "lorem ipsum alert",
          "Photo": "asdkahsdkasd.jpg",
          "CreatedAt": "2024-02-02 14:37:12.000000",
          "CreatedBy": "Admin Bahana"
        }
      }
      ```
    - **✅ Response 404**
      ```jsx
      {
      }
      ```

---
