function codigoProducto() {
    const monitor = document.getElementById('monitor').value;
    const color = document.getElementById('color').value;
    const base = document.getElementById('bases').value;
    const frontal = document.getElementById('frontal').value;
    const fondo = document.getElementById('fondo').value;

    let cod = "330" + monitor + color + base + frontal + fondo;

    let ficha = `<h3>Codigo Producto:</h3>`;
    ficha += `<p>${cod}</p>`;

    document.getElementById('codigo').innerHTML = ficha;

    return cod;
}

//Funcion para el manejo de imagenes necesarias

function caracteristicas_embellecedor(doc, monitor, base, fondo) {
    var A;
    var B;

    var imgPlano;
    const img = new Image()

    var imgBase;
    const imgbase = new Image()


    switch (fondo) {
        case "S":
            A = {
                "01": '800',
                "02": '900',
                "03": '1050',
                "04": '1200',
                "05": '1300',
            }[monitor] || "No seleccionando";

            B = '400';
            break; // Add break to prevent fall-through

        case "D":
            A = {
                "01": '800',
                "02": '900',
                "03": '1050',
                "04": '1200',
                "05": '1300',
            }[monitor] || "No seleccionando";
            B = '400';
            break; // Add break to prevent fall-through

        case "T":
            A = {
                "01": '800',
                "02": '900',
                "03": '1050',
                "04": '1200',
                "05": '1300',
            }[monitor] || "No seleccionando";
            B = '500';
            break; // Add break to prevent fall-through
    }

    const encabezados = [
        [{ content: 'Dimensiones(mm)', colSpan: 2 }],
        ["A", "B"]
    ];

    const datos = [
        [A, B]
    ];

    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 220,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 2,
            textColor: [0, 0, 0],
            fillColor: [255, 255, 255],
            lineColor: [44, 62, 80],
            lineWidth: 0.5
        },
        headStyles: {
            fillColor: [227, 227, 227],
            textColor: [0, 0, 0],
            fontSize: 12,
            halign: 'center'

        },
        columnStyles: {
            0: { cellWidth: 30 }, // Primera columna más ancha
            1: { cellWidth: 30 },

        }
    });


    doc.text('BASE', 105, 210, { align: 'center' });

    imgBase = 'imagenes/baseEmbellecedor.png';
    imgbase.src = imgBase;
    doc.addImage(imgbase, 'PNG', 100, 213, 100, 60);
}

function caracteristicas_radios(doc, monitor, base, fondo) {

    var A;
    var B;

    var imgBase;
    const imgbase = new Image()

    switch (fondo) {
        case "S":
            A = {
                "01": '700',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";

            B = '400'

            break; // Add break to prevent fall-through

        case "D", "T":
            A = {
                "01": '700',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";

            B = '500';
            break; // Add break to prevent fall-through
    }

    const encabezados = [
        [{ content: 'Dimensiones(mm)', colSpan: 2 }],
        ["A", "B"]
    ];

    const datos = [
        [A, B]
    ];


    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 220,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 2,
            textColor: [0, 0, 0],
            fillColor: [255, 255, 255],
            lineColor: [44, 62, 80],
            lineWidth: 0.5
        },
        headStyles: {
            fillColor: [227, 227, 227],
            textColor: [0, 0, 0],
            fontSize: 12,
            halign: 'center'

        },
        columnStyles: {
            0: { cellWidth: 30 }, // Primera columna más ancha
            1: { cellWidth: 30 },

        }
    });

    doc.text('BASE', 105, 210, { align: 'center' });

    imgBase = 'imagenes/baseRadios.png';
    imgbase.src = imgBase;
    doc.addImage(imgbase, 'PNG', 100, 213, 100, 60);

}

