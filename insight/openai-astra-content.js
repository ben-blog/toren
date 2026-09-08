window.POST_T = {
  ko: {
    'post-eyebrow': 'Insight — by ImperAI',
    'post-title': 'OpenAI의 Astra가<br /><em>진짜 팔고 있는 건 무엇인가</em>',
    'post-subtitle': 'Astra의 두 가지 점수가 이야기하고 있는 ‘하네스 프리미엄’',
    'post-meta-author': 'Ben Eum · ImperAI',
    'post-meta-date': '2026년 9월',
    'post-meta-read': '읽는 시간 11분',

    'p-lead':
      'OpenAI가 9월 3일 GPT-6 Astra를 공개했습니다. 발표 자리에서 그레그 브록만은 “Welcome to the AGI era”라는 말로 Astra에 대한 자신감을 드러냈고, ARC-AGI-3 99.9%, FrontierMath Tier 4 97.6% 같은 숫자가 헤드라인을 채웠습니다.',
    'p-intro-1':
      '아직 좀 이르긴 하지만, Astra에 대한 반응은 두 갈래로 갈리고 있습니다(사실 이런 현상은 어떤 모델이 나오든 마찬가지긴 했지만요). 한쪽은 ‘정말 AGI의 시대가 열렸다’, 다른 한쪽은 ‘종합적인 지능 지수로 보면 전작과 별 차이가 없다’면서 여전한 마케팅 스턴트에 가깝다고 하고 있습니다. 그런데 Astra가 진짜 AGI냐 아니냐, 성능이 정말 엄청난 향상을 이룬 것이냐 아니냐 하는 논점 외에, 우리가 한 번 생각해 봐야 할 대목이 하나 있다고 생각합니다.',

    'h2-1': '같은 모델에 두 개의 점수가 나온 이유',
    'p-1-1':
      'ARC Prize의 표준 하네스에서 62.7%, OpenAI의 Provider Adapter에서 99.9%가 나왔습니다. 모델은 하나인데 점수가 두 개인 셈입니다.',
    'p-1-2':
      '하네스는 모델을 감싸는 실행 환경입니다. 모델에게 무엇을 보여줄지, 무엇을 기억하게 할지, 도구를 어떻게 쓰게 할지, 실패하면 어디서부터 다시 시도할지를 정하는, 모델 바깥에서 실행을 관리하는 소프트웨어 층이라고 보시면 됩니다.',
    'p-1-3':
      'ARC Prize의 표준 하네스는 모든 모델에게 똑같은 조건을 줍니다. 환경의 현재 상태와 취할 수 있는 행동 목록만 건네줄 뿐, 규칙이나 목표를 알려주지도 않고 따로 기억할 장치를 붙여주지도 않습니다. 앞 단계에서 무엇을 알아냈는지 기억하려면 모델이 스스로 메모로 적어두어야 하고, 다음 단계에는 그 메모만 다시 받습니다. 사람으로 치면 매번 기억이 지워진 채 자기가 남긴 쪽지만 들고 다시 들어가는 셈입니다.',
    'p-1-4':
      '반면에 Provider Adapter는 OpenAI가 자사 모델에 맞춰 직접 만든 하네스입니다. 모델이 문제를 풀어가면서 쌓아둔 추론 상태를 요청과 요청 사이에 그대로 보존해 주는데, 이건 밖으로 드러나지 않는 내부 상태라서 다른 회사가 똑같이 흉내 내기 어렵고, 대화가 길어지면 알아서 압축해 주기 때문에 앞서 해둔 작업을 다시 꺼내 쓸 수도 있습니다.',
    'p-1-5':
      '표준 하네스에서 추론 노력만 올려가면서 잰 점수를 보면, High 54.82%, XHigh 59.34%, Max 62.71%입니다. 즉 표준 하네스에서는 생각을 아무리 오래 시켜도 62.7%가 가장 높은 수치였습니다. 99.9%는 추론 설정만으로 설명되지 않는 숫자인 것이죠.',
    'p-1-6':
      '거꾸로도 확인됩니다. Provider Adapter에서는 추론 노력을 아예 none으로 꺼도 96.7%가 나옵니다. 표준 하네스에서 생각을 최대로 시킨 62.7%보다 34점이나 높습니다. 적어도 이 평가에서는 얼마나 오래 생각하게 하느냐보다 어떤 실행 환경에 올려놓느냐가 성능을 더 크게 갈랐습니다.',
    'fig1-cap':
      '<b>그림 1.</b> 같은 모델을 두 하네스에 올린 결과. 추론 노력을 최대로 올려도 표준 하네스에서는 62.7%가 상한이었습니다. 자료: ARC Prize, ARC-AGI-3.',
    'p-1-7':
      '물론 이 차이 전체가 OpenAI만 만들 수 있는 고유한 하네스의 몫이라는 뜻은 아닙니다. 표준 하네스는 공정한 비교를 위해 기능을 최소화한 환경이고, Provider Adapter에는 여러 기능이 함께 들어가 있으니까요. 여기서 분명하게 확인되는 것은 더 단순합니다. 모델 이름이 같아도 실행 조건이 달라지면 결과가 크게 달라질 수 있다는 사실입니다.',
    'p-1-8':
      '비용은 성능과는 반대의 결과를 보여주고 있습니다. 62.7%가 나온 표준 하네스 쪽은 벤치마크를 한 번 도는 데 26,098달러가 들었는데, 99.9%가 나온 Provider Adapter 쪽은 18,817달러가 들었습니다. 점수가 높은 쪽이 오히려 더 쌌던 것이죠. 두 방식이 공통으로 풀어낸 167개 과제를 비교해 보면 Provider Adapter 쪽이 3.66배 빨리 끝냈고, 토큰도 절반 가까이 덜 썼습니다.',
    'fig2-cap':
      '<b>그림 2.</b> 점수가 높은 쪽이 더 싸고 더 빨랐습니다. 싼 설정이 늘 싼 게 아닙니다. 자료: ARC Prize, ARC-AGI-3.',
    'p-1-9':
      '기사에 많이 실린 숫자는 99.9%였습니다만, 정작 눈여겨볼 것은 두 점수 사이에 생긴 구간이라고 생각합니다. 그동안 ‘모델 성능’이라고 한 덩어리로 불러온 결과를 모델 이름만으로는 설명할 수 없다는 뜻이니까요.',
    'p-1-10':
      '또 한 가지, 이번 발표를 두고 ‘모델이 에이전트를 삼키기 시작했다’는 식의 설명을 하는 사람들이 있는 것 같기도 합니다. 그동안 에이전트 개발사들이 모델 외부에 붙여오던 기능을 모델 제공사가 가져가기 시작했다는 의미로는 이해할 수 있습니다. 다만 ‘흡수’라는 표현만으로는 기능이 모델 자체에 들어간 것인지, 벤더가 제공하는 실행 환경에 들어간 것인지 제품의 경계를 설명하기 어렵습니다. Astra의 두 점수는 그 경계를 구분해서 볼 필요가 있다는 점을 보여줍니다.',
    'p-1-11':
      '8월 21일 NVIDIA가 내놓은 AVO 결과도 이 문제를 다른 각도에서 보여줍니다. ARC Prize가 단독으로 측정한 Claude Opus 5의 ARC-AGI-3 점수는 30.2%였고, NVIDIA는 같은 모델에 지속 메모리(Persistent Memory)와 감독 에이전트, 실패 시 복구 루프를 붙인 AVO라는 에이전트 아키텍처로 25개 환경 183개 레벨을 모두 통과했다고 발표했습니다. NVIDIA도 추론 설정과 평가 환경이 달라 두 측정치를 직접 비교하기 어렵다고 단서를 달았기 때문에, 30.2%와 만점의 차이를 AVO의 순수한 기여분이라고 말할 수는 없지만, 모델을 단독으로 평가한 결과만으로 그 모델을 사용한 에이전트 시스템의 성능을 예측하기 어렵다는 사례로는 볼 수 있습니다.',
    'p-1-12':
      '여기에 가장 강한 반론도 있습니다. 기능을 최소화한 표준 환경과 모델에 최적화된 전체 제품 구성을 비교한 것이니, 이 숫자만으로 OpenAI 고유의 프리미엄이 얼마인지, 다른 업무에서도 같은 격차가 나는지는 알 수 없다는 반론입니다. 맞는 지적입니다. 이 사례가 보여주는 것은 하네스의 보편적인 기여율이 아니라, 모델의 이름과 단독 점수만으로 실제 제품 성능을 판단해서는 안 된다는 점입니다.',

    'h2-2': '벤치마크 점수를 ‘모델’이 아니라 ‘제품 전체’의 성적표로 읽어야',
    'p-2-1':
      '사실 OpenAI의 발표 자료만 찬찬히 읽어봐도 알 수 있는 부분인데요. Astra의 Artificial Analysis 종합 지능 지수는 61.2로 전작인 Sol의 60.9와 거의 같고, 같은 표에 나란히 실린 Claude Fable 5.1의 65.7이나 Opus 5의 63.1보다 오히려 낮습니다. 소프트웨어 엔지니어링 과제인 DeepSWE에서도 Astra의 74.1%는 Gemini 3.8 Flash 73.8%, Opus 5 73.7%, Sol 72.7%와 사실상 같은 구간이고, 도구를 쓸 수 있게 한 Humanity’s Last Exam에서는 57.2%로 Fable 5.1의 65.0%에 밀립니다. OpenAI가 자기 발표 자료에 직접 그렇게 적어둔 숫자들입니다.',
    'p-2-2':
      '측정 조건도 저마다 다릅니다. 컴퓨터 조작 능력을 보는 OSWorld 2.0 표에는 Claude 점수를 공식 설정으로 쟀고 Fable 5.1 시스템 카드에 있는 수정된 과제와 채점 방식은 쓰지 않았다는 각주가 붙어 있고요. 헤드라인을 장식한 ARC-AGI-3의 99.9%에도 ‘실제 성능에 더 가깝도록 두 가지 설정을 바꾼’ Responses API 하네스로 돌린 결과라는 각주가 달려 있습니다.',
    'p-2-3':
      'ARC Prize도 분명하게 선을 그었습니다. 이 벤치마크에서 만점에 가까운 점수가 나왔다고 해서 AGI가 입증된 건 아니고, ARC-AGI-3는 규칙이 정해져 있고 닫혀 있는 환경이라 변수가 훨씬 많은 현실의 업무를 대신할 수 없다는 겁니다.',
    'p-2-4':
      '그래서 저는 이제 발표 자료를 읽는 방식도 좀 바뀌어야 한다고 생각합니다. <strong>‘이 모델이 얼마나 똑똑한가’가 아니라, ‘이 숫자를 우리 환경에서 재현하려면 무엇까지, 어디까지 함께 사야 하는가’를 봐야 하는 것</strong>이죠. 이 질문은 곧 그 실행 환경을 누가 제공하고 통제할 것인가로 이어집니다.',

    'h2-3': '하네스를 묶어서 팔 것인가, 열어서 표준을 만들 것인가',
    'p-3-1':
      '제 눈에는 이 파이프라인의 주도권을 두고 지금 두 회사가 서로 다른 방향으로 움직이는 것으로 보입니다. OpenAI는 하네스를 자사 모델에 맞춰 직접 만들고 API 안에 기본으로 넣으려고 하는 움직임일 수가 있을텐데, 결국 AI를 활용해서 최고의 성능을 확보하려는 고객은 OpenAI의 실행 환경 전체를 사용해야만 그게 가능하도록 설계하는 모양새죠. 반면에 DeepSeek는 얼마 전인 8월 13일 자사의 에이전트 하네스 구조를 MIT 라이선스로 공개해버렸는데, 모든 것이 플러그인이고, 심지어는 모델도 꼭 DeepSeek의 모델이 아니라 어떤 모델이든 갈아끼울 수 있게 만들어 두었습니다. DeepSeek가 내세우는 정의도 아주 단순하게, ‘Agent = Model + Harness’라는 겁니다.',
    'fig3-cap':
      '<b>그림 3.</b> 하네스를 벤더가 묶어서 제공하느냐, 우리가 쥐고 모델을 갈아 끼우느냐. 어느 쪽이든 대가는 다른 자리로 옮겨갑니다.',
    'p-3-2':
      '벤더가 모델과 하네스를 함께 제공하는 방식의 장점은 아주 명확합니다. 고객이 컨텍스트 관리나 복구 구조를 따로 조립하지 않아도 최적화된 구성을 바로 쓸 수 있고, 모델이 업데이트될 때 실행 환경도 함께 개선될 수가 있습니다. 그 과정에서 운영에 대한 부담의 상당 부분을 벤더에게 맡길 수 있다는 것 역시 중요한 가치입니다.',
    'p-3-3':
      '둘 다 의미있는 접근 방식이고, 기업의 입장에서도 지금 필요한 게 ‘승자가 누구일까?’라는 예측은 아닐 겁니다. 하지만 꼭 알아야 할 건, <strong>우리가 확보한 성능 가운데 어느 부분이 특정한 실행 환경에 의존하는지</strong>입니다. 그 환경을 떠나는 순간 같은 조건을 유지할 수 없고, 다른 환경이 그 차이를 얼마나 메워줄지는 다시 측정해야 하니까요.',
    'p-3-4':
      '그러니까, 지난 2년 동안 에이전트 개발사들이 쌓아온 ‘능력’이 사라진 게 아니라 그 영역을 놓고 이제 모델 제공사와도 경쟁해야 할 수 있는 상황이 되어가고 있는 겁니다. 서드파티가 만들던 파이프라인을 이제 모델 회사가 직접 만들어 번들로 팔기 시작한 것이라고 할 수 있으니까요. 여전히 이 파이프라인은 아주 중요한 필수 기능인데, 이제 공급자가 하나 둘 늘어나면서 그 값어치를 견줘볼 수 있는 상황이 만들어지기 시작한 겁니다.',
    'p-3-5':
      '실행 환경을 모델과 한 덩어리로 보고 별도의 평가 대상에서 빼버리면 이 영역은 그냥 벤더에게 맡길 수 밖에 없는 일이 됩니다. 반대로 여러 공급자가 제공하는 별도의 제품 영역으로 보면, 어느 정도 가치가 있고 얼마를 지불할 것인지 따져볼 수 있게 됩니다.',

    'h2-4': '기업에서는 이제 ‘하네스 프리미엄’을 측정해야',
    'p-4-1':
      '마땅한 이름이 없어서, 저는 이걸 <strong>‘하네스 프리미엄’</strong>이라고 불러보려고 합니다. <strong>특정한 벤더의 실행 환경 안에서 두드러지고, 그 환경을 떠날 때 그대로 따라온다고 장담할 수 없는 성능 구간</strong>이라는 뜻입니다. 앞에서 이야기했던 62.7%와 99.9% 사이에서 드러난 구간이 Astra의 하네스 프리미엄을 생각하게 만드는 사례인 셈입니다. 그 구간 전체가 OpenAI에만 귀속된다는 뜻은 아닙니다. 자사 업무에서 관측되는 프리미엄은 다른 하네스가 그 차이를 얼마나 메우는지 비교해야 알 수 있습니다.',
    'p-4-2':
      '당연하게도 아직은 자기 회사의 업무에 대해서 이런 하네스 프리미엄을 측정하기 시작한 기업도 거의 없을 겁니다. 일단은 ARC Prize에서 보여준 비교를 회사의 실제 업무에 맞게 옮겨보면 됩니다.',
    'step-1':
      '우리 회사의 실제 업무에서 대표 과제를 10~20개 고릅니다. 공개 벤치마크가 아니라 청구서 대사, 계약서 검토, 재고 조정, 티켓 처리 같은 우리 일이어야 합니다. 처음에는 결론을 확정하는 평가가 아니라 비교를 시작하기 위한 파일럿으로 삼습니다.',
    'step-2':
      '같은 과제를 벤더 하네스와 실제로 도입할 수 있는 오픈소스나 자체 하네스에서 돌립니다. 가능한 범위에서 사용할 도구와 권한, 시간과 비용 한도는 맞춥니다.',
    'step-3':
      '한 번의 결과만 보지 말고 몇 차례 반복합니다. 성공률뿐 아니라 완료 시간, 토큰과 실제 비용, 재시도 횟수, 사람이 검토하고 고치는 데 든 시간까지 함께 기록합니다.',
    'step-4':
      '그 격차가 우리가 지불하고 있는 하네스 프리미엄을 판단할 첫 번째 실측값입니다. 벤더를 옮길 때 잃을 수 있는 성능과, 다른 하네스가 대신 채워줄 수 있는 성능을 함께 보여주는 기준이 됩니다.',
    'p-4-3':
      '실제로 측정을 해보실 때 유의할 점을 두 가지만 덧붙여보면, 우선 하나는, 생각을 오래 시킬수록 비용이 올라갈 거라고 지레짐작하지 마시라는 겁니다. 앞의 26,098달러와 18,817달러가 보여주듯이, 추론 노력을 높이면 모델이 더 적은 횟수로 과제를 끝내기 때문에 호출 수와 토큰이 함께 줄어서 총비용이 오히려 내려가는 경우가 있습니다. 싼 설정이 늘 싼 게 아닌 것이죠.',
    'p-4-4':
      '다른 하나는 속도입니다. Astra는 가장 높은 설정에서 첫 응답이 나오기까지 수백 초가 걸립니다. 사람이 화면 앞에 앉아서 기다리는 방식이 아니라, 일을 맡겨두고 나중에 결과를 받아 검토하는 방식으로 써야 한다는 뜻인데요. 그래서 이런 모델의 도입은 쓰던 모델을 바꾸는 일이라기보다, 업무가 흘러가는 방식 자체를 다시 짜는 일에 가깝다고 생각합니다.',
    'p-4-5':
      '물론 이런 비교가 늘 깔끔하게 되는 건 아닙니다. 벤더가 제공하는 컨텍스트 관리 기능은 API에 붙어 있어서 따로 떼어내기 어려운 경우가 많으니까요. 그래도 그 기능을 끄고 한 번 재보는 건 가능합니다. 다만 이 값은 현재 벤더의 특정 기능에 얼마나 의존하는지 살펴보는 진단값이지, 대안 하네스의 성능은 아닙니다. ARC Prize의 표준 하네스 점수는 공통 조건에서 확인한 기준값이고, 실제 대안 하네스의 값은 그 하네스를 직접 돌려봐야 얻을 수 있습니다. 이 세 값을 같은 기준선처럼 읽어서는 안 됩니다.',
    'p-4-6':
      '이런 숫자들을 — 아주 정확한 숫자가 아니라도, Ballpark로 범위라도 — 갖고 있으면 벤더와 마주 앉았을 때의 질문, 내가 해야 할 고민이 달라질 겁니다. “어느 모델이 제일 좋습니까”가 아니라 “이 성능 가운데 무엇을 다른 환경에서도 다시 확보할 수 있습니까”를 묻게 되니까요.',
    'callout-1':
      '프리미엄이 크게 나온다면 그건 나쁜 소식이라고 생각할 필요는 없고 ‘정확한 정보’를 얻었다고 생각하면 됩니다. 우리가 모델만 고른 게 아니라 그 벤더의 실행 환경까지 함께 골랐다는 뜻이고, 계약 조건과 종속 리스크를 거기에 맞춰 다시 짜면 되는 일이니까요.',
    'p-4-7':
      '그렇다면 아예 반대로, 하네스는 우리가 쥐고 모델만 갈아 끼우는 구성은 어떨까요. 앞서 이야기한 DeepSeek의 방식이 그런 교체 비용을 낮추려는 그림이고, 충분히 유효한 선택지라고 생각합니다. 다만 여기서 오해하지 말아야 할 게, 이게 하네스를 처음부터 우리가 직접 만들어야 한다는 뜻은 아닙니다. 공개된 하네스를 가져다 쓸 수도 있고 상용 제품을 쓸 수도 있으니까요. 대신 우리 환경에 맞춰 손보고 버전을 따라가는 일, 그리고 보안 검토 등의 작업이 기업의 몫이 됩니다. 결국 벤더에게 내던 사용료가 사라지는 게 아니라, 우리 쪽 운영 부담과 책임으로 자리를 옮기는 셈입니다.',
    'p-4-8':
      '좋은 하네스가 모델 교체 비용을 낮출 수 있다는 근거는 ARC-AGI-3의 격차나 AVO의 개선 폭 같은 성능 비교가 아니라, DeepSeek가 하네스와 모델을 분리된 구성 요소로 설계했다는 데 있습니다. 같은 하네스 위에 여러 모델을 올려놓고 우리 업무로 비교할 수 있는 기반을 만드는 것이죠. 다만 모델을 바꿔도 성능이 그대로 유지된다는 뜻은 아닙니다. 모델마다 다시 조정하고 검증해야 하고, 좋은 하네스를 확보하고 유지하는 일도 우리 몫입니다. 종속성이 사라지는 게 아니라, 모델 벤더에 대한 종속이 우리가 택한 하네스와 그것을 다룰 역량에 대한 의존으로 옮겨가는 셈입니다.',
    'p-4-9':
      '그래서 결국은 우리 업무에서 잰 하네스 프리미엄이 얼마나 되고, 그만큼이 우리에게 꼭 필요한 성능이냐가 판단 기준이 될 텐데요. 격차가 크지 않거나 그 정도로도 업무가 충분히 돌아간다면 모델 교체가 쉬운 중립적인 하네스가 더 합리적일 거고, 그 차이가 사업의 성패를 가르는 업무라면 종속을 감수하는 편이 나을 수도 있습니다. 어느 쪽을 택하든 그 판단을 하려면 앞에서 이야기한 측정값, 그에 대한 감각이 먼저 있어야 하겠죠.',

    'h2-5': '결국, 세 가지 질문',
    'p-5-1': '기업에서 AI 도입을 책임지는 분들이라면 적어도 다음 세 가지를 직접 고민하고 확인해야 합니다.',
    'q-1': '우리 업무에서 벤더 하네스와 실제로 선택할 수 있는 다른 하네스의 성능 격차는 얼마나 될까',
    'q-2': '그 격차는 성공률 뿐 아니라 시간, 비용, 사람의 검토 부담까지 합쳤을 때도 그 값을 지불할 만한 격차인가',
    'q-3': '벤더 하네스를 택할 때의 종속 위험과 중립 하네스를 운영할 때의 부담 중에서 어느 쪽을 감당할 것인가',
    'p-5-2':
      'Astra의 99.9%. 이 숫자는 모델 하나의 지능 지수가 아니라 모델과 실행 환경을 합친 제품 전체의 성적표에 가깝습니다. 그렇다고 그 숫자가 쓸모없다는 뜻은 아닙니다. 다만, 그 성적표가 우리 회사에서도 재현되는지, 그중 무엇이 다른 환경에서도 유지되는지는, 우리 스스로의 고민과 숙제를 해 가면서 직접 대답해야 할, 별도의 질문입니다.',

    'about-text':
      'Ben Eum은 ImperAI의 창업자이자 CEO입니다. ImperAI는 기업의 AI 에이전트가 행동하는 순간의 정책·증거·권한·판정·실행을 책임 가능한 Decision으로 보존하는 Enterprise Agent Control Plane <b>Toren</b>을 만듭니다.',
    'about-link-site': 'ImperAI 둘러보기 →',
    'about-link-toren': 'Toren 살펴보기 →',
    'post-sources':
      '참고 자료 — ARC Prize, ARC-AGI-3 검증 결과 및 표준 하네스·Provider Adapter 비교; OpenAI, GPT-6 Astra 발표 자료; NVIDIA, AVO 발표(2026-08-21); Artificial Analysis 종합 지능 지수; DeepSeek 에이전트 하네스 공개(2026-08-13).',
    'post-note': '본문의 수치와 인용은 2026년 9월 초까지 공개된 자료를 기준으로 정리했습니다.',

    'share-label': '공유하기',
    'share-copy': '링크 복사',
    'share-copied': '복사됨',
    'nav-prev-dir': '이전 글',
    'nav-prev-title': '데이터가 해자가 되려면, 결과가 돌아와야 합니다',
    'nav-next-dir': '다음 글',
    'nav-next-title': '— 최신 글입니다',
    'toc-label': '목차',
    'toc-list': `
      <li><a href="#h2-1">두 개의 점수</a></li>
      <li><a href="#h2-2">제품 전체의 성적표</a></li>
      <li><a href="#h2-3">묶을 것인가, 열 것인가</a></li>
      <li><a href="#h2-4">하네스 프리미엄 측정</a></li>
      <li><a href="#h2-5">세 가지 질문</a></li>
    `,
    'cta-eyebrow': 'Harness premium · Toren by ImperAI',
    'cta-heading': '우리가 확보한 성능 가운데 어느 부분이 특정한 실행 환경에 의존하고 있습니까?',
    'cta-btn': 'Toren 살펴보기',
    'foot-copy': '© 2026 주식회사 임페라이(ImperAI Inc.). All rights reserved.',
    'foot-legal':
      '주식회사 임페라이 <span class="sep">|</span> 대표 음병찬 <span class="sep">|</span> 사업자등록번호 346-87-03904 <span class="sep">|</span> 서울특별시 서초구 강남대로53길 8',
    'foot-link-insight': 'Insight',
    'foot-link-cta': 'Get Started',
    'foot-link-email': 'inquiry@imperai.ai',
    'foot-link-privacy': '개인정보처리방침',
  },

  en: {
    'post-eyebrow': 'Insight — by ImperAI',
    'post-title': 'What OpenAI’s Astra<br /><em>Is Really Selling</em>',
    'post-subtitle': 'The “harness premium” behind Astra’s two scores',
    'post-meta-author': 'Ben Eum · ImperAI',
    'post-meta-date': 'September 2026',
    'post-meta-read': '11 min read',

    'p-lead':
      'OpenAI unveiled GPT-6 Astra on September 3. Greg Brockman opened with “Welcome to the AGI era,” and the headlines filled up with numbers: 99.9% on ARC-AGI-3, 97.6% on FrontierMath Tier 4.',
    'p-intro-1':
      'It is still early, but reactions have already split two ways — as they do with every model launch. One camp says the AGI era has genuinely arrived. The other points out that on composite intelligence indices Astra is barely distinguishable from its predecessor, and calls the launch another marketing stunt. Beyond the question of whether Astra is really AGI, or whether the jump in capability is real, there is a third thing worth looking at.',

    'h2-1': 'Why one model produced two scores',
    'p-1-1':
      'ARC Prize’s standard harness returned 62.7%. OpenAI’s Provider Adapter returned 99.9%. One model, two scores.',
    'p-1-2':
      'A harness is the execution environment wrapped around a model. It is the software layer outside the model that manages how the model runs: what it gets to see, what it gets to remember, how it uses tools, and where it restarts after a failure.',
    'p-1-3':
      'ARC Prize’s standard harness gives every model the same conditions. It hands over the current state of the environment and the list of available actions — nothing else. No rules, no stated goal, no memory scaffolding. If the model wants to remember what it learned in an earlier step, it has to write itself a note, and the next step gives it only that note back. In human terms: walking back into the room with your memory wiped, holding nothing but the sticky note you left yourself.',
    'p-1-4':
      'The Provider Adapter, by contrast, is a harness OpenAI built for its own model. It preserves the reasoning state the model accumulates while working on a problem, carrying it across requests. That is internal state that never surfaces, which makes it hard for another company to replicate. It also compresses long exchanges automatically, so earlier work stays reachable.',
    'p-1-5':
      'Look at the standard-harness scores as reasoning effort is dialed up: High 54.82%, XHigh 59.34%, Max 62.71%. However long you let the model think, 62.7% was the ceiling. 99.9% is not a number that reasoning settings can explain.',
    'p-1-6':
      'The reverse holds too. On the Provider Adapter, turning reasoning effort off entirely — none — still returns 96.7%. That is 34 points above the 62.7% the standard harness reached at maximum thinking. In this evaluation, at least, which execution environment the model ran in mattered more than how long it was allowed to think.',
    'fig1-cap':
      '<b>Figure 1.</b> The same model, run on two harnesses. Raising reasoning effort to Max still capped the standard harness at 62.7%. Source: ARC Prize, ARC-AGI-3.',
    'p-1-7':
      'None of this means the entire gap belongs to a harness only OpenAI could build. The standard harness is deliberately stripped down for fair comparison, and the Provider Adapter bundles several capabilities at once. What this does establish is simpler: the same model name can produce very different results once the execution conditions change.',
    'p-1-8':
      'Cost ran the other way. The standard harness that scored 62.7% cost $26,098 for one pass through the benchmark. The Provider Adapter that scored 99.9% cost $18,817. The higher score was the cheaper run. Across the 167 tasks both approaches solved, the Provider Adapter finished 3.66 times faster and used close to half the tokens.',
    'fig2-cap':
      '<b>Figure 2.</b> The higher score was also cheaper and faster. The cheap setting is not always the cheap one. Source: ARC Prize, ARC-AGI-3.',
    'p-1-9':
      'The number that made the headlines was 99.9%. The number worth studying is the band between the two scores — because it means what we have been calling “model performance,” as a single lump, cannot be explained by the model’s name alone.',
    'p-1-10':
      'Some people are describing this launch as the model starting to swallow the agent. As shorthand for model providers absorbing capabilities that agent companies used to bolt on from outside, that reading holds. But “absorption” alone does not tell you where the product boundary sits: whether the capability moved into the model itself, or into the execution environment the vendor supplies. Astra’s two scores are an argument for keeping those two things apart.',
    'p-1-11':
      'NVIDIA’s AVO results, released on August 21, show the same problem from another angle. ARC Prize measured Claude Opus 5 on ARC-AGI-3 at 30.2% on its own. NVIDIA reported that the same model, wrapped in an agent architecture called AVO — persistent memory, a supervising agent, and a recovery loop on failure — cleared all 183 levels across 25 environments. NVIDIA itself noted that the two measurements are hard to compare directly, given different reasoning settings and evaluation conditions, so the distance between 30.2% and a perfect score cannot be credited to AVO alone. It does stand as an example of how poorly a model’s standalone score predicts the performance of an agent system built on that model.',
    'p-1-12':
      'There is a strong objection to all of this. Comparing a deliberately minimal standard environment against a fully optimized product configuration tells you neither how large OpenAI’s specific premium is, nor whether the same gap appears on other kinds of work. That is a fair point. What the case demonstrates is not a universal contribution rate for harnesses, but that a model’s name and standalone score are not a basis for judging real product performance.',

    'h2-2': 'Read the benchmark as a scorecard for the product, not the model',
    'p-2-1':
      'You can see this by reading OpenAI’s own launch materials carefully. Astra’s Artificial Analysis composite intelligence index is 61.2 — essentially level with its predecessor Sol at 60.9, and lower than Claude Fable 5.1 at 65.7 or Opus 5 at 63.1, both listed in the same table. On DeepSWE, a software engineering task, Astra’s 74.1% sits in the same band as Gemini 3.8 Flash at 73.8%, Opus 5 at 73.7%, and Sol at 72.7%. On Humanity’s Last Exam with tools enabled, Astra’s 57.2% trails Fable 5.1’s 65.0%. These are the numbers OpenAI put in its own materials.',
    'p-2-2':
      'The measurement conditions differ too. The OSWorld 2.0 table on computer use carries a footnote saying the Claude scores were measured with official settings, without the revised tasks and grading method described in the Fable 5.1 system card. The headline 99.9% on ARC-AGI-3 carries its own footnote: the run used a Responses API harness with two settings changed “to better reflect real-world performance.”',
    'p-2-3':
      'ARC Prize drew a clear line as well. A near-perfect score on this benchmark does not demonstrate AGI, and ARC-AGI-3 is a closed environment with fixed rules — it cannot stand in for real work, which carries far more variables.',
    'p-2-4':
      'So I think the way we read launch materials has to change. <strong>The question is no longer “how smart is this model,” but “to reproduce this number in our environment, what — and how much — do we have to buy along with it?”</strong> And that question leads directly to who supplies and controls the execution environment.',

    'h2-3': 'Bundle the harness, or open it and set a standard',
    'p-3-1':
      'As I read it, two companies are moving in opposite directions over control of this pipeline. OpenAI appears to be building the harness for its own model and folding it into the API by default — which effectively means that a customer who wants top performance has to run inside OpenAI’s execution environment to get it. DeepSeek went the other way on August 13, releasing its agent harness architecture under an MIT license. Everything is a plugin, including the model: you can swap in any model, not just DeepSeek’s. Their framing is deliberately plain — Agent = Model + Harness.',
    'fig3-cap':
      '<b>Figure 3.</b> The vendor bundles the harness, or you hold it and swap models. Either way, the cost simply moves to a different place.',
    'p-3-2':
      'The advantages of a vendor supplying model and harness together are obvious. Customers get an optimized configuration without assembling context management and recovery structures themselves, and the execution environment can improve alongside the model. Handing a large share of the operational burden to the vendor is real value in its own right.',
    'p-3-3':
      'Both approaches are legitimate, and what an enterprise needs right now is not a prediction about who wins. What it does need to know is <strong>which part of the performance it has secured depends on one particular execution environment</strong>. The moment you leave that environment, you cannot hold those conditions, and how much another environment closes the gap is something you have to measure again.',
    'p-3-4':
      'So the capability that agent companies have built up over the past two years has not evaporated. It is that they may now have to compete for that territory with the model providers themselves. The pipeline third parties used to build is now being built and bundled by the model companies. It remains an essential function — but with more than one supplier, its value has finally become something you can price.',
    'p-3-5':
      'If you treat the execution environment as one lump with the model and leave it out of evaluation entirely, this territory simply defaults to the vendor. Treat it as a separate product category with multiple suppliers, and you can start asking what it is worth and what you are willing to pay for it.',

    'h2-4': 'Enterprises now have to measure the harness premium',
    'p-4-1':
      'For lack of a better name, I will call this the <strong>harness premium</strong>: <strong>the band of performance that stands out inside one vendor’s execution environment, and that you cannot assume will follow you out of it</strong>. The band between 62.7% and 99.9% is the case that makes Astra’s harness premium worth thinking about. That does not mean the whole band belongs to OpenAI. The premium you observe on your own work can only be established by comparing how much of the gap another harness closes.',
    'p-4-2':
      'Almost no company has begun measuring this on its own workload yet. Start by porting the comparison ARC Prize ran onto your actual work.',
    'step-1':
      'Pick 10–20 representative tasks from real work at your company. Not public benchmarks — invoice reconciliation, contract review, inventory adjustment, ticket handling. Treat the first pass as a pilot that starts the comparison, not an evaluation that settles it.',
    'step-2':
      'Run the same tasks on the vendor harness and on an open-source or in-house harness you could actually adopt. Match the available tools, permissions, time limits, and cost caps as closely as you can.',
    'step-3':
      'Do not judge from a single run — repeat it several times. Record not only success rate but completion time, tokens and actual cost, retry counts, and the human hours spent reviewing and correcting the output.',
    'step-4':
      'That gap is your first measured value for the harness premium you are paying. It tells you what performance you might lose by switching vendors, and how much of it another harness can supply instead.',
    'p-4-3':
      'Two cautions when you run this. The first: do not assume that longer thinking always costs more. As the $26,098 and $18,817 figures show, raising reasoning effort can let the model finish in fewer attempts, cutting both call counts and tokens, so the total bill goes down. The cheap setting is not always the cheap one.',
    'p-4-4':
      'The second is speed. At its highest setting, Astra can take hundreds of seconds to produce a first response. That is not a model you sit and wait for; it is one you hand work to and review later. Adopting a model like this is less a matter of swapping out the model you were using, and more a matter of redesigning how work flows.',
    'p-4-5':
      'This comparison is not always clean. Vendor context-management features are often welded to the API and hard to isolate. You can still turn them off and measure once with them disabled — but read that value for what it is: a diagnostic of how much you currently depend on that vendor’s specific features, not a measure of an alternative harness. The ARC Prize standard-harness score is a reference point taken under common conditions, and the value for a real alternative harness only comes from running that harness yourself. Do not read the three numbers as if they shared a baseline.',
    'p-4-6':
      'Having these numbers — even ballpark ranges rather than precise figures — changes the questions you bring to a vendor meeting, and the questions you ask yourself. Not “which model is best,” but “which part of this performance can I secure again somewhere else?”',
    'callout-1':
      'A large premium is not bad news. It is accurate information. It means you did not just choose a model, you chose that vendor’s execution environment along with it — and you can rewrite your contract terms and your lock-in risk accordingly.',
    'p-4-7':
      'What about the opposite arrangement, where you hold the harness and swap models in and out? DeepSeek’s approach is aimed at lowering exactly that switching cost, and it is a legitimate option. One thing not to misread: it does not mean building a harness from scratch. You can take an open one, or buy a commercial product. What becomes yours is adapting it to your environment, keeping up with versions, and running the security reviews. The fee you were paying the vendor does not disappear — it relocates to your own operational burden and accountability.',
    'p-4-8':
      'The case that a good harness lowers model-switching cost does not rest on performance comparisons like the ARC-AGI-3 gap or AVO’s improvement. It rests on DeepSeek having designed harness and model as separable components — giving you a base on which several models can be compared against your own work. That does not mean performance carries over unchanged when you switch models. Each model has to be tuned and validated again, and obtaining and maintaining a good harness is on you. Dependency does not vanish; dependency on a model vendor moves to dependency on the harness you chose and your ability to run it.',
    'p-4-9':
      'So the decision comes down to how large the harness premium is on your own work, and whether that band is performance you actually need. If the gap is small, or the work runs well enough without it, a neutral harness that makes model swaps easy is the more sensible choice. If the difference decides whether the business succeeds, accepting the lock-in may be the better call. Either way, you need the measurement — and a feel for it — before you can make the judgment.',

    'h2-5': 'Three questions, in the end',
    'p-5-1':
      'If you are accountable for AI adoption at your company, at minimum you should work through and verify the following three.',
    'q-1':
      'On our work, how large is the performance gap between the vendor harness and an alternative harness we could realistically choose?',
    'q-2':
      'Is that gap worth paying for once you account for time, cost, and human review burden — not just success rate?',
    'q-3':
      'Between the lock-in risk of the vendor harness and the operating burden of a neutral one, which are we prepared to carry?',
    'p-5-2':
      'Astra’s 99.9%. That number is less an intelligence score for one model than a scorecard for an entire product — model and execution environment combined. That does not make it useless. But whether that scorecard reproduces at your company, and which parts of it hold up in another environment, are separate questions you have to answer for yourself, by doing the work.',

    'about-text':
      'Ben Eum is the founder and CEO of ImperAI. ImperAI builds <b>Toren</b>, an Enterprise Agent Control Plane that preserves the policy, evidence, authority, verdict, and execution behind agent actions as accountable Decisions.',
    'about-link-site': 'Explore ImperAI →',
    'about-link-toren': 'Explore Toren →',
    'post-sources':
      'References — ARC Prize, ARC-AGI-3 verification results and the standard-harness vs. Provider Adapter comparison; OpenAI, GPT-6 Astra launch materials; NVIDIA, AVO announcement (2026-08-21); Artificial Analysis composite intelligence index; DeepSeek agent harness release (2026-08-13).',
    'post-note': 'Figures and citations reflect material published through early September 2026.',

    'share-label': 'Share',
    'share-copy': 'Copy link',
    'share-copied': 'Copied',
    'nav-prev-dir': 'Previous',
    'nav-prev-title': 'Data Becomes a Moat Only When Outcomes Come Back',
    'nav-next-dir': 'Next',
    'nav-next-title': '— This is the latest post',
    'toc-label': 'Contents',
    'toc-list': `
      <li><a href="#h2-1">Two scores</a></li>
      <li><a href="#h2-2">A product scorecard</a></li>
      <li><a href="#h2-3">Bundle or open</a></li>
      <li><a href="#h2-4">Measuring the premium</a></li>
      <li><a href="#h2-5">Three questions</a></li>
    `,
    'cta-eyebrow': 'Harness premium · Toren by ImperAI',
    'cta-heading': 'How much of the performance you rely on depends on one vendor’s execution environment?',
    'cta-btn': 'Explore Toren',
    'foot-copy': '© 2026 ImperAI Inc. All rights reserved.',
    'foot-legal':
      'ImperAI Inc. <span class="sep">|</span> CEO: Ben Eum <span class="sep">|</span> Business Registration No. 346-87-03904 <span class="sep">|</span> 8, Gangnam-daero 53-gil, Seocho-gu, Seoul, Republic of Korea',
    'foot-link-insight': 'Insight',
    'foot-link-cta': 'Get Started',
    'foot-link-email': 'inquiry@imperai.ai',
    'foot-link-privacy': 'Privacy Policy',
  },
};
