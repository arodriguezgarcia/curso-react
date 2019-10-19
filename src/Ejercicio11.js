import React from 'react';

const LangContext = React.createContext({
    lang: 'es',
    toggleLang: () => {}
});

const Text = (props) => <p>{props.children}</p>;

// Podemos acceder al contexto con la etiqueta consumer
const MainText = () => (
    <LangContext.Consumer>
        {({ lang }) => {
            const pf = lang === 'es' ? 'Párrafo' : 'Paragraph';

            return (
                <>
                    <Text>{pf} 1</Text>
                    <Text>{pf} 2</Text>
                </>
            );
        }
        }
  </LangContext.Consumer>
);

// O bien podemos acceder al contexto funcionalmente
/*class MainText2 extends React.Component {
    static contextType = LangContext;
    render() {

        const pf = this.context.lang === 'es' ? 'Párrafo' : 'Paragraph';

        return (
            <>
                <Text>{pf} 1</Text>
                <Text>{pf} 2</Text>
            </>
        );
    }
}*/

const Button = () => (
    <LangContext.Consumer>
      {({lang, toggleLang}) => (
        <button onClick={toggleLang}>Change Language</button>
      )}
    </LangContext.Consumer>
);

class Ejercicio11 extends React.Component {

    constructor(props) {
        super(props);
    
        this.toggleLang = () => {
          this.setState(state => ({
            lang:
              state.lang === 'es'
                ? 'en'
                : 'es',
          }));
        };

        this.state = {
          lang: 'es',
          toggleLang: this.toggleLang,
        };
      }x
    
      render() {
        return (
            <LangContext.Provider value={this.state}>
                <h1 className="ejercicio">11. React context</h1>   
                <MainText />
                <Button />
          </LangContext.Provider>
        );
      }
}

export default Ejercicio11;