function caracteristicas_plana(doc, monitor, base, fondo) {
    var A;
    var B;

    var imgBase;
    const imgbase = new Image()

    switch (fondo) {
        case "S":
            A = {
                "01": '700',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";


            B = '380';

            break; // Add break to prevent fall-through

        case "D":

            A = {
                "01": '700',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";

            B = '400';
            break; // Add break to prevent fall-through

        case "T":
            A = {
                "01": '700',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";

            B = '480';
            break; // Add break to prevent fall-through
    }

    const encabezados = [
        [{ content: 'Dimensiones(mm)', colSpan: 2 }],
        ["A", "B"]
    ];


    const datos = [
        [A, B]
    ];

    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 220,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 2,
            textColor: [0, 0, 0],
            fillColor: [255, 255, 255],
            lineColor: [44, 62, 80],
            lineWidth: 0.5
        },
        headStyles: {
            fillColor: [227, 227, 227],
            textColor: [0, 0, 0],
            fontSize: 12,
            halign: 'center'

        },
        columnStyles: {
            0: { cellWidth: 30 }, // Primera columna más ancha
            1: { cellWidth: 30 },

        }
    });

    doc.text('BASE', 105, 210, { align: 'center' });

    imgBase = 'imagenes/basePlana.png';
    imgbase.src = imgBase;
    doc.addImage(imgbase, 'PNG', 100, 213, 100, 60);

}

function caracteristicas_inclinada(doc, monitor, base, fondo) {
    var A;
    var B;

    var imgBase;
    const imgbase = new Image()

    switch (fondo) {
        case "S":
            A = {
                "01": '720',
                "02": '800',
                "03": '950',
                "04": '-',
                "05": '-',
            }[monitor] || "No seleccionando";


            B = '500';

            break; // Add break to prevent fall-through

        case "D":

            A = {
                "01": '720',
                "02": '800',
                "03": '950',
                "04": '-',
                "05": '-',
            }[monitor] || "No seleccionando";


            B = '500';
            break; // Add break to prevent fall-through

        case "T":
            A = 'No se aplica a fondo triple'

            B = 'No se applica a fondo triple';
            break; // Add break to prevent fall-through
    }

    const encabezados = [
        [{ content: 'Dimensiones(mm)', colSpan: 2 }],
        ["A", "B"]
    ];


    const datos = [
        [A, B]
    ];

    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 220,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 2,
            textColor: [0, 0, 0],
            fillColor: [255, 255, 255],
            lineColor: [44, 62, 80],
            lineWidth: 0.5
        },
        headStyles: {
            fillColor: [227, 227, 227],
            textColor: [0, 0, 0],
            fontSize: 12,
            halign: 'center'

        },
        columnStyles: {
            0: { cellWidth: 30 }, // Primera columna más ancha
            1: { cellWidth: 30 },

        }
    });

    doc.text('BASE', 105, 210, { align: 'center' });

    imgBase = 'imagenes/baseInclinada.png';
    imgbase.src = imgBase;
    doc.addImage(imgbase, 'PNG', 100, 213, 100, 60);

}

function determinar_tipo_base(doc, monitor, base, fondo) {

    switch (base) {
        case "E":
            caracteristicas_embellecedor(doc, monitor, base, fondo);
            break;
        case "R":
            caracteristicas_radios(doc, monitor, base, fondo);
            break;
        case "P":
            caracteristicas_plana(doc, monitor, base, fondo);
            break;
        case "I":
            caracteristicas_inclinada(doc, monitor, base, fondo);
            break;
    }

}

function fondoSimple(doc, monitor, ) {

    var imgPlano;
    const img = new Image()

    var dimensiones;
    var Fondo_util = '58';
    var vesa = 'MIS-F';
    var Mpulgadas;

    switch (monitor) {
        case "01":
            dimensiones = '1800/700/80';
            Mpulgadas = ' 32" - 43" '
            break;
        case "02":
            dimensiones = '2000/800/80';
            Mpulgadas = ' 46" - 55" '
            break;
        case "03":
            dimensiones = '2000/950/80';
            Mpulgadas = ' 60" - 65" '
            break;
        case "04":
            dimensiones = '2100/1100/80';
            Mpulgadas = ' 70" - 75" '
            break;
        case "05":
            dimensiones = '2250/1200/80';
            Mpulgadas = ' 80" - 86" '
            break;

    }


    const encabezados = [
        ["CODIGO", "MONITOR(D)", "FONDO UTIL CHASIS", "VESA", "DIMENSIONES(A/B/C)"]
    ];

    const datos = [
        ["CODIGO", Mpulgadas, Fondo_util, vesa, dimensiones]
    ];


    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 180,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 2,
            textColor: [0, 0, 0],
            fillColor: [255, 255, 255],
            lineColor: [44, 62, 80],
            lineWidth: 0.5,
            halign: 'center'
        },
        headStyles: {
            fillColor: [227, 227, 227],
            textColor: [0, 0, 0],
            fontSize: 12,
            halign: 'center'

        },
        tableWidh: 'auto'
    });

    imgPlano = 'imagenes/fondoSimple.png';
    img.src = imgPlano;
    doc.addImage(img, 'PNG', 10, 45, 190, 120);


}

