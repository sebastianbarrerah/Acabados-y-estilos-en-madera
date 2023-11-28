import React from 'react';
import './electricity.scss';

const Electricity = () => {
  return (
    <section className="electricity__container" id='Electricidad'>
        <figure className="figure__initial">
            <img src="https://electricidadindustrialsite.files.wordpress.com/2017/04/x.jpg?w=1170" alt="" className="img__initial" />
        </figure>

        <div className="electricity__info">
                <h2 className='electricity__title'>Electricidad</h2>
                <p className='electricity__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil vitae! Aut repellendus, molestiae blanditiis ex harum esse autem tempora?</p>
        </div>

        <p className="electricity__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia dolores, culpa delectus optio qui blanditiis eius quae quibusdam repellendus praesentium quidem doloribus laborum perspiciatis voluptatibus labore similique corporis a deserunt adipisci error et! Ipsum doloremque excepturi eum. Necessitatibus, ab!</p>

        <figure className="figure__secundary">
            <img src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/riesgos-electricidad.jpg.webp?itok=FxjkmCGR" alt="" className="img__secundary" />
        </figure>
    </section>
  )
}

export default Electricity;