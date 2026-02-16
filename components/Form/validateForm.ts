import { FormData } from ".";

const validateForm = (formData: FormData) => {
  const errors: { [key: string]: string } = {};

  if (!formData.nombre.trim()) {
    errors.nombre = "El nombre es requerido.";
  } else if (formData.nombre.trim().length > 15) {
    errors.nombre = "El nombre no puede tener más de 15 caracteres.";
  } else if (!/^[a-zA-Z\s]*$/.test(formData.nombre)) {
    errors.nombre = "No se permiten números ni caracteres especiales.";
  }

  if (!formData.apellido.trim()) {
    errors.apellido = "El apellido es requerido.";
  } else if (formData.apellido.trim().length > 15) {
    errors.apellido = "El apellido no puede tener más de 15 caracteres.";
  } else if (!/^[a-zA-Z\s]*$/.test(formData.apellido)) {
    errors.apellido = "No se permiten números ni caracteres especiales.";
  }

  if (!formData.email.trim()) {
    errors.email = "El email es requerido.";
  } else if (formData.email.trim().length > 40) {
    errors.email = "El email no puede tener más de 40 caracteres.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "El formato del email no es válido.";
  }

  const phoneDigits = formData.telefono.replace(/[\s+()-]/g, "");
  if (phoneDigits) {
    if (!/^\d+$/.test(phoneDigits)) {
      errors.telefono = "El teléfono solo debe contener números.";
    } else if (phoneDigits.length < 6) {
      errors.telefono = "El teléfono debe tener al menos 6 dígitos.";
    }
  }

  if (formData.marca.trim().length > 20) {
    errors.marca = "La marca no puede tener más de 20 caracteres.";
  } else if (formData.marca.trim().length > 0 && formData.marca.trim().length < 2) {
    errors.marca = "La marca debe tener al menos 2 caracteres.";
  }

  if (!formData.mensaje.trim()) {
    errors.mensaje = "El mensaje es requerido.";
  } else if (formData.mensaje.trim().length < 5) {
    errors.mensaje = "El mensaje debe tener al menos 5 caracteres.";
  } else if (formData.mensaje.trim().length > 500) {
    errors.mensaje = "El mensaje no puede exceder los 500 caracteres.";
  }

  return errors;
};

export default validateForm;