function fondoDoble(doc, monitor) {

    var imgPlano;
    const img = new Image()

    var dimensiones;
    var Fondo_util = '140';
    var vesa = 'MIS-F';
    var Mpulgadas;

    switch (monitor) {
        case "01":
            dimensiones = '1800/700/165';
            Mpulgadas = ' 32" - 43" '
            break;
        case "02":
            dimensiones = '2000/800/165';
            Mpulgadas = ' 46" - 55" '
            break;
        case "03":
            dimensiones = '2000/950/165';
            Mpulgadas = ' 60" - 65" '
            break;
        case "04":
            dimensiones = '2100/1100/165';
            Mpulgadas = ' 70" - 75" '
            break;
        case "05":
            dimensiones = '2250/1200/165';
            Mpulgadas = ' 80" - 86" '
            break;

    }


    const encabezados = [
        ["CODIGO", "MONITOR(D)", "FONDO UTIL CHASIS", "VESA", "DIMENSIONES(A/B/C)"]
    ];

    const datos = [
        ["CODIGO", Mpulgadas, Fondo_util, vesa, dimensiones]
    ];


    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 180,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 2,
            textColor: [0, 0, 0],
            fillColor: [255, 255, 255],
            lineColor: [44, 62, 80],
            lineWidth: 0.5,
            halign: 'center'
        },
        headStyles: {
            fillColor: [227, 227, 227],
            textColor: [0, 0, 0],
            fontSize: 12,
            halign: 'center'

        },
        tableWidh: 'auto'
    });

    imgPlano = 'imagenes/fondoDoble.png';
    img.src = imgPlano;
    doc.addImage(img, 'PNG', 10, 45, 190, 120);
}


function fondoTriple(doc, monitor) {

    var imgPlano;
    const img = new Image()

    var dimensiones;
    var Fondo_util = '225';
    var vesa = 'MIS-F';
    var Mpulgadas;

    switch (monitor) {
        case "01":
            dimensiones = '1800/700/250';
            Mpulgadas = ' 32" - 43" '
            break;
        case "02":
            dimensiones = '2000/800/250';
            Mpulgadas = ' 46" - 55" '
            break;
        case "03":
            dimensiones = '2000/950/250';
            Mpulgadas = ' 60" - 65" '
            break;
        case "04":
            dimensiones = '2100/1100/250';
            Mpulgadas = ' 70" - 75" '
            break;
        case "05":
            dimensiones = '2250/1200/250';
            Mpulgadas = ' 80" - 86" '
            break;

    }


    const encabezados = [
        ["CODIGO", "MONITOR(D)", "FONDO UTIL CHASIS", "VESA", "DIMENSIONES(A/B/C)"]
    ];

    const datos = [
        ["CODIGO", Mpulgadas, Fondo_util, vesa, dimensiones]
    ];


    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 180,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 2,
            textColor: [0, 0, 0],
            fillColor: [255, 255, 255],
            lineColor: [44, 62, 80],
            lineWidth: 0.5,
            halign: 'center'
        },
        headStyles: {
            fillColor: [227, 227, 227],
            textColor: [0, 0, 0],
            fontSize: 12,
            halign: 'center'

        },
        tableWidh: 'auto'
    });

    imgPlano = 'imagenes/fondoTriple.png';
    img.src = imgPlano;
    doc.addImage(img, 'PNG', 10, 45, 190, 120);
}

function determinar_tipo_fondo(doc, monitor, fondo) {

    switch (fondo) {
        case "S":
            fondoSimple(doc, monitor);
            break
        case "D":
            fondoDoble(doc, monitor);
            break;
        case "T":
            fondoTriple(doc, monitor);
    }
}

