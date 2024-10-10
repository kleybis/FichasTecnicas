function codigoProducto() {
    const monitor = document.getElementById('monitor').value;
    const color = document.getElementById('color').value;
    const base = document.getElementById('bases').value;
    const frontal = document.getElementById('frontal').value;
    const fondo = document.getElementById('fondo').value;

    let cod = "332" + monitor + color + base + frontal + fondo;

    let ficha = `<h3>Codigo Producto:</h3>`;
    ficha += `<p>${cod}</p>`;

    document.getElementById('codigo').innerHTML = ficha;

    return cod;
}

//Funcion para el manejo de imagenes necesarias

function caracteristicas_embellecedor(doc, monitor, base, fondo) {
    var A;
    var B;

    switch (fondo) {
        case "S":
            A = {
                "01": '780',
                "02": '880',
                "03": '1080',
                "04": '1180',
                "05": '1280',
            }[monitor] || "No seleccionando";

            if (A == '780' || A == '880' || A == '1030') {
                B = '400';
            } else {
                B = '500';
            }
            break; // Add break to prevent fall-through

        case "D":
            A = {
                "01": '780',
                "02": '880',
                "03": '1080',
                "04": '1180',
                "05": '1280',
            }[monitor] || "No seleccionando";
            B = '500';
            break; // Add break to prevent fall-through

        case "T":
            A = {
                "01": '780',
                "02": '880',
                "03": '1080',
                "04": '1180',
                "05": '1280',
            }[monitor] || "No seleccionando";
            B = '500';
            break; // Add break to prevent fall-through
    }

    const encabezados = [
        ["A", "B"]
    ];

    const datos = [
        [A, B]
    ];

    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 70,
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

function caracteristicas_radios(doc, monitor, base, fondo) {


    var A;
    var B;

    switch (fondo) {
        case "S":
            A = {
                "01": '540',
                "02": '640',
                "03": '790',
                "04": '940',
                "05": '1040',
            }[monitor] || "No seleccionando";

            B = '380'

            break; // Add break to prevent fall-through

        case "D", "T":
            A = {
                "01": '540',
                "02": '640',
                "03": '790',
                "04": '940',
                "05": '1040',
            }[monitor] || "No seleccionando";

            B = '400';
            break; // Add break to prevent fall-through
    }

    const encabezados = [
        ["A", "B"]
    ];

    const datos = [
        [A, B]
    ];

    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 70,
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

function caracteristicas_plana(doc, monitor, base, fondo) {
    var A;
    var B;

    switch (fondo) {
        case "S":
            A = {
                "01": '780',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";


            B = '380';

            break; // Add break to prevent fall-through

        case "D":

            A = {
                "01": '780',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";

            B = '400';
            break; // Add break to prevent fall-through

        case "T":
            A = {
                "01": '780',
                "02": '800',
                "03": '950',
                "04": '1100',
                "05": '1200',
            }[monitor] || "No seleccionando";

            B = '480';
            break; // Add break to prevent fall-through
    }

    const encabezados = [
        ["A", "B"]
    ];

    const datos = [
        [A, B]
    ];

    doc.autoTable({
        head: encabezados,
        body: datos,
        startY: 70,
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

function determinar_tipo_base(doc, monitor, base, fondo) {

    switch (base) {
        case "E":
            doc.text("BASE EMBELLECEDOR", 150, 60, {
                align: 'center'
            });
            caracteristicas_embellecedor(doc, monitor, base, fondo);
            break;
        case "R":
            doc.text("BASE RADIOS", 150, 60, {
                align: 'center'
            });
            caracteristicas_radios(doc, monitor, base, fondo);
            break;
        case "P":
            doc.text("BASE PLANA", 150, 60, {
                align: 'center'
            });
            caracteristicas_plana(doc, monitor, base, fondo);
            break;
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
        doc.setFontSize(20);
        doc.text('Serie 330', 10, 20);

        doc.setFontSize(15)
        doc.setTextColor(90, 163, 205);
        doc.text('BASIC', 10, 25)

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(tipo, 10, 30);

        doc.addImage(im, 'PNG', 165, 10, 30, 20)
            //doc.text(`Página ${pageNumber}`, 165, 20);
        doc.line(10, 35, 200, 35);
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




    img.onload = function() {

        crearHeader(doc, 1);
        doc.setFontSize(12);
        doc.text('Ficha del Producto', 105, 50, {
            align: "center"
        });
        doc.text('Descripción de las características:', 10, 55);


        // doc.addImage(im, 'PNG', 10, 80, 180, 100);
        tablaCaracteristicas(monitor, color, base, frontal, fondo);

        doc.addPage();

        determinar_tipo_base(doc, monitor, base, fondo);


        //caracteristicas_embellecedor(doc, monitor, base, fondo); // Pass doc as argument


        // Verificar si se requiere una nueva página
        verificarNuevaPagina(doc);

        // Hacer que el encabezado se repita en todas las páginas
        repetirHeaderEnTodasLasPaginas(doc);

        doc.save('reporte-producto.pdf');


    }
    img.onerror = function() {
        console.error('Error al cargar la imagen');

    };
}