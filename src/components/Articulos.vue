<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Articulos" 
      :rows="rows"
      :columns="columns"
      row-key="id"
      :pagination="initialPagination"
    />
  </div>
</template>

<script>
export default {
  setup () {
    return {
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 3
      },
      columns: [
        { name: 'id', label: 'Id', align: 'left', field: row => row.id, sortable: true },
        { name: 'nombre', label: 'Nombre', align: 'left', field: row => row.nombre, sortable: true },
        { name: 'precio', label: 'Precio', align: 'right', field: row => row.precio, sortable: true },
        { name: 'stock', label: 'Stock', align: 'right', field: row => row.stock, sortable: true },
        { name: 'categoria', label: 'Categoria', align: 'left', field: row => row.categoria, sortable: true },
        { name: 'estado', label: 'Estado', align: 'left', field: row => row.estado, sortable: true }
      ],
      rows: [] 
    }
  }
}
</script>
