import React from 'react'
import {Divider, Typography, Image} from 'antd'

import Move from './gifs/move.gif'
import Close from './gifs/close.gif'
import Resize from './gifs/resize.gif'
import Menu from './gifs/menu.gif'
import {animated, config, useSpring} from 'react-spring'

const {Title, Text} = Typography

const HelpAppContent: React.FC = () => {
  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 200,
    config: config.gentle,
  })
  return (
    <animated.section style={styles}>
      <Title level={2}>Справка</Title>
      <Divider />
      <Title level={3}>Возможности приложения</Title>
      <Title level={4}>Перенос окон и иконок приложения</Title>
      <Text>
        Чтобы переместить окно приложения, необходимо кликнуть по верхней части
        окна и перетащить.
      </Text>
      <br />
      <br />
      <Text>
        Чтобы переместить иконку приложения, необходимо кликнуть по нему и
        перетащить.
      </Text>
      <Image loading="lazy" src={Move} />
      <Title level={4}>Закрытие и скрытие приложений</Title>
      <Text>
        Чтобы закрыть приложение, необходимо нажать на кнопку "Х" в левом
        верхнем углу окна приложения.
      </Text>
      <br />
      <br />
      <Text>
        Чтобы скрыть окно приложения, нажмите на кнопку "_" в левом верхнем углу
        окна приложения, после чего окно закроется, однако приложение можно
        будет снова открыть нажав на иконку приложения в нижнем списке
        приложений.
      </Text>
      <Image loading="lazy" src={Close} />
      <Title level={4}>Изменение размеров окна</Title>
      <Text>
        Чтобы изменить размер окна приложения, нужно потянуть за любой край
        окна, как в любых ОС.
      </Text>
      <Image loading="lazy" src={Resize} />
      <Title level={4}>Меню</Title>
      <Text>
        В левом нижнем углу находится иконка "Меню", нажав на которую откроется
        меню, которое будет содержать все приложения и некоторую другую
        информацию.
      </Text>
      <Image loading="lazy" src={Menu} />
    </animated.section>
  )
}

export default HelpAppContent
