import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  weight: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Свинина на кости охл',
    price: 259.90,
    weight: 'за 1 кг',
    category: 'Свинина',
    image: 'https://cdn.poehali.dev/projects/5ff74693-dd14-40fe-886e-40f06bcfacc2/files/49555e78-94eb-48d2-a39e-262665b753c2.jpg'
  },
  {
    id: 2,
    name: 'Ребрышки свиные',
    price: 329.90,
    weight: 'за 1 кг',
    category: 'Свинина',
    image: 'https://cdn.poehali.dev/projects/5ff74693-dd14-40fe-886e-40f06bcfacc2/files/49555e78-94eb-48d2-a39e-262665b753c2.jpg'
  },
  {
    id: 3,
    name: 'Корейка свиная',
    price: 449.90,
    weight: 'за 1 кг',
    category: 'Свинина',
    image: 'https://cdn.poehali.dev/projects/5ff74693-dd14-40fe-886e-40f06bcfacc2/files/49555e78-94eb-48d2-a39e-262665b753c2.jpg'
  },
  {
    id: 4,
    name: 'Шея свиная',
    price: 499.90,
    weight: 'за 1 кг',
    category: 'Свинина',
    image: 'https://cdn.poehali.dev/projects/5ff74693-dd14-40fe-886e-40f06bcfacc2/files/49555e78-94eb-48d2-a39e-262665b753c2.jpg'
  },
  {
    id: 5,
    name: 'Грудинка свиная',
    price: 389.90,
    weight: 'за 1 кг',
    category: 'Свинина',
    image: 'https://cdn.poehali.dev/projects/5ff74693-dd14-40fe-886e-40f06bcfacc2/files/49555e78-94eb-48d2-a39e-262665b753c2.jpg'
  },
  {
    id: 6,
    name: 'Вырезка свиная',
    price: 599.90,
    weight: 'за 1 кг',
    category: 'Свинина',
    image: 'https://cdn.poehali.dev/projects/5ff74693-dd14-40fe-886e-40f06bcfacc2/files/49555e78-94eb-48d2-a39e-262665b753c2.jpg'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'delivery'>('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Beef" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">МясоМаркет</h1>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-lg font-semibold transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : ''
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('delivery')}
                className={`text-lg font-semibold transition-colors hover:text-primary ${
                  activeSection === 'delivery' ? 'text-primary' : ''
                }`}
              >
                Доставка
              </button>
            </nav>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-primary to-accent text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-5xl font-bold mb-6 animate-scale-in">
                Свежее мясо премиум качества
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Прямые поставки с фермы. Только натуральная продукция
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Перейти к покупкам
              </Button>
            </div>
          </section>

          <section className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-4xl font-bold">Каталог продукции</h3>
              <Badge variant="default" className="text-lg px-4 py-2">
                Свежие поставки
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {product.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                    <p className="text-muted-foreground mb-4">{product.weight}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">
                        {product.price.toFixed(2)} ₽
                      </span>
                      <Button size="lg" className="font-semibold">
                        <Icon name="Plus" size={20} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-muted py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-center mb-12">Почему выбирают нас?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-bold mb-3">Высшее качество</h4>
                  <p className="text-muted-foreground">
                    Работаем только с проверенными поставщиками
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <Icon name="Truck" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-bold mb-3">Быстрая доставка</h4>
                  <p className="text-muted-foreground">
                    Доставим заказ в день оформления
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <Icon name="ThumbsUp" size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-bold mb-3">Всегда свежее</h4>
                  <p className="text-muted-foreground">
                    Только охлажденная продукция высшего сорта
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeSection === 'delivery' && (
        <div className="animate-fade-in">
          <section className="bg-gradient-to-br from-accent to-primary text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <Icon name="Truck" size={64} className="mx-auto mb-6" />
              <h2 className="text-5xl font-bold mb-6">Условия доставки</h2>
              <p className="text-xl opacity-90">
                Быстро и бережно доставим ваш заказ
              </p>
            </div>
          </section>

          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Время доставки</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Принимаем заказы с 8:00 до 22:00. Доставка осуществляется в день заказа 
                      при оформлении до 18:00. Заказы после 18:00 доставляются на следующий день.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Зоны доставки</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Доставляем по всему городу. Бесплатная доставка при заказе от 2000 рублей. 
                      При заказе до 2000 рублей стоимость доставки составляет 200 рублей.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="CreditCard" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Способы оплаты</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Наличными курьеру, банковской картой при получении или онлайн-оплата 
                      на сайте. Принимаем все основные банковские карты.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="Package" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Упаковка</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Вся продукция упаковывается в специальные термопакеты с хладоэлементами, 
                      что гарантирует сохранность и свежесть мяса в пути.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Есть вопросы по доставке?</h3>
              <p className="text-xl mb-6 opacity-90">
                Свяжитесь с нами, и мы ответим на все ваши вопросы
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" variant="secondary" className="text-lg font-semibold px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
                <Button size="lg" variant="secondary" className="text-lg font-semibold px-8">
                  <Icon name="Mail" size={20} className="mr-2" />
                  info@myasomarket.ru
                </Button>
              </div>
            </Card>
          </section>
        </div>
      )}

      <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2024 МясоМаркет. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
