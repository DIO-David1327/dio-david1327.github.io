var data_month = ([
    ['2024/07', 10, 3.79],
    ['2024/08', 10, 8.79],
    ['2024/09', 10, 10.79],
    ['2024/10', 10, 5.79],
    ['2024/11', 10, 38.58],
    ['2024/12', 10, 37.75],
    ['2025/01', 10, 24.86],
    ['2025/02', 10, 27.38],
    ['2025/03', 10, 15.79],
    ['2025/04', 10, 25.38],
    ['2025/05', 10, 25.38],
    ['2025/06', 10, 23.16],
]);

var date = '09/07/2025';

var detailData = {
    '2020/01': [
        { 'dat': '2020-01-28', 'inc': 9.36, 'who': 'Christiane G', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2020/02': [
        { 'dat': '2020-02-11', 'inc': 9.36, 'who': 'Christiane G', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2020/03': [
        { 'dat': '2020-03-01', 'inc': 4.5, 'who': 'Kornelia M', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-03-14', 'inc': 9.36, 'who': 'etienne1306', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-03-15', 'inc': 5.5, 'who': 'Max P', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-03-16', 'inc': 9.36, 'who': 'Doris H', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-03-19', 'inc': 5.04, 'who': 'Annette H', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-03-19', 'inc': 9.36, 'who': 'Christiane g', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-03-24', 'inc': 9.16, 'who': 'Ines L', 'pays': ['CH', 'Suisse', 'Swiss'] },
        { 'dat': '2020-03-24', 'inc': 9.36, 'who': 'Andreas A', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2020/04': [
        { 'dat': '2020-04-12', 'inc': 4.5, 'who': 'Kallerberg', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-04-30', 'inc': 4.5, 'who': 'Antonio-Acuña B', 'pays': ['ES', 'Espagne', 'Spain'] },
    ], '2020/05': [
        { 'dat': '2020-05-15', 'inc': 9.36, 'who': 'Andreas S', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-05-27', 'inc': 19.07, 'who': 'kanokwan s', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2020/06': [
        { 'dat': '2020-06-10', 'inc': 4.5, 'who': 'Swen A', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2020/07': [
        { 'dat': '2020-07-06', 'inc': 4.5, 'who': 'Raul-Garcia C', 'pays': ['ES', 'Espagne', 'Spain'] },
        { 'dat': '2020-07-17', 'inc': 47.2, 'who': 'Nepomuk P', 'pays': ['CH', 'Suisse', 'Swiss'] },
    ], '2020/08': [
    ], '2020/09': [
        { 'dat': '2020-09-07', 'inc': 9.36, 'who': 'Christian P', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-09-07', 'inc': 9.36, 'who': 'Christiane G', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2020/10': [
        { 'dat': '2020-10-02', 'inc': 9.16, 'who': 'Ines L', 'pays': ['CH', 'Suisse', 'Swiss'] },
        { 'dat': '2020-10-24', 'inc': 9.16, 'who': 'Eric A', 'pays': ['TG', 'Togo', 'Togo'] },
    ], '2020/11': [
        { 'dat': '2020-11-17', 'inc': 2.08, 'who': 'Martin G', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-11-25', 'inc': 1.59, 'who': 'Marie-Laure D', 'pays': ['FR', 'France', 'France'] },
    ], '2020/12': [
        { 'dat': '2020-12-01', 'inc': 5.04, 'who': 'Susi K', 'pays': ['EE', 'Estonie', 'Estonia'] },
        { 'dat': '2020-12-01', 'inc': 9.36, 'who': 'Ulla R', 'pays': ['SE', 'Suède', 'Sweden'] },
        { 'dat': '2020-12-02', 'inc': 19.07, 'who': 'Christiane G', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2020-12-24', 'inc': 4.5, 'who': 'Mateusz O', 'pays': ['PL', 'Pologne', 'Poland'] },
    ], '2021/01': [
        { 'dat': '2021-01-21', 'inc': 9.36, 'who': 'Jean-Paul B', 'pays': ['FR', 'France', 'France'] },
    ], '2021/02': [
        { 'dat': '2021-02-04', 'inc': 19.07, 'who': 'Artur Z', 'pays': ['PL', 'Pologne', 'Poland'] },
    ], '2021/03': [
        { 'dat': '2021-03-06', 'inc': 4.4, 'who': 'Therese S', 'pays': ['CZ', 'Tchéquie', 'Czechia'] },
        { 'dat': '2021-03-18', 'inc': 9.16, 'who': 'elifoxo', 'pays': ['AU', 'Australie', 'Australia'] },
        { 'dat': '2021-03-22', 'inc': 19.07, 'who': 'Sven K', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2021-03-28', 'inc': 9.36, 'who': 'Uwe J', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2021-03-31', 'inc': 9.16, 'who': 'elifoxo', 'pays': ['AU', 'Australie', 'Australia'] },
    ], '2021/04': [
    ], '2021/05': [
        { 'dat': '2021-05-03', 'inc': 19.07, 'who': 'Elwira G', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2021/06': [
        { 'dat': '2021-06-28', 'inc': 4.5, 'who': 'Thomas C', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2021/07': [
    ], '2021/08': [
        { 'dat': '2021-08-19', 'inc': 4.5, 'who': 'Denai', 'pays': ['AT', 'Autriche', 'Austria'] },
        { 'dat': '2021-08-20', 'inc': 9.36, 'who': 'Herbert L', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2021-08-20', 'inc': 9.16, 'who': 'elifoxo', 'pays': ['AU', 'Australie', 'Australia'] },
    ], '2021/09': [
    ], '2021/10': [
        { 'dat': '2021-10-18', 'inc': 4.5, 'who': 'Petr M', 'pays': ['CZ', 'Tchéquie', 'Czechia'] },
        { 'dat': '2021-10-31', 'inc': 4.5, 'who': 'Detlef Z', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2021/11': [
        { 'dat': '2021-11-02', 'inc': 4.5, 'who': 'Societatea-d-S B', 'pays': ['RO', 'Roumanie', 'Romania'] },
        { 'dat': '2021-11-03', 'inc': 14.21, 'who': 'Attila', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2021-11-05', 'inc': 0.38, 'who': 'Francesco L', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2021-11-05', 'inc': 28.78, 'who': 'glaglatoulle', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2021-11-05', 'inc': 4.5, 'who': 'Comte M', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2021-11-13', 'inc': 4.5, 'who': 'Sven O', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2021-11-27', 'inc': 9.36, 'who': 'Ocaso', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2021-11-30', 'inc': 0.62, 'who': 'Gyorgy C', 'pays': ['NL', 'Pays-Bas', 'Netherlands'] },
    ], '2021/12': [
        { 'dat': '2021-12-29', 'inc': 9.36, 'who': 'SABINE B', 'pays': ['FR', 'France', 'France'] },
    ], '2022/01': [
        { 'dat': '2022-01-05', 'inc': 4.5, 'who': 'Diana S', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2022-01-11', 'inc': 11.3, 'who': 'Ulla R', 'pays': ['SE', 'Suède', 'Sweden'] },
    ], '2022/02': [
        { 'dat': '2022-02-22', 'inc': 4.5, 'who': 'José-Miguel A', 'pays': ['ES', 'Espagne', 'Spain'] },
        { 'dat': '2022-02-28', 'inc': 9.36, 'who': 'benoit A', 'pays': ['FR', 'France', 'France'] },
    ], '2022/03': [
    ], '2022/04': [
    ], '2022/05': [
        { 'dat': '2022-05-06', 'inc': 9.36, 'who': 'filippo v', 'pays': ['IT', 'Italie', 'Italy'] },
    ], '2022/06': [
        { 'dat': '2022-06-01', 'inc': 9.36, 'who': 'Gabory A', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2022-06-01', 'inc': 4.5, 'who': 'Dorthe D', 'pays': ['NL', 'Pays-Bas', 'Netherlands'] },
        { 'dat': '2022-06-21', 'inc': 0.62, 'who': 'Gyorgy C', 'pays': ['NL', 'Pays-Bas', 'Netherlands'] },
        { 'dat': '2022-06-29', 'inc': 4.5, 'who': 'Dylan D', 'pays': ['FR', 'France', 'France'] },
    ], '2022/07': [
        { 'dat': '2022-07-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2022-07-14', 'inc': 1, 'who': 'Gyorgy C', 'pays': ['NL', 'Pays-Bas', 'Netherlands'] },
        { 'dat': '2022-07-16', 'inc': 1, 'who': 'Eduard B', 'pays': ['TR', 'Turquie', 'Turkey'] },
        { 'dat': '2022-07-27', 'inc': 5, 'who': 'Arphox', 'pays': ['HU', 'Hongrie', 'Hungary'] },
    ], '2022/08': [
        { 'dat': '2022-08-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
    ], '2022/09': [
        { 'dat': '2022-09-12', 'inc': 5, 'who': 'Laurent R', 'pays': ['FR', 'France', 'France'] },
    ], '2022/10': [
        { 'dat': '2022-10-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2022-10-23', 'inc': 14.02, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2022/11': [
        { 'dat': '2022-11-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
    ], '2022/12': [
        { 'dat': '2022-12-03', 'inc': 5, 'who': 'Kornelia M', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2022-12-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2022-12-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/01': [
        { 'dat': '2023-01-02', 'inc': 4.5, 'who': 'etienne1306', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2023-01-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-01-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/02': [
        { 'dat': '2023-02-01', 'inc': 4.5, 'who': 'florian p', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2023-02-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-02-05', 'inc': 47.2, 'who': 'Ines L', 'pays': ['CH', 'Suisse', 'Swiss'] },
        { 'dat': '2023-02-15', 'inc': 4.5, 'who': 'Ulrich S', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2023-02-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/03': [
        { 'dat': '2023-03-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-03-14', 'inc': 10, 'who': 'Arkadiusz W', 'pays': ['PL', 'Pologne', 'Poland'] },
        { 'dat': '2023-03-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/04': [
        { 'dat': '2023-04-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-04-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/05': [
        { 'dat': '2023-05-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-05-10', 'inc': 19.07, 'who': 'Uwe S', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2023-05-16', 'inc': 10, 'who': 'Heinz E', 'pays': ['AT', 'Autriche', 'Austria'] },
        { 'dat': '2023-05-16', 'inc': 1, 'who': 'laurent k', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2023-05-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2023-05-21', 'inc': 29.38, 'who': 'Ines L', 'pays': ['CH', 'Suisse', 'Swiss'] },
    ], '2023/06': [
        { 'dat': '2023-06-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-06-14', 'inc': 10, 'who': 'Heinz E', 'pays': ['AT', 'Autriche', 'Austria'] },
        { 'dat': '2023-06-15', 'inc': 1.59, 'who': 'Ute N', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2023-06-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/07': [
        { 'dat': '2023-07-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-07-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/08': [
        { 'dat': '2023-08-03', 'inc': 29.6, 'who': 'Nigel T', 'pays': ['', ' ', ''] },
        { 'dat': '2023-08-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-08-13', 'inc': 1, 'who': 'Puiu D', 'pays': ['', ' ', ''] },
        { 'dat': '2023-08-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/09': [
        { 'dat': '2023-09-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-09-08', 'inc': 5.04, 'who': 'Matthias H', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2023-09-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/10': [
        { 'dat': '2023-10-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-10-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2023-10-30', 'inc': 4.5, 'who': 'Yvonne H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2023/11': [
        { 'dat': '2023-11-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-11-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2023/12': [
        { 'dat': '2023-12-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2023-12-10', 'inc': 14.21, 'who': 'Walther M', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2023-12-11', 'inc': 6.45, 'who': 'thomas c', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2023-12-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2023-12-30', 'inc': 0.62, 'who': 'Eduard B', 'pays': ['TR', 'Turquie', 'Turkey'] },
    ], '2024/01': [
        { 'dat': '2024-01-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-01-06', 'inc': 28.78, 'who': 'ARTUR Z', 'pays': ['PL', 'Pologne', 'Poland'] },
        { 'dat': '2024-01-15', 'inc': 19.07, 'who': 'lydie c', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2024-01-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2024/02': [
        { 'dat': '2024-02-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-02-11', 'inc': 5, 'who': 'etienne1306', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2024-02-16', 'inc': 5, 'who': 'thomas s', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2024-02-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2024/03': [
        { 'dat': '2024-03-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-03-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2024/04': [
        { 'dat': '2024-04-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-04-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2024-04-22', 'inc': 25, 'who': 'Jean W', 'pays': ['NL', 'Pays-Bas', 'Netherlands'] },
    ], '2024/05': [
        { 'dat': '2024-05-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-05-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2024/06': [
        { 'dat': '2024-06-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-06-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2024/07': [
        { 'dat': '2024-07-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-07-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
    ], '2024/08': [
        { 'dat': '2024-08-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-08-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2024-08-23', 'inc': 5, 'who': 'Markus F', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2024/09': [
        { 'dat': '2024-09-01', 'inc': 5, 'who': 'etienne1306', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2024-09-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-09-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2024-09-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2024/10': [
        { 'dat': '2024-10-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-10-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2024-10-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2024/11': [
        { 'dat': '2024-11-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-11-07', 'inc': 9.36, 'who': 'Christiane G', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2024-11-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2024-11-24', 'inc': 23.43, 'who': 'Kathleen J', 'pays': ['US', 'États-Unis', 'United States'] },
        { 'dat': '2024-11-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2024/12': [
        { 'dat': '2024-12-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2024-12-13', 'inc': 9.36, 'who': 'lydie c', 'pays': ['FR', 'France', 'France'] },
        { 'dat': '2024-12-14', 'inc': 19.07, 'who': 'Werner S', 'pays': ['', ' ', ''] },
        { 'dat': '2024-12-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2024-12-21', 'inc': 3.53, 'who': 'helder m', 'pays': ['', ' ', ''] },
        { 'dat': '2024-12-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2025/01': [
        { 'dat': '2025-01-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2025-01-05', 'inc': 19.07, 'who': 'Walther M', 'pays': ['DE', 'Allemagne', 'Germany'] },
        { 'dat': '2025-01-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2025-01-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2025/02': [
        { 'dat': '2025-02-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2025-02-09', 'inc': 2, 'who': 'helder m', 'pays': ['', ' ', ''] },
        { 'dat': '2025-02-16', 'inc': 19.59, 'who': 'Sidney A', 'pays': ['', ' ', ''] },
        { 'dat': '2025-02-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2025-02-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2025/03': [
        { 'dat': '2025-03-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2025-03-11', 'inc': 10, 'who': 'Martina V', 'pays': ['', ' ', ''] },
        { 'dat': '2025-03-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2025-03-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2025/04': [
        { 'dat': '2025-04-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2025-04-16', 'inc': 19.59, 'who': 'Sidney A', 'pays': ['', ' ', ''] },
        { 'dat': '2025-04-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2025-04-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2025/05': [
        { 'dat': '2025-05-04', 'inc': 2.22, 'who': 'adriano g', 'pays': ['IT', 'Italie', 'Italy'] },
        { 'dat': '2025-05-16', 'inc': 19.59, 'who': 'Sidney A', 'pays': ['', ' ', ''] },
        { 'dat': '2025-05-24', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2025-05-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ], '2025/06': [
        { 'dat': '2025-06-16', 'inc': 19.59, 'who': 'Sidney A', 'pays': ['', ' ', ''] },
        { 'dat': '2025-06-19', 'inc': 1.57, 'who': 'Davryll', 'pays': ['GB', 'Royaume-Uni', 'United Kingdom'] },
        { 'dat': '2025-06-28', 'inc': 2, 'who': 'Andreas H', 'pays': ['DE', 'Allemagne', 'Germany'] },
    ],
};