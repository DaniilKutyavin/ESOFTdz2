import React from 'react';
import Competence from './Competence';
const Competences= ({ competences }) => {
    return (
        <section className="competences">
            {competences.map((competence) => 
                <Competence name={competence} />
            )}
        </section>
    )
}

export default Competences;