//components and  JSX
////////////////////JSX: javascript xml anlamına gelir, js içinde html yazmayı kolaylaştıran bir syntax türüdür.
//tıpkı html e yazar gibi yazılır, jsx onu doma çevirir
//js teki kurallar geçerlidir, camel case gibi kurallar vardır
//tüm taglar (br, hr de dahil) mutlaka kapatılmalıdır
//style verirken iki tane { kullanılır
// comment için // ve /**/ kullanabiliriz

//////////////Component: Componentler, uygulamanızı tekrar kullanılabilir parçalara ayırmanıza ve her bir parçayı ayrı ayrı düşünmenize izin verir. Bu bir buton, bir form, bir diyalog, bir ekran vb. gibi olabilir. 2 tür component vardır. Bunlar fonksiyon component ve class componenttır.
//component isimleri baş harfi büyük başlar

///////////////////////////Class Components 
//this keyword ü kullanılması gerekir
//class değil className adı ile kullanılır
//this kullanmak zorundayız
/* syntax: class welcome extends React.Component {
    render() {
    returnreturn <h1> Hello Ed! </h1>;
    }
} */
//welcome isimli bir class oluşturup react.component diyoruz

/////////////////////////Functional component
//Daha çok bu kullanılır, class comp. ten hızlıdır

/*function Welcome (){
    return <h1> Hello, Diaanna!</h1>
} */

///////////////////Props
//Bir gönderilme şeklidir, componentler arası veri alışverişi sağlar.
//appten yollanır, parent (app.js) dan

/////////////////State
//sadece component i ilgilendirir
//state içeriden yollanır, tanımlanır
