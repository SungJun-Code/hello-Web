const quotes = [
{
    quote   : "할 말이 없을 때에는 가만히 있으라. 진정한 열정이 느껴질 때, 꼭 해야 할 말이 있을 때 그것을 정열을 다해 말하라.",
    author  : "D. H. Lawrence",
},
{
    quote   : "열정으로 통치하긴 하지만, 결코 현명하게 통치하지는 못한다.",
    author  : "Benjamin Franklin",
},
{
    quote   : "앞서 가는 방법의 비밀은 시작하는 것이다. 시작하는 방법의 비밀은 복잡하고 과중한 작업을 할 수 있는 작은 업무로 나누어, 그 첫 번째 업무부터 시작하는 것이다.",
    author  : "Mark Twain",
},
{
    quote   : "당신은 살아있다. 행동하라. 인생의 과제와 윤리적 책임은 그리 복잡하지 않았다. 완전한 문장이 아닌 몇 단어로도 표현할 수 있었다. '보아라.들어라. 선택하라. 행동하라.' 처럼.",
    author  : "Barbara Hall",
},
{
    quote   : "할 수 없을 것 같은 일을 하라. 실패하라. 그리고 다시 도전하라. 이번에는 더 잘 해보라. 넘어져 본 적이 없는 사람은 단지 위험을 감수해 본 적이 없는 사람일 뿐이다. 이제 여러분 차례이다. 이 순간을 자신의 것으로 만들라.",
    author  : "Oprah Winfrey",
},
{
    quote   : "괴물과 싸우는 사람은 그 과정에서 자신마저 괴물이 되지 않도록 주의해야 한다. 그리고 그대가 오랫동안 심연을 들여다 볼 때 심연 역시 그대를 들여다 본다.",
    author  : "Friedrich Nietzsche",
},
{
    quote   : "너무 멀리 갈 위험을 감수하는 자만이 얼마나 멀리 갈 수 있는 지 알 수 있다.",
    author  : "T. S. Eliot",
},
{
    quote   : "자신은 위험을 무릅쓰고 하지 않을 행동을 충동질 하는 이를 조심하라.",
    author  : "Joaquin Setanti",
},
{
    quote   : "당신이 바라거나 믿는 바를 말할 때마다, 그것을 가장 먼저 듣는 사람은 당신이다. 그것은 당신이 가능하다고 믿는 것에 대해 당신과 다른 사람 모두를 향한 메시지다. 스스로에 한계를 두지 마라.",
    author  : "Oprah Winfrey",
},
{
    quote   : "변화는 인간의 정신에 막대한 심리적 영향을 미친다. 두려워하는 자는 상황이 악화될까봐 걱정하므로 위협적으로 느낀다. 희망에 찬 자는 상황이 나아질 것을 기대하므로 용기를 낸다. 자신있는 사람에게 도전이란 더 나은 것을 만들기 위한 과정이기에, 분발의 계기가 된다.",
    author  : "King Whitney Jr.",
}

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;