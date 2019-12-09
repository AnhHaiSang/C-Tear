var productsData = [
    {
        id: 1, name: "Rượu Vang 50 Anniversario",
        img: '../Product/product1.jpg',
        price: 165,
        soluong: 1,
        inventory: 69,
        review: 4,
        description: "",
        CategorieId: 1
    },
    {
        id: 2,
        name: "RƯỢU VANG 60 SESSANTANNI LIMITED EDITION",
        img: '../Product/product2.jpg',
        price: 165,
        inventory: 34,
        review: 4,
        description: "",
        soluong: 1,
        CategorieId: 1
    },
    {
        id: 3,
        name: "RƯỢU VANG 62 ANNIVERSARIO",
        img: '../Product/product3.jpg',
        price: 165,
        inventory: 51,
        review: 4,
        description: "",
        CategorieId: 1
    },
    { id: 4, name: "RƯỢU VANG ANIMA DI NEGROAMARO", img: '../Product/product4.jpg', price: 185, inventory: 50, review: 4, description: "", CategorieId: 1 },
    { id: 5, name: "RƯỢU VANG F LIMITED", img: '../Product/product5.jpg', price: 300, inventory: 45, review: 4, description: "", CategorieId: 1 },
    { id: 6, name: "RƯỢU VANG F NEGROAMARO SAN MARZANO", img: '../Product/product6.jpg', price: 450, inventory: 15, review: 4, description: "", CategorieId: 1 },
    { id: 7, name: "RƯỢU VANG M LIMITED EDITION MERLOT SALENTO", img: '../Product/product7.jpg', price: 500, inventory: 23, review: 4, description: "", CategorieId: 1 },
    { id: 8, name: "RƯỢU VANG M MALVASIA NERA", img: '../Product/product8.jpg', price: 500, inventory: 24, review: 4, description: "", CategorieId: 1 },
    { id: 9, name: "RƯỢU VANG TALO NEGROAMARO", img: '../Product/product9.jpg', price: 750, inventory: 14, review: 4, description: "", CategorieId: 1 },
    { id: 10, name: "RƯỢU VANG IL PUMO NEGROAMARO 100 YEARS", img: '../Product/product10.jpg', price: 909, inventory: 10, review: 4, description: "", CategorieId: 1 },

    // { id: 11, name: "VANG TRẮNG MỸ SUTTER HOME SAUVIGNON BLANC ", img: '../Product/product11.jpg', price: 300, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 12, name: "RƯỢU VANG PHÁP DOMAINE FAIVELEY MEURSAULT", img: '../Product/product12.jpg', price: 500, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 13, name: "RƯỢU VANG DOMAINE FAIVELEY CORTON-CHARLEMAGNE GRAND CRU", img: '../Product/product13.jpg', price: 550, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 14, name: "RƯỢU VANG PHÁP DOMAINE FAIVELEY BOURGOGNE", img: '../Product/product14.jpg', price: 560, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 15, name: "RƯỢU VANG TRẮNG PHÁP YVON MAU COLOMBARD", img: '../Product/product15.jpg', price: 600, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 16, name: "RƯỢU VANG PAULLORRY CHARDONNAY", img: '../Product/product16.jpg', price: 620, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 17, name: "RƯỢU VANG CASAS DEL TOQUI SINGLE ESTATE SAUVIGNON BLANC", img: '../Product/product17.jpg', price: 700, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 18, name: "RƯỢU VANG CASAS DEL TOQUI RESERVA CHARDONNAY", img: '../Product/product18.jpg', price: 800, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 19, name: "RƯỢU VANG TRẮNG CHILE OCHAGAVIA SILVESTRE SAUVIGNON BLANC", img: '../Product/product19.jpg', price: 920, inventory: 10, review: 4, description: "", CategorieId: 2 },
    // { id: 20, name: "RƯỢU VANG MUSSEL BAY SAUVIGNON BLANC MARLBOROUGH", img: '../Product/product20.jpg', price: 909, inventory: 10, review: 4, description: "", CategorieId: 2 },

    // { id: 21, name: "RƯỢU CHAMPAGNE BRUNO PAOLLARD “PREMIERE CUVEE”", img: '../Product/product21.jpg', price: 200, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 22, name: "RƯỢU CHAMPAGNE BRUNO PAOLLARD “RESERVE PRIVEE”", img: '../Product/product22.jpg', price: 210, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 23, name: "RƯỢU CHAMPAGNE BRUT ASSEMBLAGE", img: '../Product/product23.jpg', price: 250, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 24, name: "RƯỢU CHAMPAGNE BRUNO PAILLARD BRUT “BLANC DE BLANC”", img: '../Product/product24.jpg', price: 250, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 25, name: "RƯỢU CHAMPAGNE MOET & CHANDON – ICE IMPERIAL", img: '../Product/product25.jpg', price: 500, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 26, name: "RƯỢU CHAMPAGNE TRIBAUT SCHLOESSER BRUT CUVVE RENE", img: '../Product/product26.jpg', price: 800, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 27, name: "RƯỢU CHAMPAGNE TRIBAUT SCHLOESSER BRUT L’AUTHENTIQUE", img: '../Product/product27.jpg', price: 800, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 28, name: "RƯỢU CHAMPAGNE TRIBAUT SCHLOESSER BRUT ORIGINE", img: '../Product/product28.jpeg', price: 900, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 29, name: "RƯỢU CHAMPAGNE GOSSET BRUT EXCELLENCE", img: '../Product/product29.jpg', price: 909, inventory: 10, review: 4, description: "", CategorieId: 3 },
    // { id: 30, name: "RƯỢU CHAMPAGNE DOM PERIGNON ROSE", img: '../Product/product30.jpg', price: 909, inventory: 10, review: 4, description: "", CategorieId: 3 }
];

const productsReducer = (state = productsData, action) => {
    switch (action.type) {

        default: return [...state]
    }
}

export default productsReducer;

