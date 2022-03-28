export const initialState = {
  contacts: {
    contactList: [],
    newContact: {
      name: "",
      surname: "",
      email: "",
      address: "",
      phone: "",
    },
    ui: {
      //All the UI related state here. eg: hide/show modals,
      //toggle checkbox etc.
    },
    theme: {
      name: "light",
    },
  },
};
