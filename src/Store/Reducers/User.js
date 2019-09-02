const INITIAL_STATE = {
  data: {
    id: '',
    cpf: '',
    completeName: '',
    email: '',
    phoneNumber: '',
    address:{
      street: '',
      placeNumber: '',
      complement: '',
      neighborhood: '',
      cep: '',
      city: '',
      state: '',
    },
    favorites: [],
  },
  isLoading: false,
  errors: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
      case 'SET_USER':
        return { ...state, data: { ...action.value, address: { ...action.value.address }, favorites: action.value.favorites } }
      case 'SET_CPF':
        return { ...state, data: { ...state.data, cpf: action.value } }
      case 'SET_EMAIL':
          return { ...state, data: { ...state.data, email: action.value } }
      case 'SET_COMPLETE_NAME':
          return { ...state, data: { ...state.data, completeName: action.value } }
      case 'SET_PHONENUMBER':
          return { ...state, data: { ...state.data, phoneNumber: action.value } }
      case 'SET_STREET':
          return { ...state, data: { ...state.data, address: { ...state.data.address, street: action.value } } }
      case 'SET_PLACENUMBER':
          return { ...state, data: { ...state.data, address: { ...state.data.address, placeNumber: action.value } } }
      case 'SET_COMPLEMENT':
          return { ...state, data: { ...state.data, address: { ...state.data.address, complement: action.value } } }
      case 'SET_NEIGHBORHOOD':
          return { ...state, data: { ...state.data, address: { ...state.data.address, neighborhood: action.value } } }
      case 'SET_CEP':
          return { ...state, data: { ...state.data, address: { ...state.data.address, cep: action.value } } }
      case 'SET_CITY':
          return { ...state, data: { ...state.data, address: { ...state.data.address, city: action.value } } }
      case 'SET_UF':
          return { ...state, data: { ...state.data, address: { ...state.data.address, state: action.value } } }
      case 'SET_ISLOADING':
          return { ...state, isLoading: action.value }
      case 'SET_ERRORS':
          return { ...state, errors: action.value }
      default:
          return state;
  }
};