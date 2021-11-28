
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = [
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJm9XrIBLxGrT6bwwnXad93krDoJqw0WYn&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40962480&time=1638005914&app_version=2.0.2&sign=140a3123b211b20490ff9eb56e2e4969",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJm5Y0TBLxGrT6bwwnqad93krDoJqw0WYn&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40944795&time=1638005938&app_version=2.0.2&sign=c8bceb8551d53ca469bd3dcde6aae85e",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqZmEKcBAbNZTepbbjeayGDn2Z0PAvkopB&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40911360&time=1638005965&app_version=2.0.2&sign=2e6c1d0472e4692792417338268f0d85",
"https://focus.youth.cn/article/s?signature=ZLAxJmwrdW82D634Z3d52YfKOGZ3hvZGGN97N9B05XEbOlQGnj&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999877&time=1638006003&app_version=2.0.2&sign=1dcc7583bb55e6b373e2cfb9d9fb17eb",
"https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2e5PrACJe0mXfN6kkMD7nPDWpxVg2LZmRX&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999674&time=1638006023&app_version=2.0.2&sign=1c60726ac9eb185c567bb8195d3c9a59",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqnjMyIBAbNZTepbb3ZayGDn2Z0PAvkopB&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999085&time=1638006042&app_version=2.0.2&sign=d6d6ec36f9af99f903f197b5c4b2928c",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDMkXbETRML38t0Bbbml1K5N3rYk6pmxVGl&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999731&time=1638006067&app_version=2.0.2&sign=3fc3655db074f845cb5e1192d7327b70",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2GApxFnKOMwuNQppzK7rny295VAlmPWzY&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999163&time=1638006087&app_version=2.0.2&sign=aa4891a83c8ff81f62734505fe4dac3a",
"https://focus.youth.cn/article/s?signature=ZLAxJmwrdW82D634Z3d5lGTKOGZ3hvZGG5k7N9B05XEbOlQGnj&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999770&time=1638006112&app_version=2.0.2&sign=498ff6377c79b5d7d903d5b46e459d7a",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2GAjXcnKOMwuNQpp5r7rny295VAlmPWzY&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999799&time=1638006139&app_version=2.0.2&sign=848ab8c50b612f00cc5fc1e2f4a2fc22",
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PRAjBrHXYG0pTbj226Q7GV8wZPJorvpjEW&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999684&time=1638006158&app_version=2.0.2&sign=b07ba80cb29f329ee5845e6734a18fb9",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6pKexUblQjKHXQ226y7n93eRAO8BMxdvD&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999912&time=1638006180&app_version=2.0.2&sign=fc573f4f5720b4cf0578ce94435b5cc4",
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PRAXjkHXYG0pTbj22nM7GV8wZPJorvpjEW&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001202&time=1638006210&app_version=2.0.2&sign=17a9cf9696ea6869be402bcd4dff1c48",
"https://focus.youth.cn/article/s?signature=RQ3qz2nVgKk9rep70Kjk8zSx3VlmTk3998Q4yXmv0ZJLWANOM5&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999627&time=1638006252&app_version=2.0.2&sign=ae22c06d9f886d3179772a6b997f1e28",
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1M06lVLFMV5xXILqPPlLa9VGjJl8gXB5keP&uid=58832558&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41000763&time=1638006272&app_version=2.0.2&sign=c4325a422465f504f9c19803e8be7c7c",
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RX3mPEFZy2qYuO5LWRM7ov3Xqel0ngwVyZ&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40989987&time=1638004664&app_version=2.0.2&sign=b921e055a1a021a807e166e3770725b8",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6pwgkTboGRQFXQ2vny7n93eRAO8BMxdvD&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40992363&time=1638004640&app_version=2.0.2&sign=ede26e170f26eabb73f34496bc9cf874",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBJqQLnuBQMXxu6bwXO5ad93krDoJqw0WYn&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40989123&time=1638004608&app_version=2.0.2&sign=186a93f7681ed30d1782c644227bde76",
"https://focus.youth.cn/article/s?signature=KYJBMEDexQprwO0aJBlLLyfnl8A0Ulng52Raj5zbg8RLkP9oXd&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995304&time=1638004576&app_version=2.0.2&sign=98a350952f4e3278c6a9f323919218df",
"https://focus.youth.cn/article/s?signature=nME6PzmgxDLdbpG4wzQgKWfXxGboIROmZBG1rjJNqwAQ0OoW9B&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40988662&time=1638004555&app_version=2.0.2&sign=5093a195573cbf357f2c74f4b7eeb43f",
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PRAJyPUXlokGIbj25kl7GV8wZPJorvpjEW&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995948&time=1638004531&app_version=2.0.2&sign=be4a68314dc75148f6532b88b8ed87d2",
"https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4pv2Zv5i3jrPwUzJE68laM8ZkP3BAW9pJqD&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997189&time=1638004505&app_version=2.0.2&sign=b80b9b2d88b6c328961a36bc3cd0f176",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YYjk03c2lQY9CVGJmEb7L3yAP6WMnmlGK9&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995332&time=1638004477&app_version=2.0.2&sign=d9e0b748489b2add54815db636cd08c7",
"https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2e5n2NIJ6rv0HN6kmyk7nPDWpxVg2LZmRX&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995916&time=1638004418&app_version=2.0.2&sign=e27ac498caf1ae77b776372119f59506",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7N8QEVjHNVjKpSvEPlw01nMY6dljLxe9Opk&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40991074&time=1638004389&app_version=2.0.2&sign=a73f95a0ff49a09d25e2ac46afd2bdc1",
"https://focus.youth.cn/article/s?signature=ZLAxJmwrdW82D634Z3dmnluK08yGtvZGoAO7N9B05XEbOlQGnj&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40989104&time=1638004366&app_version=2.0.2&sign=ef18c180777a563a8b43476e0f868f98",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vz68vbSOjBqWUMdoO6X48B9yl0Z2eRAmzr&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40991620&time=1638004346&app_version=2.0.2&sign=6aacc8ccc04758cc653f775754916b6d",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YYrkKeh2lQY9CVGJmQj7L3yAP6WMnmlGK9&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40911360&time=1638004322&app_version=2.0.2&sign=126d3f2e2bd7f8fdefd04e0a2d76b532",
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dEW2lLsGNYJvtelr3Pm45okQ0dyYRDBzxL&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40944795&time=1638004298&app_version=2.0.2&sign=365f1be809de1182e7a9a4abfd2ac0fd",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vzG2KqhOjBqWUMdoObv48B9yl0Z2eRAmzr&uid=58965968&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40962480&time=1638004272&app_version=2.0.2&sign=6ba807d3d1837ea88651bccf41bf80fe",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7N8QEBgHNnm0wIvEPpd81nMY6dljLxe9Opk&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40991620&time=1638007592&app_version=2.0.2&sign=f30405893ee5e8795fb5955f0e5840f5",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqn0jYUBjJp0cepbOXQayGDn2Z0PAvkopB&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997338&time=1638007529&app_version=2.0.2&sign=313834dc9c5332b3b688780165a5084a",
"https://focus.youth.cn/article/s?signature=nME6PzmgxDLdbpG4wzQVZZsXMnDlfROmrpP1rjJNqwAQ0OoW9B&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40990973&time=1638007679&app_version=2.0.2&sign=9c2b3964d5c6df39dd6edb20694bcfac",
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bMexZQsPvpgxfJjkdrp4LwQPGzxp0AvZME&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40992645&time=1638007652&app_version=2.0.2&sign=274873f65a682fd9bd86cc9af7215649",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM79DeOxySzGAw8smn3Vpe49Ee0q6OyNbJvDX&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40996382&time=1638007726&app_version=2.0.2&sign=4d064e19f2573bab71c519a970c14600",
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nDORk2Ub5ErXt5MjnJy1ZPYQ3lm9pbD2yn&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40991074&time=1638007803&app_version=2.0.2&sign=22cfb3a18f2d69d8bb889b46bcdffe6f",
"https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4Q8yDLQTVnoeNfxdGO6j1koMEv6nydKPZLD&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997589&time=1638007703&app_version=2.0.2&sign=c5a4bb32dedb3935c79113c784c69236",
"https://focus.youth.cn/article/s?signature=6jEkyrXeG8nBYgKax6Y6lgFoqAmYcKXGOQz4DwldQJz0L2RON3&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40994627&time=1638007751&app_version=2.0.2&sign=42988c7b1f40fb52ad5e952c02dad9e8",
"https://focus.youth.cn/article/s?signature=6jEkyrXeG8nBYgKax6YVGXcoqAmYcKXGONA4DwldQJz0L2RON3&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40991043&time=1638007778&app_version=2.0.2&sign=54920113e4e8c191af796ed571f05f40",
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4k0qbk2TpyWAkijoekmx78M9zV2YP3KBGAe&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40989631&time=1638007896&app_version=2.0.2&sign=2663059f5ab81a79f469c8389a19f1be",
"https://focus.youth.cn/article/s?signature=yGdoJZx2eAwpjgl7O8YXOXSzdpgksg2K9zla0PMbqvLnr9EKzR&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997232&time=1638007853&app_version=2.0.2&sign=996846ed495356cf7fa8f8c5404f0469",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7N8QE0BFNnm0wIvEPp0M1nMY6dljLxe9Opk&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40991691&time=1638007825&app_version=2.0.2&sign=4c15a2a4f6ddf84142fbea191bbcd0b3",
"https://focus.youth.cn/article/s?signature=89NvAVZQolPrzM0a3X0EvkTb02r9tL9Y3WQ1gXDkJEqdw5xObL&uid=59288229&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995169&time=1638007872&app_version=2.0.2&sign=4419122c6458bacad6c8d4cd6323f9bb",
"https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4KkOOj9CKVmqnTZvedQO4MQLb6BeXxq2kEr&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40966648&time=1638014229&app_version=2.0.2&sign=8c8fdfb939cc6069c605fe932ec6c53e",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vz6RPKTOmjGZsMdoxvy48B9yl0Z2eRAmzr&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995165&time=1638014304&app_version=2.0.2&sign=109cd53b5c1589a28b02db1a4f50f038",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LK8DqBfjVKPmS8kBLzE4EMLO9lwG2zQJeB&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997258&time=1638014328&app_version=2.0.2&sign=ea8060749c2583e1cb7220bd5aaf4008",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAYxVVNuGm0KxFXqQ2yOawr9G5ZDV6ldJ2N&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40995288&time=1638014581&app_version=2.0.2&sign=ff1c1b685493bb1a9c46d3106cd227fd",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7N8QWPkuNrVQwHvEPeWJ1nMY6dljLxe9Opk&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40998683&time=1638015009&app_version=2.0.2&sign=b7ae8ff915bd7cbb2fb2e6abb818f94f",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q2GAmeHnK520iNQpn9X7rny295VAlmPWzY&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999312&time=1638014388&app_version=2.0.2&sign=d8a850dfd9400161f4dfd4d2d47f9f74",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gqnje9HBADd0IepbB5payGDn2Z0PAvkopB&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999731&time=1638014972&app_version=2.0.2&sign=f81673681c1759cb5675c2a0a2c43fc2",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaW6p9XYUblo0DfXQ28Bp7n93eRAO8BMxdvD&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997630&time=1638014910&app_version=2.0.2&sign=0e264d6b4733b9db409d566418a8ca33",
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4X6K0zji0xXwlUAOnl2yalyGPYqnLbZRBXK&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997757&time=1638014988&app_version=2.0.2&sign=e70e04b830afb4d8d7e5a1a90eab9c52",
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLar2D6vWcBZNkDIN9PmyGagRQY9OZjA5eJpl&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999085&time=1638014930&app_version=2.0.2&sign=4f0d7761d2a730dc273e73d7ddda7831",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LK8DKXtjVKPmS8kBJdm4EMLO9lwG2zQJeB&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40997189&time=1638014795&app_version=2.0.2&sign=52689c697fd9c091fa5ccea1425529fa",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAYxXdZSGm0KxFXqQEQYawr9G5ZDV6ldJ2N&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999799&time=1638014813&app_version=2.0.2&sign=abb75365a2242db0e9edfbd30cc47a22",
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bMexyGUP8YXxfJjkZDJ4LwQPGzxp0AvZME&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40991691&time=1638015335&app_version=2.0.2&sign=16147322c2ad5e266d8dcab9f544e5d3",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YYjbkOi2GlAwUVGJgNE7L3yAP6WMnmlGK9&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999163&time=1638015313&app_version=2.0.2&sign=fd47cceb75e2a2fef6e7e47b2b651def",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946l9VWBU2XKDNUk6gq3ZavNyb8EMlgYnm6k&uid=58838989&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999872&time=1638015359&app_version=2.0.2&sign=3c2cbda23d0250a1e71a898338e03d6b",
"https://focus.youth.cn/article/s?signature=BzyAgkjdGMQWRVY752WzmWCxAPMXhvVOnDKalK9opXE8ZO3mrb&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999637&time=1638025619&app_version=2.0.2&sign=c9929195b0c0bfe57067a8077adfe4f8",
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nDO69BFjPEDbu5MjDpK1ZPYQ3lm9pbD2yn&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40998683&time=1638025588&app_version=2.0.2&sign=a9066cd1c16872aba297a03977330e31",
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PRAjMDfmjwqXCbj2OnQ7GV8wZPJorvpjEW&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999872&time=1638025562&app_version=2.0.2&sign=a8ec89ee9198a3688f22caf708b8c38c",
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1M06XLwhK0zZMFLqPwAga9VGjJl8gXB5keP&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999684&time=1638025528&app_version=2.0.2&sign=09d4aba54b376602c9d5b32941d86080",
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7orPy0bH6KWkgCxeLlMb4jpGDnANbo8KXQr&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999912&time=1638025491&app_version=2.0.2&sign=3e969a45d1d4c14979dc7a536a37a40b",
"https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1y9AK0yc8OPvKFYOplQG1xKXjQqgZBMVdDe&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999679&time=1638025465&app_version=2.0.2&sign=888a5e394d829193d6a964e7b1e300e5",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946l98NVsmyVJ2Ck6glKzavNyb8EMlgYnm6k&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001985&time=1638025439&app_version=2.0.2&sign=3799981f26ffb314e0df2394be972dd0",
"https://focus.youth.cn/article/s?signature=6K3Zgj0LVrQbJw94VZbzwlHbymBLUox9GLw4mxB5qW8oDnvelE&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001202&time=1638025415&app_version=2.0.2&sign=6f6f588d0ba3bd09dd4556a034cbc311",
"https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4Q8ylGkFPWoOVcxdGeQB1koMEv6nydKPZLD&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41002303&time=1638025391&app_version=2.0.2&sign=bace723974c3d8cc1a1540a06411dd72",
"https://focus.youth.cn/article/s?signature=ZLAxJmwrdW82D634Z3d5kQcoYdvKFvZGXNR7N9B05XEbOlQGnj&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40998694&time=1638025363&app_version=2.0.2&sign=a75596a9a9c47f2551dc1a76f5ce029e",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vz6KVzUV0NDOiMdoqrK48B9yl0Z2eRAmzr&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40998814&time=1638025338&app_version=2.0.2&sign=85543a24910979718f3b9796cd0fbf4d",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4vz6KV5cV0NDOiMdoqXd48B9yl0Z2eRAmzr&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40998839&time=1638025312&app_version=2.0.2&sign=5e0172a1c7dc7ba44eee0b19d5915681",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LK8XnzhNy2wju8kBNRg4EMLO9lwG2zQJeB&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999635&time=1638025287&app_version=2.0.2&sign=efc86792977494794bf04151b9380059",
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LK8XjVCNy2wju8kBNWp4EMLO9lwG2zQJeB&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=40999012&time=1638025267&app_version=2.0.2&sign=940ddf6f94c9478d4e8a0776009deabd",
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4k0qkw9SqXWJpFjoeVNV78M9zV2YP3KBGAe&uid=54264027&phone_code=8ab98a23e095c113ac962a446dd391d7&scid=41001974&time=1638025239&app_version=2.0.2&sign=3515e7e36e2f8b107f72ed35dfd08510",

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
