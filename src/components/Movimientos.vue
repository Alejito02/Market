<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Movimientos" 
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
        { name: 'tipo', label: 'Tipo', align: 'left', field: row => row.tipo, sortable: true },
        { name: 'numeroFactura', label: 'Numero Factura', align: 'left', field: row => row.numeroFactura, sortable: true },
        { name: 'fecha', label: 'Fecha', align: 'left', field: row => row.fecha, sortable: true },
        { name: 'articulos', label: 'Articulos', align: 'right', field: row => row.articulos, sortable: true },
        { name: 'valor', label: 'Valor', align: 'right', field: row => row.valor, sortable: true },
        { name: 'iva', label: 'IVA', align: 'right', field: row => row.iva, sortable: true },
        { name: 'total', label: 'Total', align: 'right', field: row => row.total, sortable: true },
        { name: 'estado', label: 'Estado', align: 'left', field: row => row.estado, sortable: true }
      ],
      rows: []
    }
  }
}
</script>
