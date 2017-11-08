import moment from 'moment';

export const initialState = {
  analysis : {
    entity: {
      name: '',
      surname: '',
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
    },
    results: {
      current_ratio: 0,
      net_work_capital: 0,
      gross_margin: 0,
      net_margin: 0,
      debt_level: 0,
      financial_debt: 0,
      acceptance: "NO"
    },
    validation: {},
    loading: false,
    error: ''
  }
}