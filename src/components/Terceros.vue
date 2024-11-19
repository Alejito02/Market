<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Usuarios" 
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
        { name: 'identificacion', label: 'Identificacion', align: 'left', field: row => row.identificacion, sortable: true },
        { name: 'tipo', label: 'Tipo', align: 'left', field: row => row.tipo, sortable: true },
        { name: 'estado', label: 'Estado', align: 'left', field: row => row.estado, sortable: true }
      ],
      rows: [] 
    }
  }
}
</script>
