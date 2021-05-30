export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Как с нами связаться</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc' >
                    <h3><a href="www.instagram.com">{d.name}</a></h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'загрузка'}
        </div>
      </div>
    </div>
  )
}
