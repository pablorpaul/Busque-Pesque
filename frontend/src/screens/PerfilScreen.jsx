export default function PerfilScreen() {
  return (
    <>
      <div className="container py-5">
        <h1 className="m-0 text-white">Perfil</h1>
        <section className="pt-5">
          <form className="needs-validation" novalidate>
            <div className="row justify-content-between">
              <div className="col-7">
                <div className="mb-3">
                  <label
                    for="nome_estabelecimento"
                    className="form-label text-white fw-bold"
                  >
                    Nome do estabelecimento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome_estabelecimento"
                    placeholder="Insira um nome para o estabelecimento"
                    required
                    minlength="3"
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label for="email" className="form-label text-white fw-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="exemplo@email.com"
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-3">
                <div className="mb-3">
                  <label for="senha" className="form-label text-white fw-bold">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="senha"
                    required
                    minLength={8}
                    maxLength={16}
                    // value={'Senha vinda da API'}
                  ></input>
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label
                    for="confirmar_senha"
                    className="form-label text-white fw-bold"
                  >
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmar_senha"
                    required
                    minLength={8}
                    maxLength={16}
                    // value={'Senha vinda da API'}
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label
                    for="telefone"
                    className="form-label text-white fw-bold"
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefone"
                    placeholder="(12)34567-8901"
                    required
                    minLength={13}
                    maxLength={13}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-7">
                <div className="row justify-content-between">
                  <div className="col-4">
                    <div className="mb-3">
                      <label
                        for="cep"
                        className="form-label text-white fw-bold"
                      >
                        CEP
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cep"
                        placeholder="12345-678"
                        required
                        minLength={9}
                        maxLength={9}
                      ></input>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="mb-3">
                      <label
                        for="estado"
                        className="form-label text-white fw-bold"
                      >
                        Estado
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="estado"
                        placeholder="SC"
                        required
                        minLength={2}
                        maxLength={2}
                        disabled
                      ></input>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mb-3">
                      <label
                        for="cidade"
                        className="form-label text-white fw-bold"
                      >
                        Cidade
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cidade"
                        placeholder="Cidade"
                        required
                        minLength={3}
                        disabled
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label for="bairro" className="form-label text-white fw-bold">
                    Bairro
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bairro"
                    placeholder="Bairro"
                    required
                    minLength={3}
                    disabled
                  ></input>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-4">
                <div className="mb-3">
                  <label for="rua" className="form-label text-white fw-bold">
                    Rua
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rua"
                    placeholder="Rua"
                    required
                    minLength={3}
                    disabled
                  ></input>
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <label for="numero" className="form-label text-white fw-bold">
                    Número
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="numero"
                    placeholder="123"
                    required
                    minLength={1}
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label
                    for="complemento"
                    className="form-label text-white fw-bold"
                  >
                    Complemento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="complemento"
                    placeholder="Complemento"
                    required
                    minLength={3}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-12">
                <div className="mb-3">
                  <label
                    for="descricao"
                    className="form-label text-white fw-bold"
                  >
                    Descrição do estabelecimento
                  </label>
                  <textarea
                    className="form-control"
                    id="descricao"
                    rows="3"
                    placeholder="Descreva o seu estabelecimento"
                    required
                    minLength={10}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-3">
                <div className="mb-3">
                  <label
                    for="website"
                    className="form-label text-white fw-bold"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="website"
                    placeholder="www.meusite.com.br"
                    minLength={12}
                  ></input>
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label
                    for="instagram"
                    className="form-label text-white fw-bold"
                  >
                    Instagram
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="instagram"
                    placeholder="@seu_usuario"
                    minLength={12}
                  ></input>
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label
                    for="facebook"
                    className="form-label text-white fw-bold"
                  >
                    Facebook
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="facebook"
                    placeholder="@seu_usuario"
                    minLength={12}
                  ></input>
                </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col">
                <button
                  className="btn btn-outline-light btn-limpar fw-bold"
                  type="button"
                >
                  Limpar
                </button>
              </div>
              <div className="col d-flex justify-content-end">
                <button
                  className="btn btn-primary btn-submit fw-bold"
                  type="submit"
                >
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
