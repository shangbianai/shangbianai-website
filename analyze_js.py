
with open('assets/index-e324df58.js', 'r', encoding='utf-8') as f:
    content = f.read()

def print_context(keyword, length=500):
    print(f'Looking for {keyword}...')
    idx = content.find(keyword)
    if idx != -1:
        start = max(0, idx - length)
        end = min(len(content), idx + len(keyword) + length)
        print(f'--- Context for {keyword} ---')
        print(content[start:end])
        print('-----------------------------')
    else:
        print(f'{keyword} not found')

print_context('请输入您的姓名', 1000)
print_context('AI驱动的智能创作平台', 1000)
print_context('VIP版本', 1000)
print_context('logo-small.jpg', 1000)
