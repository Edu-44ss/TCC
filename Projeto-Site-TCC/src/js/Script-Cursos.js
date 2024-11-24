/*Categoria 1 - Cursos */

document.getElementById('Pro').addEventListener('click', function() {
    var Pyt = document.getElementById('Pyt');
    var Cmm = document.getElementById('Cmm');
    var Rub = document.getElementById('Rub');
    var Sql = document.getElementById('Sql');

    // Verifica qual elemento está atualmente visível e alterna
    if (Pyt.style.display === 'block') {
        Pyt.style.display = 'none';
        Cmm.style.display = 'block'; // Mostra Cmm
    } else if (Cmm.style.display === 'block') {
        Cmm.style.display = 'none';
        Rub.style.display = 'block'; // Mostra Rub
    } else if (Rub.style.display === 'block') {
        Rub.style.display = 'none';
        Sql.style.display = 'block'; // Mostra Sql
    } else {
        Pyt.style.display = 'block'; // Mostra Pyt
        Cmm.style.display = 'none';
        Rub.style.display = 'none';
        Sql.style.display = 'none';
    }

    // Esconder Bi e Be ao alternar
    var Bp = document.getElementById('Bp');
    var Be = document.getElementById('Bc');
    Bp.style.display = 'none'; // Esconde Bi
    Bc.style.display = 'none'; // Esconde Be

      // Esconder Bi e Be ao alternar
    var Br = document.getElementById('Br');
    var Bs = document.getElementById('Bs');
    Br.style.display = 'none'; 
    Bs.style.display = 'none'; // Esconde Be
});



/*Categoria  - Botões de Download */

document.getElementById('Pyt').addEventListener('click', function() {
    var Bp = document.getElementById('Bp');
    if (Bp.style.display === 'none') {
        Bp.style.display = 'block';
    } else {
        Bp.style.display = 'none'; 
    }
});

document.getElementById('Cmm').addEventListener('click', function() {
    var Bc = document.getElementById('Bc');
    if (Bc.style.display === 'none') {
        Bc.style.display = 'block';
    } else {
        Bc.style.display = 'none'; 
    }
});

document.getElementById('Rub').addEventListener('click', function() {
    var Br = document.getElementById('Br');
    if (Br.style.display === 'none') {
        Br.style.display = 'block';
    } else {
        Br.style.display = 'none'; 
    }
});

document.getElementById('Sql').addEventListener('click', function() {
    var Bs = document.getElementById('Bs');
    if (Bs.style.display === 'none') {
        Bs.style.display = 'block';
    } else {
        Bs.style.display = 'none'; 
    }
});