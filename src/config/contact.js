// Configuración de envío de formularios (Web3Forms: https://web3forms.com)
// Cada access key envía los formularios al correo con el que se creó esa key.
// Crea una key por correo: una para Lis (casting) y otra para Dairo (talleres).
export const CONTACT = {
  // Temporal: ambas apuntan a pb60code@gmail.com. Cambiar a los correos reales después.
  castingKey: '8c71eff7-3882-4c11-b393-81aac813eaf5',
  workshopKey: '8c71eff7-3882-4c11-b393-81aac813eaf5',
};

export const isPlaceholderKey = (key) => !key || key.startsWith('REEMPLAZAR');
