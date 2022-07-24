const messages = {
  failed: 'Ops',
  success: 'Action was successful',
};

const inputs = {
  login_email: 'Email',
  login_password: 'Senha',
  login_confirm_password: 'Confirmar Senha',
  login_submit: 'Entrar',
  login_confirm: 'Confirmar',
  login_cancel: 'Cancelar',
};

const helper_texts = {
  close_btn: 'Fechar',
  reset_btn: 'Limpar campos',
  save_btn: 'Salvar',
  search_placeholder: 'Digite sua pesquisa aqui',
  search_short_placeholder: 'Pesquisar',
  not_registered: 'Não tem conta?',
  register_here: 'Registre-se aqui',
  forgot_password: 'Esqueci minha senha',
  sync_account: 'Sincronizar conta',
  local_account: 'Conta local',
  confirmation_code: 'Digite o código de confirmação enviado por e-mail.',
};

const labels = {
  form_name: 'Nome',
  form_description: 'Descrição',
  form_price: 'Preço',
  form_code: 'Código',
  form_ean: 'EAN',
  form_price_on_weight: 'Preço por peso',
  form_image: 'Imagem',
  form_favorite: 'Favorito',
  form_priority: 'Prioridade',
  form_active: 'Ativo',
};

export default {
  ...messages,
  ...inputs,
  ...helper_texts,
  ...labels,
};
