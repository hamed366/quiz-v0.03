
export function poetry(verse) {
    let result = false;

    verse.trim();
    let poem = verse[verse.length - 1];
    
    switch (poem) {
        case 'ا':
            console.log("از آن، دراز نکردم سخن درین معنی  که کار زندگی لاله کار مختصریست");
            result = true;
            break;
        case 'ء':
            console.log("از آن، دراز نکردم سخن درین معنی  که کار زندگی لاله کار مختصریست");
            result = true;
            break;
        case 'آ':
            console.log("از آن، دراز نکردم سخن درین معنی  که کار زندگی لاله کار مختصریست");
            result = true;
            break;
        case 'ب':
            console.log("بترس ز اه ستمدیدگان، که در دل شب   نشسته‌اند که نفرین بپادشاه کنند");
            result = true;
            break;
        case 'ز':
            console.log("زمام کار، بدست تو چون سپرد سپهر   به کار خلق، چرا دیگران نگاه کنند");
            result = true;
            break;
        case 'م':
            console.log("مخسب، تا که نپیچاند آسمانت گوش    چنین معامله را بهر انتباه کنند");
            result = true;
            break;
        case 'چ':
            console.log("چو جای خودشناسی، بحیله مدعیان   ترا ز اوج بلندی، به قعر چاه کنند");
            result = true;
            break;

        case 'د':
            console.log("دوش، یک من هیمه را باری نوشت   خوشه‌ای آورد و خرواری نوشت");
            result = true;
            break;

        case 'ت':
            console.log("تو چه میدانی که دزد خانه کیست  زین حکایت حق کدام، افسانه چیست");
            result = true;
            break;

        case 'پ':
            console.log("پیش قاضی آن دروغ، این راست گفت  در حقیقت، هر چه هر کس خواست گفت");
            result = true;
            break;
        case 'و':
            console.log("واگذار این لاشهٔ ناچیز را  در نورد این راه آفت خیز را");
            result = true;
            break;
        case 'س':
            console.log("ساقی میکدهٔ دهر، قضاست  همه کس، باده ازین ساغر خورد");
            result = true;
            break;
        case 'ک':
            console.log("کسی بزرگ نگردد مگر ز کار بزرگ  گر از تو کار نیاید، زمانه را چه گناه");
            result = true;
            break;
        case 'ر':
            console.log("رهی که گمرهیش در پی است نسپردن دریکه فتنه‌اش اندر پس است نگشودن");
            result = true;
            break;

    }

    if (result) {
        return true;
    } else {
        let count = 0;
      
        for (let i = 0; i < verse.length - 1; i++) {
           
            if (verse[i] == " ") {
                count++;
            }else{
                count=0;
            }
            
            if (count === 2) {
                poem = verse[i-2];
                
            }
        }
        switch (poem) {
            case 'ا':
                console.log("از آن، دراز نکردم سخن درین معنی  که کار زندگی لاله کار مختصریست");
                result = true;
                break;
            case 'ء':
                console.log("از آن، دراز نکردم سخن درین معنی  که کار زندگی لاله کار مختصریست");
                result = true;
                break;
            case 'آ':
                console.log("از آن، دراز نکردم سخن درین معنی  که کار زندگی لاله کار مختصریست");
                result = true;
                break;
            case 'ب':
                console.log("بترس ز اه ستمدیدگان، که در دل شب   نشسته‌اند که نفرین بپادشاه کنند");
                result = true;
                break;
            case 'ز':
                console.log("زمام کار، بدست تو چون سپرد سپهر   به کار خلق، چرا دیگران نگاه کنند");
                result = true;
                break;
            case 'م':
                console.log("مخسب، تا که نپیچاند آسمانت گوش    چنین معامله را بهر انتباه کنند");
                result = true;
                break;
            case 'چ':
                console.log("چو جای خودشناسی، بحیله مدعیان   ترا ز اوج بلندی، به قعر چاه کنند");
                result = true;
                break;

            case 'د':
                console.log("دوش، یک من هیمه را باری نوشت   خوشه‌ای آورد و خرواری نوشت");
                result = true;
                break;

            case 'ت':
                console.log("تو چه میدانی که دزد خانه کیست  زین حکایت حق کدام، افسانه چیست");
                result = true;
                break;

            case 'پ':
                console.log("پیش قاضی آن دروغ، این راست گفت  در حقیقت، هر چه هر کس خواست گفت");
                result = true;
                break;
            case 'و':
                console.log("واگذار این لاشهٔ ناچیز را  در نورد این راه آفت خیز را");
                result = true;
                break;
            case 'س':
                console.log("ساقی میکدهٔ دهر، قضاست  همه کس، باده ازین ساغر خورد");
                result = true;
                break;
            case 'ک':
                console.log("کسی بزرگ نگردد مگر ز کار بزرگ  گر از تو کار نیاید، زمانه را چه گناه");
                result = true;
                break;
            case 'ر':
                console.log("رهی که گمرهیش در پی است نسپردن دریکه فتنه‌اش اندر پس است نگشودن");
                result = true;
                break;

            default:
                result = null;
                break;
        }

       

    }

    
    return result
}


poetry("شنیده‌اید که آسایش بزرگان چیست  برای خاطر بیچارگان نیاسودن")