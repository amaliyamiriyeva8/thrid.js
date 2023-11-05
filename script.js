const yol=function(mesafe,zaman){
    let suret=mesafe/zaman;
    let yanacaqserfiyyati;

    if(suret>=0 && suret<=60){
        yanacaqserfiyyati=6;
    }
    else if(suret>=60 && suret<=90){
        yanacaqserfiyyati=9;
    }
    else if(suret>90 && suret<=120){
        yanacaqserfiyyati=8;
    }
    else yanacaqserfiyyati=10;

    let yanacaqmiqdari=(mesafe/100)*yanacaqserfiyyati;

    return `${mesafe} yolu ${zaman} saat muddetinde getmek ucun,sizin ortalama suretiniz ${suret}km/saat olmalidir.
    Size lazim olacaq yanacaq miqdari ${yanacaqmiqdari} litr,ortalama yanacaq serfiyyati ise ${yanacaqserfiyyati} l/100 km olacaq.`

}
console.log(yol(150,2))