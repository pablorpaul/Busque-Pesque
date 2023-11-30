export default function PerfilScreen() {
  return (
    <>
      <div className="container py-5">
        <h1 className="text-white">Perfil</h1>
        <section className="py-5">
          <form>
            <div className="row justify-content-between">
              <div className="col-6">
                <div className="mb-3">
                  <label
                    for="formGroupExampleInput"
                    className="form-label text-white fw-bold"
                  >
                    Nome do estabelecimento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Insira um nome para o estabelecimento"
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-white fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="exemplo@email.com"
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
                    value={'Senha vinda da API'}
                  ></input>
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label for="senha" className="form-label text-white fw-bold">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmar_senha"
                    value={'Senha vinda da API'}
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label
                    for="formGroupExampleInput"
                    className="form-label text-white fw-bold"
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="(12) 34567-8901"
                  ></input>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-2">
                <div className="mb-3">
                  <label for="senha" className="form-label text-white fw-bold">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="senha"
                    value={'Senha vinda da API'}
                  ></input>
                </div>
              </div>
              <div className="col-1">
                <div className="mb-3">
                  <label for="senha" className="form-label text-white fw-bold">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="senha"
                    value={'Senha vinda da API'}
                  ></input>
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label for="senha" className="form-label text-white fw-bold">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmar_senha"
                    value={'Senha vinda da API'}
                  ></input>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label
                    for="formGroupExampleInput"
                    className="form-label text-white fw-bold"
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="(12) 34567-8901"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
