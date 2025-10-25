import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8 flex justify-center animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/1e9b7a7e-6c67-4b78-a2cd-f12362e74003/files/9e8510d6-682a-4625-b5bd-da5f20496bd3.jpg"
              alt="Прилив кофе - Логотип"
              className="w-48 h-48 object-contain rounded-3xl shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-ocean-dark">
            Прилив кофе
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Где волны встречаются с ароматом
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Coffee" className="mr-2" size={20} />
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="MapPin" className="mr-2" size={20} />
              Найти нас
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Waves" className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-ocean-dark">Морская свежесть</h3>
            <p className="text-muted-foreground">
              Вдохновлены океаном - каждая чашка приносит волну энергии
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="Coffee" className="text-accent" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-ocean-dark">Отборный кофе</h3>
            <p className="text-muted-foreground">
              Зерна со всего мира, обжаренные с мастерством моряка
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon name="Heart" className="text-secondary" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-ocean-dark">С душой</h3>
            <p className="text-muted-foreground">
              Каждый напиток - это история, рассказанная с любовью
            </p>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-ocean-dark">
            Фирменный стиль
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center gap-2">
                <Icon name="Palette" size={28} />
                Цветовая палитра
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-ocean shadow-md border-2 border-white"></div>
                  <div>
                    <p className="font-semibold">Ocean Blue</p>
                    <p className="text-sm text-muted-foreground">#0EA5E9</p>
                    <p className="text-xs text-muted-foreground">Основной цвет бренда</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-ocean-dark shadow-md border-2 border-white"></div>
                  <div>
                    <p className="font-semibold">Deep Sea</p>
                    <p className="text-sm text-muted-foreground">#1A1F2C</p>
                    <p className="text-xs text-muted-foreground">Акценты и текст</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-ocean-light shadow-md border-2 border-white"></div>
                  <div>
                    <p className="font-semibold">Wave Teal</p>
                    <p className="text-sm text-muted-foreground">#33C3F0</p>
                    <p className="text-xs text-muted-foreground">Светлые акценты</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-coffee-brown shadow-md border-2 border-white"></div>
                  <div>
                    <p className="font-semibold">Coffee Brown</p>
                    <p className="text-sm text-muted-foreground">#6B5D4F</p>
                    <p className="text-xs text-muted-foreground">Кофейные элементы</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center gap-2">
                <Icon name="Type" size={28} />
                Типографика
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Заголовки</p>
                  <p className="text-4xl font-bold" style={{fontFamily: 'Montserrat'}}>
                    Montserrat
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Bold, современный, запоминающийся
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Основной текст</p>
                  <p className="text-2xl" style={{fontFamily: 'Open Sans'}}>
                    Open Sans
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Читаемый, дружелюбный, универсальный
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Примеры использования</p>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">Прилив кофе</p>
                    <p className="text-lg font-semibold">Капучино - 250₽</p>
                    <p className="text-base">Насыщенный эспрессо с воздушной молочной пенкой</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-white mb-12">
            <h3 className="text-2xl font-bold mb-6 text-ocean-dark flex items-center gap-2">
              <Icon name="Grid3x3" size={28} />
              Графические элементы
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted-foreground mb-4">Паттерн с волнами</p>
                <div className="h-48 rounded-xl overflow-hidden border-2 border-primary/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/1e9b7a7e-6c67-4b78-a2cd-f12362e74003/files/2d8bfd1d-71fb-494b-86b1-47ba81d4b513.jpg"
                    alt="Паттерн с волнами"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Для упаковки, фонов меню, мерча
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-4">Атмосфера интерьера</p>
                <div className="h-48 rounded-xl overflow-hidden border-2 border-primary/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/1e9b7a7e-6c67-4b78-a2cd-f12362e74003/files/fa553faa-3aa1-4c31-92db-0f2ad7a69e7b.jpg"
                    alt="Интерьер кофейни"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Морская тематика в дизайне пространства
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Sparkles" size={28} />
              Применение фирменного стиля
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Меню и ценники</p>
                    <p className="text-sm opacity-90">Элегантный дизайн с морскими акцентами</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Упаковка на вынос</p>
                    <p className="text-sm opacity-90">Стаканы, пакеты, коробки с волнами</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Вывеска и витрина</p>
                    <p className="text-sm opacity-90">Заметный морской логотип</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Униформа персонала</p>
                    <p className="text-sm opacity-90">Фартуки и бейджи в бренд-стиле</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Социальные сети</p>
                    <p className="text-sm opacity-90">Посты с фирменным дизайном</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Мерч и подарки</p>
                    <p className="text-sm opacity-90">Кружки, футболки, стикеры</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center py-12 border-t">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Waves" className="text-primary" size={24} />
            <p className="text-2xl font-bold text-ocean-dark">Прилив кофе</p>
          </div>
          <p className="text-muted-foreground mb-6">
            Фирменный стиль, который вдохновляет и запоминается
          </p>
          <div className="flex gap-4 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} />
              info@prilivkofe.ru
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              +7 (999) 123-45-67
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Instagram" size={16} />
              @priliv_kofe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
