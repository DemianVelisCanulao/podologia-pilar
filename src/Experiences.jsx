import './Experiences.css'
export function Experiences(){
    const experiences = {
        experience_1:{
            name: 'Sector Público',
            short_description: 'Durante mi tiempo en la Municipalidad de La Florida, desempeñé un rol fundamental en el programa de atención a personas con movilidad reducida. Mi labor se centraba en:',
            long_description: ''
        },
        experience_2 :{
            name: 'Experience  n° 2',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 2'
        },
        experience_3: {
            name: 'Experience  n° 3',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 3'
        },
    }
    
    return (
        <div className="container-experiences">
            {Object.keys(experiences).map(key =>(
                
                <div key={key} className="box-experience">
                    <div className="header-experience">
                        {experiences[key].name}
                    </div>
                    <div className="body-experience">
                        <p>{experiences[key].short_description}</p>
                    </div>
                </div>
            ))}
            
        </div>
    )
}