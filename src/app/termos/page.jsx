export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#EDF0F5]">
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Cabeçalho */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-1 w-12 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #2E8BFF, #7C5CFF)",
              }}
            />

            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2E8BFF]">
              DevRoad
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Termos de Uso
          </h1>

          <p className="text-sm text-[#8A93A6]">
            Última atualização: 24 de agosto de 2026
          </p>
        </div>

        {/* Introdução */}
        <div className="mb-10 rounded-xl border border-[#1E2430] bg-[#10141D] p-6">
          <p className="leading-7 text-[#8A93A6]">
            Bem-vindo ao <strong className="text-[#EDF0F5]">DevRoad</strong>.
          </p>

          <p className="mt-4 leading-7 text-[#8A93A6]">
            Estes Termos de Uso estabelecem as regras para utilização da
            plataforma DevRoad, incluindo seu site, funcionalidades,
            conteúdos, serviços e comunidade.
          </p>

          <p className="mt-4 leading-7 text-[#8A93A6]">
            Ao acessar ou utilizar o DevRoad, você declara que leu,
            compreendeu e concorda com estes Termos.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-12">

          {/* 1 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              1. Sobre o DevRoad
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad é uma plataforma educacional e projeto de código
              aberto voltado ao aprendizado de programação e tecnologia.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              A plataforma busca reunir, de forma organizada:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Roadmaps de aprendizagem;</li>
              <li>Conteúdos educacionais;</li>
              <li>Aulas e referências externas;</li>
              <li>Exercícios;</li>
              <li>Projetos práticos;</li>
              <li>Tecnologias e ferramentas;</li>
              <li>Recursos de acompanhamento de progresso;</li>
              <li>Funcionalidades de comunidade;</li>
              <li>Outros recursos relacionados à aprendizagem.</li>
            </ul>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O DevRoad está em desenvolvimento contínuo. Portanto,
              funcionalidades, conteúdos, estrutura e aparência da
              plataforma podem ser modificados, adicionados ou removidos
              ao longo do tempo.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              2. Aceitação dos Termos
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Ao utilizar o DevRoad, você concorda com estes Termos de Uso
              e com as demais políticas aplicáveis à plataforma.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Caso não concorde com qualquer parte destes Termos, não
              utilize a plataforma.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              3. Elegibilidade
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad é destinado a pessoas interessadas em aprender
              programação e tecnologia.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Quando a legislação aplicável exigir autorização de
              responsável legal para determinada utilização do serviço,
              essa autorização deverá ser obtida antes da utilização da
              funcionalidade correspondente.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O usuário é responsável por fornecer informações verdadeiras
              quando o cadastro exigir informações pessoais.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              4. Cadastro e conta
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Algumas funcionalidades podem exigir a criação de uma conta.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Ao criar uma conta, o usuário poderá fornecer informações
              como:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Nome;</li>
              <li>E-mail;</li>
              <li>Telefone;</li>
              <li>Senha;</li>
              <li>Foto de perfil;</li>
              <li>Outras informações necessárias para o funcionamento.</li>
            </ul>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O usuário deve manter suas informações atualizadas e não deve
              fornecer informações falsas ou utilizar a identidade de outra
              pessoa.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              A senha da conta deve ser mantida em segurança pelo próprio
              usuário. O usuário não deve compartilhar suas credenciais de
              acesso com terceiros.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Caso suspeite que sua conta tenha sido acessada
              indevidamente, deverá informar o DevRoad assim que possível.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              5. Uso permitido
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O usuário poderá utilizar o DevRoad para fins pessoais,
              educacionais e de desenvolvimento de conhecimentos.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              É permitido:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Criar uma conta;</li>
              <li>Utilizar os roadmaps;</li>
              <li>Assistir aos conteúdos disponibilizados;</li>
              <li>Realizar exercícios;</li>
              <li>Desenvolver projetos;</li>
              <li>Acompanhar seu progresso;</li>
              <li>Utilizar os recursos disponíveis;</li>
              <li>Contribuir com o projeto;</li>
              <li>Compartilhar o DevRoad de maneira legítima.</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              6. Uso proibido
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O usuário não poderá utilizar o DevRoad para:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Praticar atividades ilegais;</li>
              <li>Tentar obter acesso não autorizado à plataforma;</li>
              <li>Explorar vulnerabilidades de forma maliciosa;</li>
              <li>Interferir no funcionamento do serviço;</li>
              <li>Distribuir malware, vírus ou códigos maliciosos;</li>
              <li>Realizar ataques contra a infraestrutura;</li>
              <li>Utilizar bots que prejudiquem a plataforma;</li>
              <li>Tentar acessar dados de outros usuários;</li>
              <li>Coletar dados pessoais de terceiros sem autorização;</li>
              <li>Utilizar a plataforma para fraude;</li>
              <li>Publicar conteúdo ilegal;</li>
              <li>Violar direitos de terceiros;</li>
              <li>Se passar por outra pessoa;</li>
              <li>Prejudicar outros usuários.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              7. Conteúdo educacional
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad possui como objetivo organizar e facilitar o acesso
              a conteúdos educacionais.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Alguns conteúdos podem ser produzidos pelo próprio projeto,
              enquanto outros podem ser referências ou conteúdos
              disponibilizados por terceiros.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Quando uma aula ou material direcionar o usuário para uma
              plataforma externa, como YouTube, documentação oficial ou
              outro site, o conteúdo estará sujeito aos termos e políticas
              da respectiva plataforma.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O DevRoad não reivindica autoria sobre conteúdos de terceiros
              apenas por organizá-los ou referenciá-los dentro de uma
              trilha educacional.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              8. Conteúdo de terceiros
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad pode disponibilizar links, referências ou
              incorporações de conteúdos hospedados por terceiros.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Esses conteúdos podem mudar, ser removidos ou deixar de estar
              disponíveis sem aviso prévio.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O DevRoad não controla necessariamente:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>A disponibilidade de serviços externos;</li>
              <li>Conteúdos publicados por terceiros;</li>
              <li>Políticas de privacidade de terceiros;</li>
              <li>Termos de uso de terceiros;</li>
              <li>Publicidade exibida por plataformas externas;</li>
              <li>Alterações realizadas nos conteúdos externos.</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              9. Progresso e recursos educacionais
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad poderá permitir que o usuário acompanhe seu
              progresso nas trilhas e aulas.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Essas informações podem incluir:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Aulas concluídas;</li>
              <li>Tecnologias estudadas;</li>
              <li>Favoritos;</li>
              <li>Projetos realizados;</li>
              <li>Progresso em determinadas trilhas.</li>
            </ul>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O progresso registrado na plataforma possui finalidade
              principalmente educacional e de personalização da experiência.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O progresso registrado não constitui certificação profissional,
              diploma ou garantia de domínio de determinada tecnologia.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              10. Projetos e exercícios
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Os projetos e exercícios disponibilizados pelo DevRoad têm
              finalidade educacional.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O usuário é responsável pelo código que produzir a partir
              desses materiais.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O DevRoad não garante que determinado exercício, projeto ou
              tecnologia seja adequado para utilização em sistemas de
              produção.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              11. Código aberto
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad é um projeto de código aberto.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O código-fonte disponibilizado publicamente será distribuído
              de acordo com a licença indicada no repositório oficial do
              projeto.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              A abertura do código-fonte não significa que os dados pessoais
              dos usuários, banco de dados de produção, credenciais,
              tokens ou chaves privadas sejam públicos.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              12. Contribuições para o projeto
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Quando permitido, usuários poderão contribuir com o DevRoad
              por meio do repositório público ou dos canais oficiais.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              As contribuições poderão incluir:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Código;</li>
              <li>Correções;</li>
              <li>Documentação;</li>
              <li>Sugestões;</li>
              <li>Traduções;</li>
              <li>Relatórios de bugs;</li>
              <li>Melhorias de interface;</li>
              <li>Novos exercícios.</li>
            </ul>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Ao enviar uma contribuição, o usuário deve possuir os direitos
              necessários para disponibilizá-la.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              13. Conteúdo enviado pelo usuário
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Algumas funcionalidades poderão permitir que o usuário
              publique ou envie conteúdo.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O usuário continua sendo responsável pelo conteúdo que enviar.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O usuário não deve publicar conteúdo que viole direitos
              autorais, marcas, dados pessoais de terceiros, leis ou
              quaisquer outros direitos protegidos.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              14. Propriedade intelectual
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              A estrutura, identidade visual, marca, logotipo, código e
              demais elementos desenvolvidos especificamente para o DevRoad
              poderão estar protegidos por direitos de propriedade
              intelectual.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O código-fonte publicado no repositório oficial estará sujeito
              à licença indicada naquele repositório.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Conteúdos de terceiros permanecem sujeitos aos direitos de
              seus respectivos autores e titulares.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              15. Disponibilidade do serviço
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad é um projeto em desenvolvimento e poderá apresentar
              erros, indisponibilidades, manutenções, mudanças de
              funcionalidades ou interrupções temporárias.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O DevRoad não garante disponibilidade ininterrupta ou ausência
              completa de erros.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              16. Modificações na plataforma
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad poderá adicionar, modificar ou remover
              funcionalidades conforme o projeto evolui.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Isso pode incluir novas páginas, recursos, alterações de
              design, roadmaps, sistema de progresso, contas ou infraestrutura.
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              17. Encerramento ou suspensão de contas
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O usuário poderá solicitar o encerramento de sua conta quando
              essa funcionalidade estiver disponível.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O DevRoad poderá suspender ou encerrar uma conta quando houver
              indícios de violação destes Termos, fraude, acesso não
              autorizado, abuso da plataforma ou atividades ilegais.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              18. Limitação de responsabilidade
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad é fornecido com finalidade educacional.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Na medida permitida pela legislação aplicável, o DevRoad não
              garante que todo conteúdo esteja sempre atualizado, que a
              plataforma esteja livre de erros ou que o usuário obtenha
              determinado resultado profissional.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              O usuário é responsável pelas decisões tomadas a partir dos
              conteúdos encontrados na plataforma.
            </p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              19. Segurança
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad busca adotar medidas razoáveis para proteger a
              plataforma e as informações armazenadas.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Entretanto, nenhum sistema conectado à internet pode ser
              considerado absolutamente seguro.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Caso identifique uma possível vulnerabilidade de segurança,
              recomenda-se comunicar o problema por meio dos canais oficiais
              do projeto.
            </p>
          </section>

          {/* 20 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              20. Privacidade e proteção de dados
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O tratamento de dados pessoais realizado pelo DevRoad deverá
              ser descrito em sua Política de Privacidade.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              A Política de Privacidade deverá explicar, entre outros pontos:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Quais dados são coletados;</li>
              <li>Por que esses dados são coletados;</li>
              <li>Como são utilizados;</li>
              <li>Onde podem ser armazenados;</li>
              <li>Com quem podem ser compartilhados;</li>
              <li>Por quanto tempo podem ser mantidos;</li>
              <li>Quais direitos o usuário possui;</li>
              <li>Como entrar em contato com o responsável.</li>
            </ul>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              A utilização do DevRoad também estará sujeita à Política de
              Privacidade.
            </p>
          </section>

          {/* 21 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              21. Cookies e tecnologias semelhantes
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad poderá utilizar cookies ou tecnologias semelhantes
              para funcionalidades como autenticação, manutenção de sessão,
              preferências, segurança e análise de utilização.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Informações adicionais sobre essas tecnologias poderão ser
              apresentadas na Política de Cookies ou Política de Privacidade.
            </p>
          </section>

          {/* 22 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              22. Comunidade
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Caso o DevRoad disponibilize fóruns, comentários, Discord ou
              outros recursos de comunidade, os usuários deverão respeitar
              os demais participantes.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Não será permitido utilizar os canais oficiais para:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Assédio;</li>
              <li>Ameaças;</li>
              <li>Spam;</li>
              <li>Fraudes;</li>
              <li>Divulgação de malware;</li>
              <li>Discriminação;</li>
              <li>Compartilhamento indevido de dados pessoais;</li>
              <li>Conteúdo ilegal;</li>
              <li>Engenharia social.</li>
            </ul>
          </section>

          {/* 23 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              23. Links externos
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad poderá disponibilizar links para sites e serviços
              externos.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Esses links são fornecidos para facilitar o acesso a recursos
              relacionados ao aprendizado. O DevRoad não controla
              necessariamente esses sites e não é responsável por suas
              práticas, conteúdos, disponibilidade ou políticas.
            </p>
          </section>

          {/* 24 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              24. Publicidade e monetização
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              O DevRoad poderá futuramente adotar formas de sustentabilidade
              financeira, incluindo, quando aplicável, patrocínios, doações,
              apoio da comunidade, publicidade, recursos premium ou outras
              formas legalmente permitidas.
            </p>
          </section>

          {/* 25 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              25. Alterações destes Termos
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Estes Termos poderão ser atualizados para refletir mudanças na
              legislação, na plataforma, nas funcionalidades, na segurança
              ou na forma de tratamento de dados.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              A data de atualização será alterada sempre que uma nova versão
              for publicada.
            </p>
          </section>

          {/* 26 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              26. Legislação aplicável
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Estes Termos deverão ser interpretados de acordo com a
              legislação aplicável ao funcionamento do serviço e aos direitos
              dos usuários.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Considerando que o projeto está sendo desenvolvido no Brasil,
              deverão ser observadas, conforme aplicável, as normas
              brasileiras pertinentes, incluindo a legislação de proteção de
              dados pessoais e as normas de defesa do consumidor quando
              aplicáveis.
            </p>
          </section>

          {/* 27 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              27. Contato
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Para dúvidas, sugestões, solicitações ou questões relacionadas
              a estes Termos, o usuário poderá utilizar os canais oficiais
              disponibilizados pelo DevRoad.
            </p>

            <div className="mt-5 rounded-lg border border-[#1E2430] bg-[#10141D] p-5">
              <p className="text-sm text-[#8A93A6]">
                <strong className="text-[#EDF0F5]">Projeto:</strong> DevRoad
              </p>

              <p className="mt-2 text-sm text-[#8A93A6]">
                <strong className="text-[#EDF0F5]">GitHub:</strong>{" "}
                github.com/MeirelesDiogo
              </p>

              <p className="mt-2 text-sm text-[#8A93A6]">
                <strong className="text-[#EDF0F5]">E-mail:</strong>{" "}
                meirelesdiogo.dev@gmail.com
              </p>
            </div>
          </section>

          {/* 28 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              28. Disposições finais
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Caso alguma disposição destes Termos seja considerada inválida
              ou inexequível, as demais disposições permanecerão válidas na
              medida permitida pela legislação aplicável.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              A eventual ausência de aplicação imediata de determinada regra
              não significa renúncia permanente ao direito de aplicá-la
              posteriormente.
            </p>

            <p className="mt-4 leading-7 text-[#8A93A6]">
              Estes Termos representam as regras gerais para utilização do
              DevRoad e poderão ser complementados por políticas, regras de
              comunidade e documentos específicos relacionados a determinadas
              funcionalidades.
            </p>
          </section>

          {/* 29 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">
              29. Aceite
            </h2>

            <p className="leading-7 text-[#8A93A6]">
              Ao utilizar o DevRoad, o usuário declara que:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#8A93A6]">
              <li>Leu estes Termos de Uso;</li>
              <li>Compreendeu seu conteúdo;</li>
              <li>Concorda com as regras aplicáveis;</li>
              <li>
                Compromete-se a utilizar a plataforma de maneira legítima e
                responsável.
              </li>
            </ul>
          </section>

        </div>

        {/* Rodapé da página */}
        <div className="mt-16 border-t border-[#1E2430] pt-8">
          <div className="flex flex-col gap-2 text-sm text-[#5C6478] sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} DevRoad
            </span>

            <span>
              Aprenda · Pratique · Evolua
            </span>
          </div>
        </div>

      </div>
    </main>
  );
}