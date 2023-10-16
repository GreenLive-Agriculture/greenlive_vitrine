import React from "react";
import Person from "../widgets/person"

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: 'facebook.png',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: 'twitter.png',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: 'instagram.png',
  },
];

const Equipe = () => {
    return (
        <div className="flex flex-col w-full items-center font-WorkSans py-10 gap-6">
            <div className="flex flex-col w-full lg:w-10/12 text-center text-4xl font-bold p-6" id="equipe">
                Notre équipe
            </div>
            <div style={{overflow: 'auto', border:'none', color:'#333',fontsize:'9px',textAlign:'center', margin:'0 10px 0px 10px',padding:'30px',overflowWrap:'break-word'}}>
                    Notre équipe est composée d'experts passionnés par l'agriculture de précision
                     et les technologies de pointe. Nous sommes convaincus que l'agriculture de précision est l'avenir de 
                     l'agriculture au Cameroun, et nous sommes fiers de contribuer à cette révolution en offrant des 
                     solutions abordables et efficaces pour les agriculteurs de toutes tailles.
            </div>
            <div  style={{ display: 'flex', justifyContent: 'space-between' ,gap:'50px' ,  alignItems: 'center'}}>
                <Person name="NGOUADJEU Hilary" image={process.env.PUBLIC_URL +`/assets/equipe/hilary.PNG`} profit="Mathématicienne / Ingénieure SI" socialLinks={socialLinks} />
                <Person name="Eitel MBANGO" image={process.env.PUBLIC_URL +`/assets/equipe/eitel.PNG`} profit="Mecatronicien" socialLinks={socialLinks} />
                <Person name="NYEMB Kévin" image={process.env.PUBLIC_URL +`/assets/equipe/kevin.PNG`} profit="Data Scientist" socialLinks={socialLinks} />
                <Person name="AL-VELDA DE MBAYEN" image="john-doe.jpg" profit="Data Scientist" socialLinks={socialLinks} />
            </div>
            <div  style={{ display: 'flex', justifyContent: 'space-between' ,gap:'50px' ,  alignItems: 'center'}}>
                <Person name="Ledoux KOUAM" image={process.env.PUBLIC_URL +`/assets/equipe/ledoux.PNG`} profit="Ingénieur Telecom et Cloud" socialLinks={socialLinks} />
                <Person name="WAYOU Wilfried" image={process.env.PUBLIC_URL +`/assets/equipe/wilfried.PNG`} profit="Développeur Web et mobile" socialLinks={socialLinks} />
            </div>
        </div>
    );
};

export default Equipe;
