
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = [
"https://focu.youth.cn/threehotnew/20210521?sid=38542051&uid=52935613&timestamp=1622094006&signature=dvG9ReJyYL36goEAWV46lBXONcmkGzkaMQD0OPmnkw5jBl2X8Z&scene_id=fire_share&share_id=52935613385420511622094031213&time=1622094032640",
"https://focu.youth.cn/vhot/video/20210524?sid=38588213&uid=52935613&timestamp=1622094006&signature=P9pJjlO2MYzBWndV0kar2ZGkYF9XGWXa5bxer3EwLKA6RG8yvX&scene_id=fire_share&share_id=52935613385882131622094971049&time=1622094972439",
"https://focu.youth.cn/threehotnew/20210525?sid=38616374&uid=52935613&timestamp=1622094006&signature=gbJynLeRd3VA29KYqE4gqjL5WC5kLPkaDNrGQloPXZzxvOB6jW&scene_id=fire_share&share_id=52935613386163741622095000166&time=1622095001758",
"https://focu.youth.cn/threehotnew/20210526?sid=38650969&uid=52935613&timestamp=1622094006&signature=lXOy8gQJwx6DGYbAEV79DzjMXFxKepK4PzMNdL3pWmnq02kveR&scene_id=fire_share&share_id=52935613386509691622095027260&time=1622095029379",
"https://focu.youth.cn/threehotnew/20210526?sid=38638275&uid=52935613&timestamp=1622094006&signature=M3YJXEvNgO8W5zRwpk4VZwd3Bsbq5Dq42mZ69xB0loAqGPQnLb&scene_id=fire_share&share_id=52935613386382751622095054463&time=1622095055689",
"https://focu.youth.cn/threehotnew/20210522?sid=38561509&uid=52935613&timestamp=1622094006&signature=5yNLlPgo6r98RX0bMW7YY0NRjUMkJLk7KEVpwGOxvAqDZzBJdm&scene_id=fire_share&share_id=52935613385615091622095073451&time=1622095074925",
"https://focu.youth.cn/threehotnew/20210526?sid=38635633&uid=52935613&timestamp=1622094006&signature=vg9Vr5WAX3dJejlq6GaJBXbZdiVxmLxawoYk2PpNxbRZEDzmnL&scene_id=fire_share&share_id=52935613386356331622095098245&time=1622095099546",
"https://focu.youth.cn/threehotnew/20210526?sid=38635209&uid=52935613&timestamp=1622094006&signature=5yNLlPgo6r98RX0bMW7YYbDJjtMkJLk7KEVpwGOxvAqDZzBJdm&scene_id=fire_share&share_id=52935613386352091622095110116&time=1622095111758",
"https://focu.youth.cn/threehotnew/20210526?sid=38643254&uid=52935613&timestamp=1622094006&signature=jEPYDGOJ685MLWwrbNaAYXeOMczyQnyal3zVgQoedxKAkR20pB&scene_id=fire_share&share_id=52935613386432541622095127143&time=1622095128505",
"https://focu.youth.cn/threehotnew/20210526?sid=38653580&uid=52935613&timestamp=1622094006&signature=B3MvlKp05kgOXPA9oG7nD6pb5tjmo6m1erYEjxzQLWmw8DnyJb&scene_id=fire_share&share_id=52935613386535801622095140742&time=1622095141916",
"https://focu.youth.cn/threehotnew/20210527?sid=38664186&uid=52935613&timestamp=1622275104&signature=nG63ezAQDowMB0vlYg4k06BJDtqeK0e7L8KN5yR9XpjPOxrbdE&scene_id=fire_share&share_id=52935613386641861622275113988&time=1622275115460",
"https://focu.youth.cn/threehotnew/20210525?sid=38612619&uid=52935613&timestamp=1622275104&signature=bDm0KxOyWQGgYNjrBV4jARZPPuME8LE1oLpzq253Av968kJPEM&scene_id=fire_share&share_id=52935613386126191622275133637&time=1622275135014",
"https://focu.youth.cn/vhot/video/20210525?sid=38613107&uid=52935613&timestamp=1622275104&signature=dvG9ReJyYL36goEAWV46lVBRWFmkGzkaMQD0OPmnkw5jBl2X8Z&scene_id=fire_share&share_id=52935613386131071622275153068&time=1622275154608",
"https://focu.youth.cn/threehotnew/20210527?sid=38659520&uid=52935613&timestamp=1622275104&signature=Qg9jzmlY6xZnPq3DGO1dEYO6ZUqXZQX4XrLEVMWpRd8Neb0JkA&scene_id=fire_share&share_id=52935613386595201622275182449&time=1622275183686",
"https://focu.youth.cn/threehotnew/20210523?sid=38585709&uid=52935613&timestamp=1622275104&signature=5yNLlPgo6r98RX0bMW7YY02PjHMkJLk7KEVpwGOxvAqDZzBJdm&scene_id=fire_share&share_id=52935613385857091622275205682&time=1622275206957",
"https://focu.youth.cn/threehotnew/20210527?sid=38666221&uid=52935613&timestamp=1622275104&signature=glp5xY6RDENobMmkVO752zpDEcxBNbBa8GPZQwnj20JBreK3Ay&scene_id=fire_share&share_id=52935613386662211622275221544&time=1622275222764",
"https://focu.youth.cn/threehotnew/20210526?sid=38635639&uid=52935613&timestamp=1622275104&signature=8W62Rvorl9xBbN3dqEax65ezwswneMn4pjVLXQDk0GeygYZOJ5&scene_id=fire_share&share_id=52935613386356391622275236868&time=1622275237997",
"https://focu.youth.cn/threehotnew/20210524?sid=38592895&uid=52935613&timestamp=1622275104&signature=dvG9ReJyYL36goEAWV46lVkDqimkGzkaMQD0OPmnkw5jBl2X8Z&scene_id=fire_share&share_id=52935613385928951622275250255&time=1622275251660",
"https://focu.youth.cn/onehotnew/20210526?sid=38643248&uid=53483001×tamp=1622276493&signature=N3vEgwjmRqPndZp5kr7bMbKGKt5BkGx4eoGDy9x2KzL8JAblYX&scene_id=fire_share&share_id=53483001386432481622276534461&time=1622276535868",
"https://focu.youth.cn/onehotnew/20210526?sid=38641605&uid=53483001&timestamp=1622276606&signature=bDjmABzyXE32GNxlOY4pv5XQ5FevBbNaZ9vnQ58wq06peMdkrP&scene_id=fire_share&share_id=53483001386416051622276617866&time=1622276683931",
"https://focu.youth.cn/onehotnew/20210523?sid=38585709&uid=53483001&timestamp=1622276606&signature=glp5xY6RDENobMmkVO752q69WCxQEgma8GPZQwnj20JBreK3Ay&scene_id=fire_share&share_id=53483001385857091622276699693&time=1622276700860",
"https://focu.youth.cn/onehotnew/20210527?sid=38672322&uid=53483001&timestamp=1622276606&signature=NXjrme82G3An0wVvWpamvYngLfRb8Vp1gq9dJKyL5YRxElM6Zo&scene_id=fire_share&share_id=53483001386723221622276711937&time=1622276713014",
"https://focu.youth.cn/onehotnew/20210524?sid=38591125&uid=53483001&timestamp=1622276606&signature=l3Q0RNe9oPxVZ6pJMA7EnXMwMTJeo0qaL2XGkOKdvDynjYb5Wz&scene_id=fire_share&share_id=53483001385911251622276724686&time=1622276725687",
"https://focu.youth.cn/onehotnew/20210527?sid=38660214&uid=53483001×tamp=1622276606&signature=pznrQKZ06xYeGkD5yA4wz9R2ztkQjYl18Nm2bvMqRWw9gPdLVO&scene_id=fire_share&share_id=53483001386602141622276736599&time=1622276737636",
"https://focu.youth.cn/onehotnew/20210526?sid=38635351&uid=53483001&timestamp=1622276606&signature=bDm0KxOyWQGgYNjrBV4jAReZWsM3ZkR1oLpzq253Av968kJPEM&scene_id=fire_share&share_id=53483001386353511622276748916&time=1622276749893",
"https://focu.youth.cn/onehotnew/20210526?sid=38635633&uid=53483001&timestamp=1622276606&signature=EgVbkQOLMqvWm9RrG0a2eP9J2IEqbYR73xy6doZeXBJzln85PD&scene_id=fire_share&share_id=53483001386356331622276760200&time=1622276761114",
"https://focu.youth.cn/onehotnew/20210527?sid=38660196&uid=53483001&timestamp=1622276606&signature=Qg9jzmlY6xZnPq3DGO1dEYxjOUqm9x84XrLEVMWpRd8Neb0JkA&scene_id=fire_share&share_id=53483001386601961622276773018&time=1622276774024",
"https://focu.youth.cn/onehotnew/20210528?sid=38697030&uid=53483001&timestamp=1622276606&signature=nG63ezAQDowMB0vlYg4k0kZEjUq56xk7L8KN5yR9XpjPOxrbdE&scene_id=fire_share&share_id=53483001386970301622276786218&time=1622276787171",
"https://focu.youth.cn/onehotnew/20210528?sid=38679329&uid=53483001&timestamp=1622276606&signature=b8ne3myXKLv0lpjr2RaBJOLn5u5kjEqaxP5OAdZD6NYMBgwzVQ&scene_id=fire_share&share_id=53483001386793291622276796752&time=1622276797736",
"https://focu.youth.cn/onehotnew/20210529?sid=38701557&uid=53483001&timestamp=1622276606&signature=lXOy8gQJwx6DGYbAEV79DmmrJCxk6L84PzMNdL3pWmnq02kveR&scene_id=fire_share&share_id=53483001387015571622276829757&time=1622276830729",
"https://focu.youth.cn/onehotnew/20210528?sid=38686313&uid=53483001&timestamp=1622276606&signature=lXOy8gQJwx6DGYbAEV79Dmgvlixk6L84PzMNdL3pWmnq02kveR&scene_id=fire_share&share_id=53483001386863131622276851177&time=1622276852307",
"https://focu.youth.cn/onehotnew/20210527?sid=38658198&uid=53483001&timestamp=1622276606&signature=DJ5qQLk6jVvNWEzxlO70KkgVoUGWdM840BGyPngp83Zm9KYreM&scene_id=fire_share&share_id=53483001386581981622276863101&time=1622276864081",
"https://focu.youth.cn/onehotnew/20210527?sid=38658225&uid=53483001×tamp=1622276606&signature=l3Q0RNe9oPxVZ6pJMA7EnXlLMTJeo0qaL2XGkOKdvDynjYb5Wz&scene_id=fire_share&share_id=53483001386582251622276874160&time=1622276875204",
"https://focu.youth.cn/threehotnew/20210527?sid=38663676&uid=52983063&timestamp=1622277542&signature=jE9mdZzRG3lxVgkq8na3X2AjotnNlxd1yJ6vBKw0oObepWDXrM&scene_id=fire_share&share_id=52983063386636761622277658374&time=1622277659621",
"https://focu.youth.cn/threehotnew/20210524?sid=38603361&uid=52983063&timestamp=1622277542&signature=b8ne3myXKLv0lpjr2RaBJXY8RT5wyZ3axP5OAdZD6NYMBgwzVQ&scene_id=fire_share&share_id=52983063386033611622277674423&time=1622277675545",
"https://focu.youth.cn/threehotnew/20210529?sid=38701106&uid=52983063&timestamp=1622277542&signature=gbJynLeRd3VA29KYqE4gqLLqQu5kx3qaDNrGQloPXZzxvOB6jW&scene_id=fire_share&share_id=52983063387011061622277687444&time=1622277689116",
"https://focu.youth.cn/threehotnew/20210523?sid=38576223&uid=52983063&timestamp=1622277542&signature=VMYqRmZGljQD8pAPB3aDMoPgGte5plb1Xy9O06evWJwbxoN5KL&scene_id=fire_share&share_id=52983063385762231622277701217&time=1622277702164",
"https://focu.youth.cn/threehotnew/20210523?sid=38574968&uid=52983063&timestamp=1622277542&signature=NRxPz8j0mdBYbOGDW91l2ZD06hzZQDJ7yAXV56qwogJEpkLK2e&scene_id=fire_share&share_id=52983063385749681622277714514&time=1622277715464",
"https://focu.youth.cn/vhot/video/20210528?sid=38690629&uid=52983063&timestamp=1622277542&signature=5yNLlPgo6r98RX0bMW7YYZJWzsMkXrv7KEVpwGOxvAqDZzBJdm&scene_id=fire_share&share_id=52983063386906291622277726891&time=1622277727762",
"https://focu.youth.cn/threehotnew/20210526?sid=38646985&uid=52983063&timestamp=1622277542&signature=glp5xY6RDENobMmkVO752zJqlcxBveya8GPZQwnj20JBreK3Ay&scene_id=fire_share&share_id=52983063386469851622277739096&time=1622277740012",
"https://focu.youth.cn/threehotnew/20210527?sid=38663675&uid=52983063&timestamp=1622277542&signature=Kb8LA9nmqlJRV56zE31y9Klyyu8zXY61ZDNjYOMGgyPBWwreQ0&scene_id=fire_share&share_id=52983063386636751622277749587&time=1622277750503",
"https://focu.youth.cn/threehotnew/20210529?sid=38700940&uid=52983063&timestamp=1622277542&signature=Qg9jzmlY6xZnPq3DGO1dEMM9OFqXKwg4XrLEVMWpRd8Neb0JkA&scene_id=fire_share&share_id=52983063387009401622277762002&time=1622277762968",
"https://focu.youth.cn/threehotnew/20210526?sid=38638275&uid=52983063&timestamp=1622277542&signature=Kb8LA9nmqlJRV56zE31y9K5rXF8zXY61ZDNjYOMGgyPBWwreQ0&scene_id=fire_share&share_id=52983063386382751622277775497&time=1622277776528",
"https://focu.youth.cn/threehotnew/20210529?sid=38701026&uid=52983063&timestamp=1622283828&signature=qEkWRmZyvzPO2bBdGX788JJybtYgp967l36xneA0QpKgM9NYL8&scene_id=fire_share&share_id=52983063387010261622283832027&time=1622283833211",
"https://focu.youth.cn/threehotnew/20210527?sid=38659060&uid=52983063&timestamp=1622283828&signature=5NPeoJjl0pEAqLZYQM4q2A36ES8rpeo7692Vrk3gBdwXDyWK8b&scene_id=fire_share&share_id=52983063386590601622283847926&time=1622283848896",
"https://focu.youth.cn/threehotnew/20210528?sid=38679293&uid=52983063&timestamp=1622283828&signature=V5EWkpzrBZdXGYOlmQ4X6XmPdioMkA8aoK2nvbNxqe03PjJw9A&scene_id=fire_share&share_id=52983063386792931622283860583&time=1622283862659",
"https://focu.youth.cn/threehotnew/20210525?sid=38612648&uid=52983063&timestamp=1622283828&signature=o9xqzDrKG6wJnYZ5Ek4eLYAevHY96bW1R3LXvBgNylVOMbA02W&scene_id=fire_share&share_id=52983063386126481622283876012&time=1622283876918",
"https://focu.youth.cn/threehotnew/20210529?sid=38702925&uid=52983063&timestamp=1622283828&signature=PDAM2LbdQB6J8ljGNZazZOAQyT8GLyzaKX0mkV39oyW5xrzpYe&scene_id=fire_share&share_id=52983063387029251622283887899&time=1622283888702",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vz9W35sOvnR3tMkYKQO48B9yl0Z2eRAmzr&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38848339&time=1623309487&app_version=2.0.2&sign=a11c0919dfd23df46587de8aee237463",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAYADg0tGv39DIXZxw5Mawr9G5ZDV6ldJ2N&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38913095&time=1623309554&app_version=2.0.2&sign=99f10f0647b31c7dce8b0fa3273c163c",
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4k0gJGLCp5BxNujvzwOX78M9zV2YP3KBGAe&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38859095&time=1623309682&app_version=2.0.2&sign=1e5b3cb916487660396f76119a320045",
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7orgAWnIgeNwBhxqrmvN4jpGDnANbo8KXQr&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38914442&time=1623309722&app_version=2.0.2&sign=65b75246ab9851d56b67915571dc18e0",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAYAnVxHGv39DIXZxwJnawr9G5ZDV6ldJ2N&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38848301&time=1623309758&app_version=2.0.2&sign=2db3c2af7e2f1a83a74c425a7b2366e4",
"https://focus.youth.cn/article/s?signature=BzyAgkjdGMQWRVY752exovtXQrgwUvmXrQBalK9opXE8ZO3mrb&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38866628&time=1623309787&app_version=2.0.2&sign=4baad66e02810cc2766eb2abce2d5e76",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqgDLRfBGEm8sel5NjzayGDn2Z0PAvkopB&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38848419&time=1623309818&app_version=2.0.2&sign=7c75857aa7caf3ceefff3d1304ac3a45",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vz9WyLHOvnR3tMkYKKw48B9yl0Z2eRAmzr&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38848730&time=1623309889&app_version=2.0.2&sign=7fd2becb610021e97c31c5e76abc8481",
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nDgWYYHbxkJWC536NLO1ZPYQ3lm9pbD2yn&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38853268&time=1623309922&app_version=2.0.2&sign=89b2203506f43be710af658bd3e06dd7",
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLar2gydRiBmyEPsN2yWzGagRQY9OZjA5eJpl&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38848711&time=1623309955&app_version=2.0.2&sign=8f336e63a6958fb275be72a4cd2c6f67",
"https://focus.youth.cn/article/s?signature=KYJBMEDexQprwO0aJB6XDOFnjv3qclQwrPJaj5zbg8RLkP9oXd&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38870793&time=1623309981&app_version=2.0.2&sign=3607174d59d7de45e8988ccc95081064",
"https://focus.youth.cn/article/s?signature=ZLAxJmwrdW82D634Z3ozqGTK6RPQfvBRWYq7N9B05XEbOlQGnj&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38872370&time=1623310012&app_version=2.0.2&sign=feac389abc2d161cd13fbd1ad156cd9d",
"https://focus.youth.cn/article/s?signature=nME6PzmgxDLdbpG4wz56q3FXQOY9UR2LXVQ1rjJNqwAQ0OoW9B&uid=57196254&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=38848435&time=1623310047&app_version=2.0.2&sign=c0b4d85ca608a2866b2d9b46e67e09eb",
"https://focu.youth.cn/newsixhot/20210817?sid=39749748&uid=58421476&timestamp=1629463493&signature=8W62Rvorl9xBbN3dqEax6OXApSo6qRq4pjVLXQDk0GeygYZOJ5&scene_id=fire_share&share_id=58421476397497481629463522&time=1629463522",
"https://focu.youth.cn/newsixhot/20210820?sid=39793968&uid=58421476&timestamp=1629465912&signature=zLbNjJ5wr0YegkWEG37orXnYghg2dYd4DP6vqOn8lB2py9XRQx&scene_id=fire_share&share_id=58421476397939681629465924&time=1629465924",
"https://focu.youth.cn/newsixhot/20210820?sid=39797124&uid=58421476&timestamp=1629465912&signature=zLbNjJ5wr0YegkWEG37orXbgOSg2dYd4DP6vqOn8lB2py9XRQx&scene_id=fire_share&share_id=58421476397971241629465962&time=1629465962",
"https://focu.youth.cn/newsixhot/20210818?sid=39766429&uid=58421476&timestamp=1629465912&signature=Qg9jzmlY6xZnPq3DGO1dEzOqdhGVEdE4XrLEVMWpRd8Neb0JkA&scene_id=fire_share&share_id=58421476397664291629465987&time=1629465987",
"https://focu.youth.cn/newsixhot/20210817?sid=39747674&uid=58421476&timestamp=1629465912&signature=glp5xY6RDENobMmkVO752XXg2SXLWkWa8GPZQwnj20JBreK3Ay&scene_id=fire_share&share_id=58421476397476741629466008&time=1629466008",
"https://focu.youth.cn/newsixhot/20210819?sid=39775495&uid=58421476&timestamp=1629465912&signature=nG63ezAQDowMB0vlYg4k03qb2cpPyny7L8KN5yR9XpjPOxrbdE&scene_id=fire_share&share_id=58421476397754951629466060&time=1629466060",
"https://focu.youth.cn/newsixhot/20210819?sid=39784203&uid=58421476&timestamp=1629465912&signature=kzYx0ngZLqblOM65PN7LKW2NJTjZLpL4E3GQoepJDX9dv8AB2W&scene_id=fire_share&share_id=58421476397842031629466082&time=1629466082",
"https://focu.youth.cn/newsixhot/20210819?sid=39777990&uid=58421476&timestamp=1629465912&signature=l3Q0RNe9oPxVZ6pJMA7EnPv8nSWyDbDaL2XGkOKdvDynjYb5Wz&scene_id=fire_share&share_id=58421476397779901629466102&time=1629466102",
"https://focu.youth.cn/newsixhot/20210819?sid=39777715&uid=58421476&timestamp=1629465912&signature=qEkWRmZyvzPO2bBdGX788pAJouVblWl7l36xneA0QpKgM9NYL8&scene_id=fire_share&share_id=58421476397777151629466125&time=1629466125",
"https://focu.youth.cn/newsixhot/20210819?sid=39775518&uid=58421476&timestamp=1629465912&signature=5yNLlPgo6r98RX0bMW7YYLjwVF2xnWn7KEVpwGOxvAqDZzBJdm&scene_id=fire_share&share_id=58421476397755181629466154&time=1629466154",
"https://focu.youth.cn/newsixhot/20210819?sid=39774188&uid=58421476&timestamp=1629465912&signature=bNLQGOPvkzKWxBE3gD1M0Q2x3IMkLjLayM2eV8nrowqJXmZjY5&scene_id=fire_share&share_id=58421476397741881629466178&time=1629466178",
"https://focu.youth.cn/newsixhot/20210818?sid=39759944&uid=58421476&timestamp=1629465912&signature=bNLQGOPvkzKWxBE3gD1M0Qp9OfMkLjLayM2eV8nrowqJXmZjY5&scene_id=fire_share&share_id=58421476397599441629466202&time=1629466202",
"https://focu.youth.cn/newsixhot/20210818?sid=39759714&uid=58421476&timestamp=1629465912&signature=PDAM2LbdQB6J8ljGNZazZ2qYzH2edwdaKX0mkV39oyW5xrzpYe&scene_id=fire_share&share_id=58421476397597141629466234&time=1629466234",
"https://focu.youth.cn/newsixhot/20210817?sid=39748528&uid=58421476&timestamp=1629465912&signature=bDm0KxOyWQGgYNjrBV4jAyNEViyxgDg1oLpzq253Av968kJPEM&scene_id=fire_share&share_id=58421476397485281629466256&time=1629466256",	
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamvO8zKtxkpxosOrxDAA1nX3kY58KdmBzRO&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40833172&time=1637322259&app_version=2.0.2&sign=d8495b9a3e445a66d332ebd997542ec8",	
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6bY6AIbRDbwcXYlvdB7n93eRAO8BMxdvD&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40830686&time=1637322331&app_version=2.0.2&sign=ddc4dcd5fa014678b56515e199c8eec4",	
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP788WVPDsVQAVqszRlXbq7gxne6rYKdpWVoR&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40834305&time=1637322363&app_version=2.0.2&sign=a0a4ed5e2e5cd9753a287809d00ae430",	
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJ9d6KsBXqBRu6eMXL0ad93krDoJqw0WYn&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40799545&time=1637322403&app_version=2.0.2&sign=37dc9576bf532fe272ff8552f0df5024",	
"https://focus.youth.cn/article/s?signature=yGdoJZx2eAwpjgl7O8QXO6HzbkzWhgZLnJba0PMbqvLnr9EKzR&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40826868&time=1637322426&app_version=2.0.2&sign=0babb58a334f4fd19c48731823eede6e",	
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP788Nd9rsVQAVqszRlXAQ7gxne6rYKdpWVoR&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40797051&time=1637322449&app_version=2.0.2&sign=d6542c81223038cb08a4b6a24b4b6764",	
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4X6pmJKi0dl0KiA8LGjAalyGPYqnLbZRBXK&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40808325&time=1637322469&app_version=2.0.2&sign=96d7559f0d964bb5f3274032d5e2b84b",	
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2DLqzfn90nWuNbYKAL7rny295VAlmPWzY&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40816458&time=1637322490&app_version=2.0.2&sign=f97ed12696eb735fb44a4c7b32e532ef",	
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqEM9rfBX0Bgue8lWAwayGDn2Z0PAvkopB&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40820693&time=1637322694&app_version=2.0.2&sign=b898834e0b64a212d54d17c7f8118dec",	
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7orLvB9ugAJg3Hx5qbdp4jpGDnANbo8KXQr&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40799493&time=1637322723&app_version=2.0.2&sign=c2f899a6291f636165ad13e9ee08b474",	
"https://focus.youth.cn/article/s?signature=BzyAgkjdGMQWRVY7525j2RiXpmXZTvjm2LpalK9opXE8ZO3mrb&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40813275&time=1637322747&app_version=2.0.2&sign=e69e13f754c7de1724d6b5596546113d",	
"https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4Q8Axr9iVKNVQsxAgv9v1koMEv6nydKPZLD&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40851241&time=1637322769&app_version=2.0.2&sign=7ba346f2dc1760899292f856a614e089",	
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dEmPDzUGJ8GnUeMj3Ro45okQ0dyYRDBzxL&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40804702&time=1637322789&app_version=2.0.2&sign=3e2076973806dd6c2c35b5c42ec5398f",	
"https://focus.youth.cn/article/s?signature=RQ3qz2nVgKk9rep70Kb8PbSxO8x2sk6VwnX4yXmv0ZJLWANOM5&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40844227&time=1637322809&app_version=2.0.2&sign=9ab8096b030841ef39976c4c68f85512",	
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2DM6Pin90nWuNbYKOR7rny295VAlmPWzY&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40842911&time=1637322843&app_version=2.0.2&sign=4eddd35d6571a38c71cefba89d8c356a",	
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RXy9O8tZqmZ3iO68WyO7ov3Xqel0ngwVyZ&uid=58585958&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40842908&time=1637322865&app_version=2.0.2&sign=de781befe115f9dd9939ef62c5ab43a0",	

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