function generarPDF() {


    const {
        jsPDF
    } = window.jspdf;
    const doc = new jsPDF();

    const monitor = document.getElementById('monitor').value;
    const color = document.getElementById('color').value;
    const base = document.getElementById('bases').value;
    const frontal = document.getElementById('frontal').value;
    const fondo = document.getElementById('fondo').value;
    const codigo = codigoProducto();
    const tipo = document.getElementById('distribucion').value;

    const im = "imagenes/logo_dark.png";




    const img = new Image();
    img.src = im;


    function crearHeader(doc, pageNumber) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);
        doc.text('Serie 330', 10, 20);

        doc.setFontSize(15)
        doc.setTextColor(90, 163, 205);
        doc.text('BASIC', 10, 25)

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(tipo, 10, 30);
        doc.setFont('helvetica', 'normal');

        doc.addImage(im, 'PNG', 165, 10, 30, 20);

        doc.text(`-${pageNumber}-`, 190, 290);
        doc.setFontSize(7);
        doc.text('ww.steelperformance.es', 10, 288);
        doc.text('info@steelperformance.es', 10, 291);

    }
    // Función para verificar si necesitamos una nueva página
    function verificarNuevaPagina(doc) {
        if (doc.autoTable.previous.finalY >= 270) { // Verifica si el contenido se acerca al final de la página
            doc.addPage();
            crearHeader(doc, doc.internal.getNumberOfPages()); // Añadir el encabezado en la nueva página
        }
    }

    // Función que dibuja el encabezado en todas las páginas
    function repetirHeaderEnTodasLasPaginas(doc) {
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            crearHeader(doc, i);
        }
    }

    function tablaCaracteristicas(monitor, color, base, frontal, fondo) {
        const pulgadas = {
            "01": '32” - 43”',
            "02": '46” - 55”',
            "03": '60” - 65”',
            "04": '70” - 75”',
            "05": '80” - 86”'
        }[monitor] || "No especificado";

        const dimen = {
            "01": '1800/700/80',
            "02": '2000/800/80',
            "03": '2000/950/80',
            "04": '2100/1100/80',
            "05": '2250/1200/80'
        }[monitor] || "No especificado";

        const colores = {
            "A": 'Negro',
            "B": 'Blanco',
            "C": 'Gris',
            "P": "Personalizado"
        }[color] || "No especificado";

        const bases = {
            "E": "Embellecedor",
            "R": 'Radios',
            "P": 'Plana'
        }[base] || "No especificado";

        const frontales = {
            "A": 'Aluminio',
            "C": 'Cristal Extra-claro',
            "E": "Espejo",
            "R": 'Cristal Reflex',
            "M": 'Metacrilato'
        }[frontal] || "No especificado";

        const fondos = {
            "S": 'Fondo Simple',
            "D": 'Fondo Doble',
            "T": 'Fondo Triple'
        }[fondo] || "No especificado";

        const encabezados = [
            ["Caracteristica", "Valor"]
        ];
        const datos = [
            ["Codigo", codigo],
            ["Frontal", frontales],
            ["Monitor", pulgadas],
            ["Color", colores],
            ["Fondo Util del Chais(C)", "58"],
            ["VESA", "MIS-F"],
            ["Tipo de Fondo", fondos],
            ["DIMENSIONES(mm)(A/B/C)", dimen],
        ];

        doc.autoTable({
            head: encabezados,
            body: datos,
            startY: 190,
            theme: 'grid',
            styles: {
                fontSize: 10,
                cellPadding: 3,
                textColor: [0, 0, 0],
                fillColor: [255, 255, 255],
                lineColor: [44, 62, 80],
                lineWidth: 0.5
            },
            headStyles: {
                fillColor: [227, 227, 227],
                textColor: [0, 0, 0],
                fontSize: 12
            }
        });
    }

    function imgTotal(doc, base) {

        var imgPlano;
        const img = new Image()


        switch (base) {
            case "E":
                imgPlano = 'imagenes/330embellecedor.png';
                img.src = imgPlano;
                doc.addImage(img, 'PNG', 80, 70, 70, 100);


                break;
            case "P":
                imgPlano = 'imagenes/330plano.png';
                img.src = imgPlano;
                doc.addImage(img, 'PNG', 80, 70, 70, 100);

                break;
            case "R":
                imgPlano = 'imagenes/330radios.png';
                img.src = imgPlano;
                doc.addImage(img, 'PNG', 80, 70, 70, 100);
                break;
        }


    }




    function pag_caracteristicas_fisicas(doc, monitor, base, fondo) {

        doc.addPage();

        doc.setFontSize(15);

        doc.setFont('helvetica', 'bold');
        doc.line(10, 40, 70, 40);
        doc.line(200, 40, 140, 40);
        doc.text('CARACTERISTICAS FISICAS', 105, 41, {
            align: "center"
        });

        doc.setFont('helvetica', 'normal');

        determinar_tipo_fondo(doc, monitor, fondo);

        determinar_tipo_base(doc, monitor, base, fondo);

    }

    function pag_carac_tecnicas(doc) {

        doc.addPage();

        doc.setFontSize(15);

        doc.setFont('helvetica', 'bold');
        doc.line(10, 40, 70, 40);
        doc.line(200, 40, 140, 40);
        doc.text('CARACTERISTICAS TECNICAS', 105, 41, {
            align: "center"
        });

        doc.setCharSpace(0);
        doc.setFontSize(9);

        doc.text('GARANTÍA, DURABILIDAD Y CONTROL', 10, 180);
        doc.text('PROTECCION PARA INTEMPERIE', 80, 180);
        doc.text('ALIMENTACIÓN Y CONSUMO ELECTRICO', 140, 180);

        doc.text('MATERIALES', 10, 240);
        doc.text('COMPONENTES', 100, 240);

        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');

        doc.text('- Protección eléctrica y electromagnética', 10, 185)
        doc.text('- Protección radiación solar y anti-vandálica', 10, 190)
        doc.text('- Control de temperatura interna (10ºC - 45ºC)', 10, 195)
        doc.text('- Garantia - 3 años', 10, 200);

        //

        doc.text('- Grado de protección IP65', 80, 185)
        doc.text('- Fabricado en materiales anticorrosivos', 80, 190)
        doc.text('- Temperatura exterior desde -20ºC hasta 45ºC ', 80, 195)
        doc.text('- Cierres de seguridad ', 80, 200);

        doc.text('- Protección eléctrica y electromagnética', 140, 185)
        doc.text('- Protección radiación solar y anti-vandálica', 140, 190)
        doc.text('- Control de temperatura interna (10ºC - 45ºC)', 140, 195)


    }

    function pag_cara_monitor() {

        doc.addPage();

        doc.setFontSize(15);

        doc.setFont('helvetica', 'bold');
        doc.line(10, 40, 70, 40);
        doc.line(200, 40, 140, 40);
        doc.text('CARACTERISTICAS TECNICAS', 105, 41, {
            align: "center"
        });

        doc.setFontSize(12)
        doc.setTextColor(90, 163, 205);

        doc.text('PANEL', 30, 60);
        doc.text('CONECTIVIDAD', 30, 110)
        doc.text('STANDARD(CERTIFICACION)', 30, 160)
        doc.text('COMPATIBILIDAD DE SOFTWARE', 30, 220)


    }
    img.onload = function() {

        crearHeader(doc, 1);
        doc.line(10, 40, 70, 40);
        doc.line(200, 40, 140, 40);
        doc.setFontSize(15);

        doc.setFont('helvetica', 'bold');
        doc.text('Ficha del Producto', 105, 41, {
            align: "center"
        });
        doc.setFont('helvetica', 'normal');

        doc.setFontSize(12);
        doc.text('Descripción de las características:', 10, 55);
        imgTotal(doc, base);


        // doc.addImage(im, 'PNG', 10, 80, 180, 100);
        tablaCaracteristicas(monitor, color, base, frontal, fondo);

        pag_caracteristicas_fisicas(doc, monitor, base, fondo);

        pag_carac_tecnicas(doc);
        pag_cara_monitor(doc);

        verificarNuevaPagina(doc);

        // Hacer que el encabezado se repita en todas las páginas
        repetirHeaderEnTodasLasPaginas(doc);

        doc.save('reporte-producto.pdf');


    }
    img.onerror = function() {
        console.error('Error al cargar la imagen');

    };
}