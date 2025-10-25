import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8 flex justify-center animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/1e9b7a7e-6c67-4b78-a2cd-f12362e74003/files/9e8510d6-682a-4625-b5bd-da5f20496bd3.jpg"
              alt="Прилив кофе - Логотип"
              className="w-48 h-48 object-contain rounded-3xl shadow-2xl glow-primary"
            />
          </div>
          <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Прилив кофе
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Где волны встречаются с ароматом
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground glow-primary font-bold">
              <Icon name="Coffee" className="mr-2" size={20} />
              Посмотреть меню
            </Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground glow-secondary font-bold">
              <Icon name="MapPin" className="mr-2" size={20} />
              Найти нас
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center bg-card border-primary/30 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:glow-primary">
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                <Icon name="Waves" className="text-primary" size={36} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Морская свежесть</h3>
            <p className="text-muted-foreground">
              Вдохновлены океаном - каждая чашка приносит волну энергии
            </p>
          </Card>

          <Card className="p-8 text-center bg-card border-secondary/30 hover:border-secondary transition-all duration-300 hover:-translate-y-2 hover:glow-secondary">
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center border-2 border-secondary/50">
                <Icon name="Coffee" className="text-secondary" size={36} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-neon">Отборный кофе</h3>
            <p className="text-muted-foreground">
              Зерна со всего мира, обжаренные с мастерством моряка
            </p>
          </Card>

          <Card className="p-8 text-center bg-card border-accent/30 hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:glow-accent">
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center border-2 border-accent/50">
                <Icon name="Heart" className="text-accent" size={36} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-electric">С душой</h3>
            <p className="text-muted-foreground">
              Каждый напиток - это история, рассказанная с любовью
            </p>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Фирменный стиль
          </h2>
          <p className="text-center text-muted-foreground mb-12">Современный, яркий, запоминающийся</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-primary/20">
              <h3 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <Icon name="Palette" size={32} />
                Цветовая палитра
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/20">
                  <div className="w-24 h-24 rounded-2xl bg-ocean shadow-xl border-2 border-primary glow-primary"></div>
                  <div>
                    <p className="font-bold text-xl text-primary">Cyan Wave</p>
                    <p className="text-sm text-muted-foreground">#00d4ff</p>
                    <p className="text-xs text-muted-foreground mt-1">Основной неоновый цвет</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-secondary/20">
                  <div className="w-24 h-24 rounded-2xl bg-neon-purple shadow-xl border-2 border-secondary glow-secondary"></div>
                  <div>
                    <p className="font-bold text-xl text-neon">Purple Neon</p>
                    <p className="text-sm text-muted-foreground">#b65cff</p>
                    <p className="text-xs text-muted-foreground mt-1">Акцентный фиолетовый</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-accent/20">
                  <div className="w-24 h-24 rounded-2xl bg-neon-pink shadow-xl border-2 border-accent glow-accent"></div>
                  <div>
                    <p className="font-bold text-xl text-electric">Electric Pink</p>
                    <p className="text-sm text-muted-foreground">#ff3d8f</p>
                    <p className="text-xs text-muted-foreground mt-1">Энергичный розовый</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-24 h-24 rounded-2xl bg-dark-card shadow-xl border-2 border-border"></div>
                  <div>
                    <p className="font-bold text-xl">Deep Dark</p>
                    <p className="text-sm text-muted-foreground">#1a1a1a</p>
                    <p className="text-xs text-muted-foreground mt-1">Фон для контраста</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-secondary/20">
              <h3 className="text-3xl font-bold mb-6 text-neon flex items-center gap-3">
                <Icon name="Type" size={32} />
                Типографика
              </h3>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-background/50 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-3">Заголовки</p>
                  <p className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{fontFamily: 'Montserrat'}}>
                    Montserrat
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bold, мощный, современный
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-background/50 border border-secondary/20">
                  <p className="text-sm text-muted-foreground mb-3">Основной текст</p>
                  <p className="text-2xl font-semibold" style={{fontFamily: 'Open Sans'}}>
                    Open Sans
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Читаемый, чистый, универсальный
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Примеры использования</p>
                  <div className="space-y-3 p-6 rounded-xl bg-gradient-to-br from-card to-background border border-primary/30">
                    <p className="text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Прилив кофе</p>
                    <p className="text-xl font-bold text-primary">Капучино - 250₽</p>
                    <p className="text-base text-foreground">Насыщенный эспрессо с воздушной молочной пенкой</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-card border-accent/20 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-electric flex items-center gap-3">
              <Icon name="Grid3x3" size={32} />
              Графические элементы
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Паттерн с волнами</p>
                <div className="h-56 rounded-2xl overflow-hidden border-2 border-primary/30 glow-primary">
                  <img 
                    src="https://cdn.poehali.dev/projects/1e9b7a7e-6c67-4b78-a2cd-f12362e74003/files/2d8bfd1d-71fb-494b-86b1-47ba81d4b513.jpg"
                    alt="Паттерн с волнами"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3 px-2">
                  Для упаковки, фонов меню, мерча
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Атмосфера интерьера</p>
                <div className="h-56 rounded-2xl overflow-hidden border-2 border-secondary/30 glow-secondary">
                  <img 
                    src="https://cdn.poehali.dev/projects/1e9b7a7e-6c67-4b78-a2cd-f12362e74003/files/fa553faa-3aa1-4c31-92db-0f2ad7a69e7b.jpg"
                    alt="Интерьер кофейни"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3 px-2">
                  Неоновая морская тематика в дизайне
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-10 bg-gradient-vibrant border-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-white">
                <Icon name="Sparkles" size={32} />
                Применение фирменного стиля
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                    <Icon name="Check" size={24} className="mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-lg text-white">Меню и ценники</p>
                      <p className="text-sm text-gray-200">Стильный дизайн с неоновыми акцентами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                    <Icon name="Check" size={24} className="mt-1 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="font-bold text-lg text-white">Упаковка на вынос</p>
                      <p className="text-sm text-gray-200">Контрастные стаканы с эффектом свечения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                    <Icon name="Check" size={24} className="mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-bold text-lg text-white">Вывеска и витрина</p>
                      <p className="text-sm text-gray-200">Яркий неоновый логотип</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                    <Icon name="Check" size={24} className="mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-lg text-white">Униформа персонала</p>
                      <p className="text-sm text-gray-200">Темная одежда с неоновыми элементами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                    <Icon name="Check" size={24} className="mt-1 flex-shrink-0 text-secondary" />
                    <div>
                      <p className="font-bold text-lg text-white">Социальные сети</p>
                      <p className="text-sm text-gray-200">Контрастные посты с градиентами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
                    <Icon name="Check" size={24} className="mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-bold text-lg text-white">Мерч и подарки</p>
                      <p className="text-sm text-gray-200">Стильные кружки, футболки, стикеры</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center py-12 border-t border-primary/20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Waves" className="text-primary" size={32} />
            <p className="text-4xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Прилив кофе</p>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Фирменный стиль нового поколения
          </p>
          <div className="flex gap-6 justify-center text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
              <Icon name="Mail" size={18} />
              info@prilivkofe.ru
            </div>
            <div className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
              <Icon name="Phone" size={18} />
              +7 (999) 123-45-67
            </div>
            <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
              <Icon name="Instagram" size={18} />
              @priliv_kofe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
