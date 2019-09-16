import React, { useState, useEffect } from 'react'
import useReactRouter from 'use-react-router'
import { hasPermission } from '../../utils'
import Presenter from './presenter'
import { DbService } from '../../service/dbService'
import moment from 'moment'
import { useStateValue } from '../../state'
const service = new DbService('Withholdings')

const options = {
  url: '/withholdings',
  title: 'Retencion',
  titleNew: 'Nueva retencion',
  actionList: 'Retenciones',
  actionDelete: 'Eliminar',
  actionCancel: 'Cancelar',
  actionCreate: 'Crear',
  actionUpdate: 'Actualizar',
  addNew: 'Crear retencion',
  deleted: 'Retencion eliminada',
  saved: 'Retencion guardada correctamente',
  continue: 'Continuar',
  canCreate: hasPermission('withholdings_create'),
  canUpdate: hasPermission('withholdings_update'),
  canDelete: hasPermission('withholdings_delete'),
  fields: [
    {field: 'vaucher', label: 'Comprobante', type: 'text', edit: false, className: 'md-cell md-cell--3'},
    {field: 'period', label: 'Periodo', type: 'text', edit: false, className: 'md-cell md-cell--3'},
    {field: 'fornight', label: 'Quincena', type: 'select', edit: true, items: 'Primera, Segunda', className: 'md-cell md-cell--3'},
    {field: 'vaucher_date', label: 'Fecha comprobante', type: 'date', edit: true, className: 'md-cell md-cell--3'},
    {field: 'rif', label: 'Cedula Rif', type: 'text', edit: true, className: 'md-cell md-cell--4'},
    {field: 'name', label: 'Razon Social', type: 'text', edit: true,  className: 'md-cell md-cell--8'},
    {field: 'number', label: 'Numero', type: 'text', edit: true, className: 'md-cell md-cell--4'},
    {field: 'date', label: 'Fecha', type: 'date', edit: true, className: 'md-cell md-cell--4'},
    {field: 'operation_type', label: 'Tipo', type: 'text', edit: true, className: 'md-cell md-cell--4'},
    {field: 'exempt_amount', label: 'Monto excepto', type: 'number', edit: true, className: 'md-cell md-cell--2'},
    {field: 'tax_base', label: 'Base imponible', type: 'number', edit: true, className: 'md-cell md-cell--2'},
    {field: 'aliquot', label: 'Alicuota', type: 'number', edit: true, className: 'md-cell md-cell--2'},
    {field: 'vat_amount', label: 'Monto iva', type: 'number', edit: true, className: 'md-cell md-cell--2'},
    {field: 'percentage', label: 'Porcentaje Retencion', type: 'number', edit: true, className: 'md-cell md-cell--2'},
    {field: 'tax_withheld', label: 'Impuesto retenido', type: 'number', edit: true, className: 'md-cell md-cell--2'},
    {field: 'credit_note', label: 'Nota CR.', type: 'text', edit: true, className: 'md-cell md-cell--6'},
    {field: 'debit_note', label: 'Nota DB.', type: 'text', edit: true, className: 'md-cell md-cell--6'},
  ],
  defaultState: { data:{}, toasts:[], loading: true, isNew: true },
  errors: []
}

const prepareData = d => {
  const ret = {}
  // eslint-disable-next-line
  Object.keys(d).map(key => {
    if(key.search(/date/) > -1 ) {
       ret[key] = moment(d[key], 'YYYY/MM/DD').toDate()
    } else {
      ret[key] = d[key]
    }
  })
  return ret
}

function Container () {
  const [state, setState] = useState(options.defaultState)
  const [{ parameters }] = useStateValue();
  const { history, match } = useReactRouter()
  const id = match.params.id

  useEffect(() => {
    async function fetchData () {
      try {
        if(id !== 'new') {
          const data = await service.getItemById(id)
          setState({ ...options.defaultState, data ,loading: false, isNew: false})
        } else {
          const data = {
            vaucher_date: moment().toDate(),
            period: parameters.period,
            aliquot: parameters.aliquot,
            percentage: parameters.percentage
          }
          setState({ ...options.defaultState, data, loading: false})
        }
      } catch (ex) {
        console.error(ex)
      }
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const setToast = toasts => {
    setState({ ...state, toasts })
  }

  const eventHandler = {
    handleDelete: async () => {
      await service.removeItem(id)
      setToast([{
        text: options.deleted,
        action: options.continue,
        onDismiss: () => history.push(`${options.url}`)}
      ])
    },
    handleSubmit: async e => {
      e.preventDefault()
      const data = prepareData(state.data)
      console.log(data)
      if (state.isNew) {
        const newItem = await service.addItem(data)
        if(newItem.length) {
          const newId = newItem[0].id
          setToast([{text: props.saved,
            action: options.continue,
            onDismiss: () => history.push(`${options.url}/${newId}`)
          }])
        }
      } else {
        const item = await service.updateItemById(id, data)
        if(item) {
          setToast([{text: props.saved,
            action: options.continue,
            onDismiss: () => history.push(`${options.url}`)}])
          return
        }
      }
    },
    setData: data => {
      setState({ ...state, data })
    },
    handleDismiss: () => {}
  }

  const props = { ...options, ...state, ...eventHandler }

  return (
    <Presenter {...props} />
  )
}

export default Container
