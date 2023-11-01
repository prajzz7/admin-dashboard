import React from 'react'
import './WidgetLg.css'

const WidgetLg = () => {

  const orderData = [
    {
      product_name: 'Hp Pavilion 15',
      price: '65999',
      customer: 'Naruto Uzumaki',
      status: 'Completed',
      profileImage: 'https://img.etimg.com/thumb/msid-102703009,width-300,height-225,imgsize-16886,,resizemode-75/starting-naruto-check-where-to-begin-how-to-watch-heres-your-complete-guide-to-iconic-ninja-series.jpg'
    },
    {
      product_name: 'Dell XPS 13',
      price: '79999',
      customer: 'Monkey D Luffy',
      status: 'Pending',
      profileImage: 'https://w0.peakpx.com/wallpaper/937/956/HD-wallpaper-luffy-anime-anime-luffy-luufy-monkey-d-luffy-monkey-d-luffy-one-piece-smile.jpg'
    },
    {
      product_name: 'MacBook Pro',
      price: '129999',
      customer: 'Tobirama Senju',
      status: 'Completed',
      profileImage: 'https://w0.peakpx.com/wallpaper/1005/847/HD-wallpaper-tobirama-senju-naruto-uchiha-ninja-shippuden-leaf-hashirama.jpg'
    },
    {
      product_name: 'Lenovo ThinkPad',
      price: '54999',
      customer: 'Kakashi Hatake',
      status: 'Declined',
      profileImage: 'https://w0.peakpx.com/wallpaper/458/866/HD-wallpaper-kakashi-kakashi-sensei.jpg'
    },
    {
      product_name: 'Asus ROG Zephyrus',
      price: '89999',
      customer: 'Zoro Bushido',
      status: 'Pending',
      profileImage: 'https://w0.peakpx.com/wallpaper/225/916/HD-wallpaper-zoro-one-piece.jpg'
    },
    {
      product_name: 'Acer Predator Helios',
      price: '74999',
      customer: 'Hinata Hyuga',
      status: 'Completed',
      profileImage: 'https://w0.peakpx.com/wallpaper/457/652/HD-wallpaper-hinata-naruto.jpg'
    },
    {
      product_name: 'Microsoft Surface Laptop',
      price: '89999',
      customer: 'Itachi Uchiha',
      status: 'Declined',
      profileImage: 'https://w0.peakpx.com/wallpaper/160/785/HD-wallpaper-itachi-uchiha-akatsuki-anime-japan-naruto-naruto-shippuden-sasuke-sharingan-uchiha-itachi.jpg'
    },
    {
      product_name: 'HP Envy 13',
      price: '69999',
      customer: 'Sasuke Uchiha',
      status: 'Completed',
      profileImage: 'https://w0.peakpx.com/wallpaper/878/815/HD-wallpaper-sasuke-uchiha-sasuke-uchiha-naruto-anime.jpg'
    }
  ];

  const Button = ({ type }) => {
    return <button disabled={true} className={`statusButton ${type}`}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='ordersHeading'>Recent Orders</h3>
      <table className='orderTable'>
        <thead className='tableHead'>
          <tr>
            <th className='tableHeadItem'>Product Name</th>
            <th className='tableHeadItem'>Price</th>
            <th className='tableHeadItem'>Customer</th>
            <th className='tableHeadItem'>Status</th>
          </tr>
        </thead>
        <tbody className='tableData'>
          {orderData.map(order => {
            return (<tr key={order.product_name} className='tableDataRow'>
              <td className='tableDataItem'>{order.product_name}</td>
              <td className='tableDataItem'>{order.price}</td>
              <td className='tableDataItem'>
                <div className='profileContainer'>
                  <img alt={order.customer} src={order.profileImage} />
                  <span>{order.customer}</span>
                </div>
              </td>
              <td className='tableDataItem'>{<Button type={order.status} />}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg