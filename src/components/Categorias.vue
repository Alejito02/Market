<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Categorias" 
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
        { name: 'descripcion', label: 'Descripcion', align: 'left', field: row => row.descripcion, sortable: true },
        { name: 'estado', label: 'Estado', align: 'left', field: row => row.estado, sortable: true }
      ],
      rows: [] 
    }
  }
}
</script>
