
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TeamTactics = () => {
  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Командные тактики CS2</h1>
        <p className="text-muted-foreground mb-8">
          Эффективные стратегии и тактики для слаженной командной игры. Изучите проверенные подходы к атаке и обороне.
        </p>

        {/* Базовые командные тактики */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Базовые командные тактики</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Дефолтные расстановки</CardTitle>
                <CardDescription>
                  Основные расстановки для начала раунда
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Дефолтная расстановка - это начальная позиция команды в раунде, которая позволяет 
                  контролировать ключевые точки карты и собирать информацию о действиях противника.
                </p>
                <h4 className="font-semibold mb-2">Ключевые принципы:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Контроль ключевых точек карты</li>
                  <li>Сбор информации о противнике</li>
                  <li>Установка контроля карты перед экзекьютом</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Экзекьюты на сайт</CardTitle>
                <CardDescription>
                  Быстрый и слаженный захват бомбсайта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Экзекьют - это согласованное действие команды по захвату бомбсайта с использованием 
                  гранат и координированных перемещений.
                </p>
                <h4 className="font-semibold mb-2">Ключевые элементы:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Использование дымовых гранат для блокировки обзора</li>
                  <li>Применение флеш-гранат для ослепления противников</li>
                  <li>Согласованный вход и зачистка сайта</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Продвинутые тактики */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Продвинутые командные стратегии</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Сплит тактики</CardTitle>
                <Badge>Продвинутый уровень</Badge>
              </div>
              <CardDescription>
                Атака сайта с разных направлений
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Сплит тактика предполагает разделение команды на группы, которые атакуют бомбсайт 
                с разных направлений. Это создает значительное давление на защищающуюся сторону.
              </p>
              
              <div className="bg-muted/30 p-4 rounded-md mb-4">
                <h4 className="font-semibold mb-2">Пример: Сплит A на Dust 2</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>3 игрока идут через Long A</li>
                  <li>2 игрока заходят через Short A</li>
                  <li>Координированное использование гранат и время атаки</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md">
                <h4 className="font-semibold mb-2">Пример: Сплит B на Mirage</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>2 игрока контролируют Mid и Apartments</li>
                  <li>3 игрока заходят через B Apps</li>
                  <li>Важность тайминга и коммуникации</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Fake экзекьюты</CardTitle>
                <Badge>Продвинутый уровень</Badge>
              </div>
              <CardDescription>
                Создание ложной атаки для обмана противника
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Fake экзекьют - это тактика, при которой команда имитирует атаку на один бомбсайт, 
                чтобы отвлечь внимание противника, а затем быстро перемещается для атаки на другой сайт.
              </p>
              
              <div className="bg-muted/30 p-4 rounded-md mb-4">
                <h4 className="font-semibold mb-2">Ключевые элементы fake экзекьюта:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Использование гранат для создания иллюзии полноценной атаки</li>
                  <li>Шумовое давление (стрельба, шаги)</li>
                  <li>Четкая коммуникация для своевременной смены направления атаки</li>
                  <li>Быстрая ротация на настоящую цель атаки</li>
                </ul>
              </div>
              
              <p>
                Эффективный fake требует хорошего понимания времени ротации противника и 
                грамотного использования звуковых сигналов для создания правдоподобной атаки.
              </p>
            </CardContent>
          </Card>
        </section>
        
        {/* Экономические стратегии */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Экономические стратегии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Форс-бай тактики</CardTitle>
                <CardDescription>
                  Стратегии для раундов с ограниченным бюджетом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Форс-бай тактики используются, когда команда решает не экономить полный раунд, 
                  а купить более дешевое оружие, чтобы попытаться выиграть раунд с экономическим преимуществом.
                </p>
                <h4 className="font-semibold mb-2">Рекомендации для форс-баев:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Использование SMG и дробовиков для близких дистанций</li>
                  <li>Агрессивные пуши для получения преимущества</li>
                  <li>Командная игра для компенсации слабости вооружения</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Эко-раунд стратегии</CardTitle>
                <CardDescription>
                  Как играть в условиях минимального бюджета
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Эко-раунд стратегии позволяют команде с минимальным бюджетом нанести максимальный 
                  урон экономике противника или даже выиграть раунд с минимальными затратами.
                </p>
                <h4 className="font-semibold mb-2">Эффективные подходы:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Стеки на одну точку для создания численного преимущества</li>
                  <li>Использование нестандартных позиций</li>
                  <li>Охота за оружием врага</li>
                  <li>Тактические сохранения оружия</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamTactics;
