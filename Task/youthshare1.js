
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = [
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamvENYVfxP8ZysOLDKeN1nX3kY58KdmBzRO&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40962480&time=1638000019&app_version=2.0.2&sign=2289aa6cd15c7249aadf4d32a3d9b1bf",
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4X63JrzC0x9e2CAOGNrpalyGPYqnLbZRBXK&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40944795&time=1638000044&app_version=2.0.2&sign=2ad0fbe3152e74f1f85079d0a02e6be9",
"https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2eRnKdtJebQVsN6mJLW7nPDWpxVg2LZmRX&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40911360&time=1638000065&app_version=2.0.2&sign=4c5e40d9e4110cd06b343b86b49f4ac1",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6ydMRSblE2yhXQv5JV7n93eRAO8BMxdvD&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40938612&time=1638000092&app_version=2.0.2&sign=a9915ff13d8f27ac0277b1f5e295b995",
"https://focus.youth.cn/article/s?signature=6jEkyrXeG8nBYgKax6lPqxiozOM2CKXpEmW4DwldQJz0L2RON3&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40905147&time=1638000115&app_version=2.0.2&sign=604595db21f6e68672ad06f15dc853c3",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946lKA6vc2XRzWtk6RomeavNyb8EMlgYnm6k&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40919333&time=1638000141&app_version=2.0.2&sign=fc74708353bb0d5f392abfcc87ff638c",
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bM0wwOCP8kQeCJjyNbM4LwQPGzxp0AvZME&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40949729&time=1638000174&app_version=2.0.2&sign=b53e229629a1cc09a263d623b36a443e",
"https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4KkOy8RfKVZDruZvrkWA4MQLb6BeXxq2kEr&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40947545&time=1638000201&app_version=2.0.2&sign=fd84baae5eb23773281fa4d3a825e84d",
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7orPkjgUgroGMCxebpbe4jpGDnANbo8KXQr&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995916&time=1638001244&app_version=2.0.2&sign=99e512335cf04c3dc1614fdbabf59518",
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1M06N0XuMVylpCLqOk22a9VGjJl8gXB5keP&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997189&time=1638001292&app_version=2.0.2&sign=f64b6e6957a5991942e9d509ac2ad228",
"https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2e5nELSJebQVsN6mEZB7nPDWpxVg2LZmRX&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995332&time=1638001317&app_version=2.0.2&sign=a0885eb9746e94970f40cfaa37e5b89e",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJqZBMfBLjnVU6bXz9Nad93krDoJqw0WYn&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995948&time=1638001341&app_version=2.0.2&sign=d405d6609466c3e5aa503b7aad0d6443",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6pqqXIblE2yhXQvwBV7n93eRAO8BMxdvD&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995304&time=1638001369&app_version=2.0.2&sign=62be8b46d45ef2dd9d2a49ba96c5c8c9",
"https://focus.youth.cn/article/s?signature=ZRpgeBYKPdGlvj24GL2MqxfvnlkDCqoBDlX7X96VqmbxkDwr0n&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995016&time=1638001391&app_version=2.0.2&sign=3acfe6ebb2baaa8cc7763e6ef00c0983",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2GZpZhnKVgQSNQKGev7rny295VAlmPWzY&uid=58850101&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997232&time=1638001413&app_version=2.0.2&sign=678f740b84d3671a418c6569521ac1d3",
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eL90Y5toV5BnUBpKJmV1gRyAEYpXDmeo0O&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40962480&time=1638002442&app_version=2.0.2&sign=e264108d1cb2e0469fbc88e2444be1f9",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vzGmdJCOD9YkUMdO0lZ48B9yl0Z2eRAmzr&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40944795&time=1638002465&app_version=2.0.2&sign=1667497c123af79bfefd527c99885c29",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946lKq0dH2JvBeUk6R0b2avNyb8EMlgYnm6k&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40911360&time=1638002485&app_version=2.0.2&sign=5cd1848a54d6d4588e6fa705c76f6949",
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eL9pjoIoV5BnUBpKJYK1gRyAEYpXDmeo0O&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40938612&time=1638002523&app_version=2.0.2&sign=4efd05e1ad1758297318134d02e631bd",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2BNJVunAWqlfNQKGXd7rny295VAlmPWzY&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40905147&time=1638002543&app_version=2.0.2&sign=dcc6144111f86154c133b3f67121b78a",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YYrdl5t2NKxOUVGmyeD7L3yAP6WMnmlGK9&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40919333&time=1638002573&app_version=2.0.2&sign=b3fa2551d18d94c14b515d679f32e12d",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqZwwlFB9gOKhepWP0KayGDn2Z0PAvkopB&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40949729&time=1638002596&app_version=2.0.2&sign=5a4553968d9269ceef2aab8073bda2ce",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqn9D3HB9gOKhepWPQeayGDn2Z0PAvkopB&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40979419&time=1638002622&app_version=2.0.2&sign=6de108947e3bfad0ad5d1555ffc9606d",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LKPN62UjweZgu8kdlDZ4EMLO9lwG2zQJeB&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40947545&time=1638002646&app_version=2.0.2&sign=41ab5fc2a3ecb391830506d41576020f",
"https://focus.youth.cn/article/s?signature=nME6PzmgxDLdbpG4wzDW8PSXL32PFROZyK91rjJNqwAQ0OoW9B&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40931052&time=1638002671&app_version=2.0.2&sign=cea7e48a4518c73b743821466a4b3169",
"https://focus.youth.cn/article/s?signature=6jEkyrXeG8nBYgKax6lnBefokP6WUKXp6kk4DwldQJz0L2RON3&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40945104&time=1638002689&app_version=2.0.2&sign=86f486bab3638e6d6fa8ead669d5d9e1",
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4X63lpMC0JKEpUAOGbEyalyGPYqnLbZRBXK&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40930727&time=1638002714&app_version=2.0.2&sign=4d5a410d53647b5bdbedc1ccedf12ef8",
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7EnE8VKTWnRyzHgKPOGWa8oADjvkbgZRGLV&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40930357&time=1638002736&app_version=2.0.2&sign=51a7a5253feb337177483bc9bb66e967",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2B0nlfnAWqlfNQKG9X7rny295VAlmPWzY&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40930122&time=1638002774&app_version=2.0.2&sign=9e81d003e05feb8582db1bb3a76f84f3",
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1M06VdmuMZ6krhLqOkgNa9VGjJl8gXB5keP&uid=59718980&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40980431&time=1638002818&app_version=2.0.2&sign=bcf13a54567808b7db9461e3a6aadde8",
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4k0qkAZhnWjrvCjoenO278M9zV2YP3KBGAe&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41002160&time=1638023287&app_version=2.0.2&sign=a636c9317cc389dbac148ca6bf259f62",
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dEJoBLIdlKLATelr9bA45okQ0dyYRDBzxL&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41002963&time=1638023319&app_version=2.0.2&sign=125de6f240c0c7c066e5b5ed37eaa6f8",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM79DemRzi2Ad30Tmn3xPx49Ee0q6OyNbJvDX&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001985&time=1638023345&app_version=2.0.2&sign=710784642dbb04d8f9e4771d08a769f6",
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLar2DMVOHbA6YRsN9PKo2agRQY9OZjA5eJpl&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001990&time=1638023372&app_version=2.0.2&sign=0e0973785d76e6cf8719fec6059afcae",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LK8lBEtp2E8zh8kBj024EMLO9lwG2zQJeB&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41002303&time=1638023403&app_version=2.0.2&sign=749776efc69ec64ea88c48202cf89dbd",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LK8lvrhp2E8zh8kBjeP4EMLO9lwG2zQJeB&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001974&time=1638023427&app_version=2.0.2&sign=61a509814108484038e327f200a209c4",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDMkGozHDPpQmH0BbOEP1K5N3rYk6pmxVGl&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41003093&time=1638023461&app_version=2.0.2&sign=061104e5502ce3ddb8e94b799318f109",
"https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4KkzLzvivbMOrcZveqm34MQLb6BeXxq2kEr&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41004379&time=1638023490&app_version=2.0.2&sign=6d40a775062bef85224c94b174d0ee20",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAYxOLEIXO82wHXqQRnxawr9G5ZDV6ldJ2N&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41004260&time=1638023515&app_version=2.0.2&sign=d46f7a06628d6943ef21298beca21644",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAYxkMOIXO82wHXqQRNQawr9G5ZDV6ldJ2N&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41002119&time=1638023561&app_version=2.0.2&sign=61acd95b6ee7301dfbdd7a7acc336a6a",
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eLmYBEIDE6edHBpGgm01gRyAEYpXDmeo0O&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999674&time=1638023812&app_version=2.0.2&sign=97907352a5ca4c9bad4757c65f80f044",
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PRAjLzTewvzZTbj2BGv7GV8wZPJorvpjEW&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999731&time=1638023841&app_version=2.0.2&sign=1101f4baf4498d9779871ad90b8780a5",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJqOboSKWyvVi6bwg03ad93krDoJqw0WYn&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001676&time=1638023881&app_version=2.0.2&sign=c14fad46b389477f54c433464d571aad",
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dEJYe3idlKLATelr9GV45okQ0dyYRDBzxL&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999770&time=1638023909&app_version=2.0.2&sign=2e8df50549deb6a2b1730c372fce1317",
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bMebpYs2p3deTJjkqg94LwQPGzxp0AvZME&uid=60054645&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999799&time=1638023934&app_version=2.0.2&sign=8fb482118bb30ef00ad0cf41ed9d7d1c",
"https://focus.youth.cn/article/s?signature=yGdoJZx2eAwpjgl7O8YOD8UZvRxeIg2KqEda0PMbqvLnr9EKzR&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40996570&time=1638058302&app_version=2.0.2&sign=8f2a6c7096f201d21bb9876b29544e3d",
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4X6KBvEuoqPpmCAOnpVyalyGPYqnLbZRBXK&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40996427&time=1638058329&app_version=2.0.2&sign=639d571fa8029d0cfa076a012102f3d1",
"https://focus.youth.cn/article/s?signature=RpqGjEWYvLyBl2g1l2BOVJSzPmGlsvKw3GV7D56Pd3OMonkQx9&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001538&time=1638058395&app_version=2.0.2&sign=2672a6d64ef7c9a2c5696bb50eae9d86",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJqZk5F5MKgPF6bwYlead93krDoJqw0WYn&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40996457&time=1638058356&app_version=2.0.2&sign=fa91f8dd5e4ab8911265a11a1c4321f1",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2GgeAc8zvlXSNQpgM97rny295VAlmPWzY&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41005549&time=1638057959&app_version=2.0.2&sign=25e4dfeabd056bc3e3fca6a52304bc4e",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6pNNpuAG8n3cXQ2krN7n93eRAO8BMxdvD&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41003245&time=1638057986&app_version=2.0.2&sign=3c6f3fcbd0b638619016bed4aab2b493",
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dEJoZrSqYd5Mielrpm045okQ0dyYRDBzxL&scid=41003426&sign=170a56f5d97c6c630dca535dd7d9e6fe",
"https://focus.youth.cn/article/s?signature=RpqGjEWYvLyBl2g1l2BzBwszPmGlsvKw3n97D56Pd3OMonkQx9&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41004379&time=1638058078&app_version=2.0.2&sign=6d4354764001e37475abe226bbb4df33",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LK8xzYcNrpgdU8kBK2J4EMLO9lwG2zQJeB&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41004260&time=1638058102&app_version=2.0.2&sign=4819e97288431ef4b438d4543341fa47",
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamvk8EVhRLNODiOL8Pe91nX3kY58KdmBzRO&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41004324&time=1638058133&app_version=2.0.2&sign=1bf6daba3879fe83c58177b0cb879042",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YYjEyWTMQWOBTVGJ89x7L3yAP6WMnmlGK9&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41003460&time=1638058161&app_version=2.0.2&sign=2a7c6c9534225f02e089bea8eb616677",
"https://focus.youth.cn/article/s?signature=3YDwkj8dqQbPnoB4jAx9eKTMADY5T3jJpex1lgxXL9AJ2zORKM&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41003642&time=1638058190&app_version=2.0.2&sign=4c629b4e27eaaf46d1cd5a0806e5679a",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAYxOqBszPXgksXqQrJLawr9G5ZDV6ldJ2N&uid=53272067&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41003725&time=1638058210&app_version=2.0.2&sign=7b9e9de66ea911cc92fa823553e6036b",
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLar2DWx0T9vlNMCN9PkzkagRQY9OZjA5eJpl&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006467&time=1638062305&app_version=2.0.2&sign=3a34b52798b19b450d8c0b6203286281",
"https://focus.youth.cn/article/s?signature=dQOvnJNrgR0GzE9azZyolNT8ovP0urO3ZW6aV6yqY2lXojxeM8&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006517&time=1638065363&app_version=2.0.2&sign=ad0d44a6a1ea9bedac544951794c98fc",
"https://focus.youth.cn/article/s?signature=3YDwkj8dqQbPnoB4jAxoblFMOowQi3jJ6q91lgxXL9AJ2zORKM&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006800&time=1638065394&app_version=2.0.2&sign=981ca09e05f4e20015b22cb77b9604da",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6pZB0tAzwoecXQ2VEz7n93eRAO8BMxdvD&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006628&time=1638065415&app_version=2.0.2&sign=d48300786f9655225b3eb8f69209ac2e",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqnybWC5WgD9cepbQrOayGDn2Z0PAvkopB&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006762&time=1638065445&app_version=2.0.2&sign=a10d1349f0fa106de253234083b0b01b",
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bMeozBT5zoYZcJjkgwP4LwQPGzxp0AvZME&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41005968&time=1638065469&app_version=2.0.2&sign=2de6e4b52bdfffda216830dc9571f621",
"https://focus.youth.cn/article/s?signature=nME6PzmgxDLdbpG4wzQobGfkq3xLcROmBGn1rjJNqwAQ0OoW9B&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006718&time=1638065485&app_version=2.0.2&sign=7e7dc6e351557b52b4ccc6c63f199af6",
"https://focus.youth.cn/article/s?signature=KYJBMEDexQprwO0aJBl6eMCVJGlEClng2ldaj5zbg8RLkP9oXd&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006351&time=1638065503&app_version=2.0.2&sign=6fb64dd934b13051cbd2ff5acecebcd4",
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7orPonRT6n3VkIxeLjx64jpGDnANbo8KXQr&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006715&time=1638065522&app_version=2.0.2&sign=4372a5e9fe7440a25c64b642a87d2ad0",
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bMeoqNu5zoYZcJjkgqD4LwQPGzxp0AvZME&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41005907&time=1638065545&app_version=2.0.2&sign=d022b1ec0e6752f26b5b41e356ce5b3d",
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RX3wzBiJw3yOtO5L0987ov3Xqel0ngwVyZ&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006469&time=1638065568&app_version=2.0.2&sign=82318455f34aea2bab5752c8965a3b5f",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDMk6OXseEwdjc0BbjJR1K5N3rYk6pmxVGl&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41005637&time=1638065592&app_version=2.0.2&sign=38a929b80d693645a729b62304c840e9",
"https://focus.youth.cn/article/s?signature=BzyAgkjdGMQWRVY752WPQWuxdZKMUvVOznMalK9opXE8ZO3mrb&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006633&time=1638065610&app_version=2.0.2&sign=2e7e030c7259d134b444662f260a99b7",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM79Del86HxjlJ9Umn3ROQ49Ee0q6OyNbJvDX&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41006460&time=1638065634&app_version=2.0.2&sign=dd130743ad78376203cd369f14df7407",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vz6oKEsVK9jDCMdoEQy48B9yl0Z2eRAmzr&uid=55886025&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41007007&time=1638065652&app_version=2.0.2&sign=a2a0bca695e9db49e2677aa314f387e6",

];
let articles1 = [
];
let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    let array = articles.concat(articles1);
    for (let i = 0; i < array.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(array[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(3000);

        await visit();
        await $.wait(3000);

        await openpage();
        await $.wait(3000);

        await callback();
        await $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
