
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const SoloTips = () => {
  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Соло фишки CS2</h1>
          <Badge className="bg-accent text-white">Новый раздел</Badge>
        </div>
        <p className="text-muted-foreground mb-8">
          Индивидуальные приемы и техники, которые помогут улучшить ваш личный скилл в CS2, 
          даже если вы играете без команды.
        </p>

        <Tabs defaultValue="aim">
          <TabsList className="mb-8">
            <TabsTrigger value="aim">Стрельба</TabsTrigger>
            <TabsTrigger value="movement">Передвижение</TabsTrigger>
            <TabsTrigger value="utility">Гранаты</TabsTrigger>
            <TabsTrigger value="positions">Позиции</TabsTrigger>
          </TabsList>
          
          {/* Секция по аиму */}
          <TabsContent value="aim" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Тренировка прицеливания</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Точность прицеливания - один из важнейших навыков в CS2. Регулярные тренировки 
                    помогут вам улучшить ваш аим и реакцию.
                  </p>
                  <h4 className="font-semibold mb-2">Рекомендуемые упражнения:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Тренировка на специальных картах для аима</li>
                    <li>Deathmatch с фокусом на точность стрельбы</li>
                    <li>Тренировка рефлексов на карте aim_botz</li>
                    <li>Отработка контроля отдачи на стене</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Контроль спрея</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Умение контролировать отдачу оружия позволяет эффективно поражать противников даже 
                    при длительной стрельбе.
                  </p>
                  <h4 className="font-semibold mb-2">Советы по контролю спрея:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Изучите паттерн отдачи каждого оружия</li>
                    <li>Практикуйте спрей-контроль на разных дистанциях</li>
                    <li>Используйте карты-тренажеры для отработки</li>
                    <li>Помните о механике восстановления точности</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Продвинутые техники прицеливания</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Пре-аим</h4>
                    <p className="text-muted-foreground mb-4">
                      Техника предварительного прицеливания в точки, где может появиться противник.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Держите прицел на уровне головы</li>
                      <li>Заранее прицеливайтесь в популярные позиции</li>
                      <li>Практикуйте на картах, где вы знаете позиции врагов</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Пикинг</h4>
                    <p className="text-muted-foreground mb-4">
                      Техники правильного выглядывания из-за укрытий для минимизации риска.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Выглядывайте широко, не приближаясь к краю</li>
                      <li>Используйте jiggle-пикинг для разведки</li>
                      <li>Практикуйте shoulder-пикинг для провокации выстрелов</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Секция по движению */}
          <TabsContent value="movement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Основы передвижения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Правильное передвижение в CS2 так же важно, как и точная стрельба. Хорошие навыки 
                  движения позволят вам эффективнее уклоняться от выстрелов и быстрее перемещаться по карте.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Counter-strafing</h4>
                    <p className="text-muted-foreground">
                      Техника мгновенной остановки для точного выстрела: нажатие клавиши противоположного 
                      направления для быстрой остановки инерции.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Peeker's advantage</h4>
                    <p className="text-muted-foreground">
                      Техническое преимущество игрока, который выглядывает из-за угла, перед тем, кто 
                      держит угол, из-за особенностей сетевого код.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Продвинутые техники передвижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Тихое передвижение</h4>
                    <p className="text-muted-foreground mb-4">
                      Техники бесшумного передвижения для скрытного подхода к противнику.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Используйте shift для ходьбы</li>
                      <li>Изучите тихие места на картах</li>
                      <li>Используйте звуки окружения для маскировки</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Bunny hop</h4>
                    <p className="text-muted-foreground mb-4">
                      Техника прыжков для увеличения скорости передвижения.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Прыжок сразу после приземления</li>
                      <li>Использование A и D для корректировки направления</li>
                      <li>Подходит для быстрого перемещения в начале раунда</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Секция по гранатам */}
          <TabsContent value="utility" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Флеш-гранаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Правильное использование флеш-гранат может дать значительное преимущество в дуэлях.
                  </p>
                  <h4 className="font-semibold mb-2">Техники применения:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Поп-флеш (бросок с минимальным временем на реакцию)</li>
                    <li>Самофлеш с быстрым отворотом</li>
                    <li>Флеш через стену или потолок для скрытого броска</li>
                    <li>Координация времени броска с пикингом</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Смоки и молотовы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Дымовые и зажигательные гранаты - мощные инструменты контроля территории.
                  </p>
                  <h4 className="font-semibold mb-2">Эффективное применение:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Используйте смоки для блокировки обзора снайперов</li>
                    <li>Молотов для зачистки укрытий и задержки пушей</li>
                    <li>Изучайте лайнапы для точных бросков с безопасных позиций</li>
                    <li>Комбинируйте смоки и молотовы для максимального эффекта</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Ситуативное применение гранат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Зная, как и когда использовать каждый тип гранат, вы сможете значительно 
                  повысить эффективность своей игры.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Ретейк</h4>
                    <p className="text-sm">
                      При возвращении сайта используйте флеш-гранаты для ослепления противников, 
                      удерживающих позиции, и молотовы для вытеснения из укрытий.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Постплант</h4>
                    <p className="text-sm">
                      После установки бомбы используйте молотовы для защиты от дефуза и 
                      смоки для безопасного отступления или перепозиционирования.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Лёрк</h4>
                    <p className="text-sm">
                      При игре в одиночку за террористов используйте смоки и флеши для создания 
                      иллюзии атаки большой группы и отвлечения внимания.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Секция по позициям */}
          <TabsContent value="positions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Сильные индивидуальные позиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Знание выигрышных позиций на каждой карте может дать вам значительное преимущество, 
                  особенно при игре в одиночку.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Офф-энгл позиции</h4>
                    <p className="text-muted-foreground mb-4">
                      Нестандартные углы, которые редко проверяются противниками.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Используйте неожиданные углы за пределами обычных чекпойнтов</li>
                      <li>Меняйте позиции после каждого убийства</li>
                      <li>Не злоупотребляйте одной и той же позицией</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Позиции для торговли фрагами</h4>
                    <p className="text-muted-foreground mb-4">
                      Позиции, позволяющие эффективно отомстить за убитого тиммейта.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Располагайтесь так, чтобы видеть место гибели тиммейта</li>
                      <li>Держите перекрестный огонь с тиммейтами</li>
                      <li>Используйте информацию от погибшего тиммейта для прицеливания</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Клатч позиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  В ситуациях 1vX важно выбирать позиции, позволяющие играть против меньшего 
                  числа противников одновременно.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">За CT сторону</h4>
                    <p className="text-muted-foreground mb-4">
                      Позиции для эффективной защиты сайта в одиночку.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Выбирайте позиции с хорошим укрытием и путем отступления</li>
                      <li>Используйте позиции с возможностью контроля нескольких входов</li>
                      <li>При превосходящих силах противника играйте на время</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">За T сторону</h4>
                    <p className="text-muted-foreground mb-4">
                      Эффективные позиции для удержания сайта после установки бомбы.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Выбирайте неожиданные позиции, а не стандартные углы</li>
                      <li>Располагайтесь так, чтобы видеть бомбу или пути к ней</li>
                      <li>Используйте звуки дефуза для определения момента атаки</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SoloTips;
