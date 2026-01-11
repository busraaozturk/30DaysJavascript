const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

    // 1- inventors listesini 1500'lü yıllarda doğanlarla filtreleyin 
    const list = inventors.filter(inv => (inv.year >= 1500 && inv.year < 1600)); 
    console.table(list);

    // 2 - inventors listesinde isim-soyisim listesi oluşturmak 
    const fullname = inventors.map(inventor => 
        `${inventor.first} ${inventor.last}`); 
    console.log("FullName : " + fullname);

    // 3 - Doğum tarihlerine göre en yaşlıdan en gence doğru sıralama 
    const ordered = inventors.sort(function(a,b) { 
        if(a.year > b.year) { 
            return 1; 
        } else { 
            return -1; 
        } 
    }); 
    console.table(ordered);

    // 4 - tüm hepsi toplam kaç yıl yaşadılar 
    const totalage = inventors.reduce((total, inventor) => { 
        return total + (inventor.passed - inventor.year); 
    }); 
    console.log(totalage);

    // 5 - En uzun yaşayanlar 
    const oldset = inventors.sort(function(a,b) {
         const lastinventor = a.passed - a.year; 
         const nextInventor = b.passed - b.year; 
         return lastinventor > nextInventor ? -1 : 1; }); 
    console.table(oldset);

    // 6 - Kişileri soyadlarına göre alfabetik olarak sırala
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);

    // 7 - Aşağıdakilerden her birinin sayısını topla
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
    const transportation = data.reduce(function (obj, item) {
        if (!obj[item]) {
            obj[item] = 0;
        }

        obj[item]++;
        return obj;
    }, {});
    console.log(transportation);