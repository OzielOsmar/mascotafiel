document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const agregarMascotaBtn = document.getElementById('agregar-mascota-btn');
    const form = document.getElementById('agregar-mascota-form');
    const tableBody = document.querySelector('#mascotas-table tbody');
    
    // Array para almacenar las mascotas (simulando una base de datos)
    let mascotas = [];
    
    // Función para mostrar las mascotas en la tabla
    function mostrarMascotas() {
        tableBody.innerHTML = '';
        mascotas.forEach(function(mascota) {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${mascota.nombre}</td>
                <td>${mascota.cliente}</td>
                <td>${mascota.tipo}</td>
                <td>${mascota.veterinario}</td>
                <td>
                    <button class="editar-btn" data-id="${mascota.id}">Editar</button>
                    <button class="eliminar-btn" data-id="${mascota.id}">Eliminar</button>
                </td>
            `;
        });
    }
    
    // Función para agregar una mascota
    function agregarMascota(nombre, cliente, tipo, veterinario) {
        const nuevaMascota = {
            id: mascotas.length + 1,
            nombre: nombre,
            cliente: cliente,
            tipo: tipo,
            veterinario: veterinario
        };
        mascotas.push(nuevaMascota);
        mostrarMascotas();
    }
    
    // Función para mostrar el modal al hacer clic en el botón de agregar mascota
    agregarMascotaBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Función para cerrar el modal al hacer clic en la "x"
    modalContent.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Función para enviar el formulario al hacer clic en el botón de guardar
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombreMascota = form.querySelector('#nombre-mascota').value;
        const nombreCliente = form.querySelector('#nombre-cliente').value;
        const tipoMascota = form.querySelector('#tipo-mascota').value;
        const veterinario = form.querySelector('#veterinario').value;
        
        agregarMascota(nombreMascota, nombreCliente, tipoMascota, veterinario);
        modal.style.display = 'none';
    });
});