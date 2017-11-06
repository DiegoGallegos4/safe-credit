import moment from 'moment';

export const initialState = {
  analysis : {
    entity: {
      name: '',
      last_name: '',
      id_number: '',
      phone: '',
      cellphone: '',
      citizenship: '',
      birth_date: moment(),
      marital_status: '',
      address: '',
      country: ''
    },
    analysis: {
      current_asset: 0,
      current_liability: 0,
      total_assets: 0,
      third_party_liability: 0,
      financial_obligations: 0,
      net_sales: 0,
      gross_utility: 0,
      net_utility: 0,
      entity_id: 0
    }
  }
}